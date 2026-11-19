// Contrôle i18n : doit finir à 0 erreur.  node tools/check-i18n.js [--verbose]
const fs = require('fs'), path = require('path');
const acorn = require('acorn'), walk = require('acorn-walk');
const R = path.join(__dirname, '..'), V = process.argv.includes('--verbose');
const en = JSON.parse(fs.readFileSync(path.join(R, 'lang/en.json'), 'utf8'));
const fr = JSON.parse(fs.readFileSync(path.join(R, 'lang/fr.json'), 'utf8'));
const glossary = JSON.parse(fs.readFileSync(path.join(__dirname, 'glossary-fr.json'), 'utf8'));
const gameTerms = JSON.parse(fs.readFileSync(path.join(__dirname, 'game-terms.json'), 'utf8'));
const NS = ['ui', 'msg', 'pkmn', 'move', 'ability', 'item', 'area', 'type', 'field', 'status', 'nature', 'split', 'starsign', 'season', 'skill', 'ribbon'];
const FORMAT_NS = new Set([...NS, 'raw']);
const errors = {}; const err = (cat, msg) => (errors[cat] = errors[cat] || []).push(msg);
const vars = s => [...String(s).matchAll(/\{(\w+)\}/g)].map(m => m[1]).sort().join(',');
const strip = s => String(s).replace(/<[^>]*>/g, ' ').replace(/\{\w+\}/g, 'X');
const allowFile = path.join(__dirname, 'check-allow.json');
const allow = fs.existsSync(allowFile) ? JSON.parse(fs.readFileSync(allowFile, 'utf8')) : {};

// 1-2. Clés EN sans FR, variables divergentes, octets/encodage
for (const [f, txt] of [['en', 'lang/en.json'], ['fr', 'lang/fr.json']]) {
  const b = fs.readFileSync(path.join(R, txt));
  if (b[0] === 0xef && b[1] === 0xbb && b[2] === 0xbf) err('encodage', `${txt} contient un BOM`);
}
for (const k of Object.keys(en)) {
  if (!NS.includes(k.split('.')[0])) err('clé sans namespace', k);
  if (fr[k] === undefined || fr[k] === '') { err('clé EN sans FR', k); continue; }
  if (vars(en[k]) !== vars(fr[k])) err('variables différentes', `${k} : en {${vars(en[k])}} / fr {${vars(fr[k])}}`);
  const tagsEn = (en[k].match(/<\/?\w+/g) || []).sort().join(), tagsFr = (fr[k].match(/<\/?\w+/g) || []).sort().join();
  if (tagsEn !== tagsFr) err('balises HTML différentes', k);
}
for (const k of Object.keys(fr)) if (en[k] === undefined) err('clé FR orpheline', k);

// 3. Typographie FR (hors balises et variables)
for (const [k, v] of Object.entries(fr)) {
  if (k.split('.')[0] !== 'ui' && !k.includes('.', k.indexOf('.') + 1)) continue; // noms : graphie officielle
  if (v === en[k] || allow.typographie?.[k]) continue; // code / sigle recopié, ou exception justifiée
  const p = String(v).replace(/<[^>]*>/g, '').replace(/\{\w+\}/g, 'X');
  if (/[^ \s][!?;»]|[^ \s\d]:(\s|$)|« |«(?! )/.test(p)) err('typographie (insécable)', `${k} : ${v}`);
  if (/ [!?;:»]/.test(p)) err('typographie (espace simple avant ponctuation)', `${k} : ${v}`);
  if (/\.\.\.|"|'/.test(p)) err('typographie (… « » ’)', `${k} : ${v}`);
  if (/\bPokemons?\b|\bPokémons\b/.test(p)) err('terme proscrit', `${k} : ${v}`);
}

// 4. Glossaire : termes du jeu absents, noms FR divergents
const gKeys = new Set(glossary.map(g => `${g.categorie}.${g.cle}`));
for (const t of gameTerms) if (!gKeys.has(`${t.categorie}.${t.cle}`)) err('terme du jeu absent du glossaire', `${t.categorie}.${t.cle}`);
for (const g of glossary) {
  const k = `${g.categorie}.${g.cle}`;
  if (!g.fr) err('glossaire sans FR', k);
  else if (fr[k] !== g.fr) err('FR divergent du glossaire', `${k} : « ${fr[k]} » ≠ « ${g.fr} »`);
}
// Même terme EN = même terme FR : un nom du glossaire cité dans une phrase EN doit apparaître sous sa forme FR
const named = glossary.filter(g => g.fr && ['type', 'status', 'move', 'ability', 'item', 'pkmn'].includes(g.categorie) && g.en.length >= 4 && /^[A-Z]/.test(g.en) && g.en !== g.fr);
const byEn = {}; for (const g of named) (byEn[g.en] = byEn[g.en] || new Set()).add(g.fr);
for (const [k, v] of Object.entries(en)) {
  if (!/\.(info|lore|unlockDescription|subtitle)(_\d+)?$|^ui\./.test(k) || !fr[k] || allow['terme FR hors glossaire']?.[k]) continue;
  const found = Object.keys(byEn).filter(term => strip(v).includes(term));
  for (const [term, frs] of Object.entries(byEn)) {
    if (found.some(o => o !== term && o.includes(term))) continue; // inclus dans un terme plus long (Electric → Electric Terrain)
    if (!new RegExp(`(^|[^\\w-])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=-type|-Type|[^\\w-]|$)`).test(strip(v))) continue;
    if (![...frs].some(f => fr[k].includes(f))) err('terme FR hors glossaire', `${k} : « ${term} » attendu « ${[...frs].join(' / ')} » — ${fr[k]}`);
  }
}

// 5. Code : clés nues ou ambiguës
const files = ['index.html', ...fs.readdirSync(path.join(R, 'scripts')).filter(f => f.endsWith('.js')).map(f => 'scripts/' + f),
  ...fs.readdirSync(path.join(R, 'scripts/PR')).map(f => 'scripts/PR/' + f)].filter(f => !/fuse|HackTimer/.test(f));
const checkCall = (node, src, file) => {
  const c = node.callee, name = c.type === 'Identifier' ? c.name : '';
  const where = `${file}:${src.slice(0, node.start).split('\n').length}`;
  if (name === 't') {
    const a = node.arguments[0];
    if (!a || a.type !== 'Literal' || typeof a.value !== 'string') { if (!(file.endsWith('i18n.js'))) err('clé t() non littérale', where); return; }
    if (!NS.includes(a.value.split('.')[0])) err('clé nue (sans namespace)', `${where} t('${a.value}')`);
    else if (en[a.value] === undefined) err('clé inexistante', `${where} t('${a.value}')`);
  }
  if (name === 'format' && !file.endsWith('explore.js:def')) {
    const ns = node.arguments[1];
    if (!ns) err('format() sans namespace (ambigu)', where);
    else if (ns.type === 'Literal' && !FORMAT_NS.has(ns.value)) err('format() namespace inconnu', `${where} '${ns.value}'`);
  }
  if (name === 'tName' && node.arguments[0]?.type === 'Literal' && !NS.includes(node.arguments[0].value)) err('tName() namespace inconnu', where);
};
const scanJs = (src, file) => {
  let ast; try { ast = acorn.parse(src, { ecmaVersion: 'latest', allowReturnOutsideFunction: true }); } catch (e) { err('JS invalide', `${file} : ${e.message}`); return; }
  walk.full(ast, n => {
    if (n.type === 'CallExpression') checkCall(n, src, file);
    // Texte traduit utilisé comme clé : obj[... t(...) ...] dépend de la langue (ex. item[x + t('ui.memory')])
    if (n.type === 'MemberExpression' && n.computed) walk.full(n.property, m => {
      if (m.type === 'CallExpression' && m.callee.type === 'Identifier' && ['t', 'format', 'tName'].includes(m.callee.name))
        err('texte traduit utilisé comme clé', `${file}:${src.slice(0, m.start).split('\n').length} ${m.callee.name}() dans [...]`);
    });
  });
};
for (const f of files) {
  const src = fs.readFileSync(path.join(R, f), 'utf8');
  if (f.endsWith('.js')) scanJs(src, f);
  else {
    for (const m of src.matchAll(/data-i18n(?:-title|-placeholder|-alt)?="([^"]+)"/g)) {
      if (!NS.includes(m[1].split('.')[0])) err('clé nue (sans namespace)', `${f} data-i18n="${m[1]}"`);
      else if (en[m[1]] === undefined) err('clé inexistante', `${f} data-i18n="${m[1]}"`);
    }
    for (const m of src.matchAll(/\son\w+=(["'])([\s\S]*?)\1/g)) scanJs(m[2], f + '#inline');
  }
}

// Auto-test : une clé nue et un format() sans namespace doivent être détectés
{
  const before = Object.values(errors).flat().length;
  scanJs("t('psychic'); format('glaciate'); item[x + t('ui.memory')]", '__selftest__');
  const caught = Object.values(errors).flat().filter(e => e.startsWith('__selftest__')).length;
  for (const c in errors) { errors[c] = errors[c].filter(e => !e.startsWith('__selftest__')); if (!errors[c].length) delete errors[c]; }
  if (caught !== 3) err('auto-test', `clé nue / format() ambigu / t() dans [] non détectés (${caught}/3)`);
  void before;
}

const n = Object.values(errors).flat().length;
for (const [c, l] of Object.entries(errors)) {
  console.log(`✗ ${c} : ${l.length}`);
  for (const e of l.slice(0, V ? l.length : 5)) console.log('    ' + e);
}
const tr = Object.keys(en).filter(k => fr[k]).length;
console.log(`\nClés : ${Object.keys(en).length} | traduites : ${tr} (${(100 * tr / Object.keys(en).length).toFixed(1)} %) | erreurs : ${n}`);
process.exit(n ? 1 : 0);
