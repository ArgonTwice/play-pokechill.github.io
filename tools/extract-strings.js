// Extrait les chaînes affichées du jeu et (avec --apply) les remplace par des appels t().
//   node tools/extract-strings.js            → liste les candidats, écrit tools/strings/candidates.json, affiche le total
//   node tools/extract-strings.js --apply    → réécrit scripts/*.js + index.html et complète tools/strings/en.json
// Seul l'affichage change : identifiants internes, clés de sauvegarde et chemins ne sont jamais touchés.
const fs = require('fs'), path = require('path');
const acorn = require('acorn'), walk = require('acorn-walk'), parse5 = require('parse5');
const R = path.join(__dirname, '..'), APPLY = process.argv.includes('--apply');
const ONLY = (process.argv.find(a => a.startsWith('--only=')) || '').slice(7);
const enFile = path.join(__dirname, 'strings', 'en.json');
const EN = fs.existsSync(enFile) ? JSON.parse(fs.readFileSync(enFile, 'utf8')) : {};
const byText = {}; for (const [k, v] of Object.entries(EN)) byText[v] = byText[v] || k;

const JS_FILES = ['script.js', 'teams.js', 'explore.js', 'shop.js', 'dictionarySearch.js', 'tooltip.js', 'decor.js', 'save.js', 'teamPreviews.js',
  'moveDictionary.js', 'itemDictionary.js', 'pkmnDictionary.js', 'areasDictionary.js',
  'PR/autoTeamBuilding.js', 'PR/movesetGenerator.js', 'PR/teamDuplicate.js', 'PR/updateCheck.js'];

const INLINE = new Set(['span', 'strong', 'b', 'i', 'em', 'u', 'small', 'br', 'sup', 'sub', 'a', 'font']);
const SKIP_CALLS = new Set(['getElementById', 'querySelector', 'querySelectorAll', 'getElementsByClassName', 'getElementsByTagName', 'add', 'remove', 'toggle', 'contains',
  'addEventListener', 'removeEventListener', 'createElement', 'setProperty', 'getPropertyValue', 'getItem', 'setItem', 'removeItem', 'includes', 'startsWith', 'endsWith',
  'indexOf', 'lastIndexOf', 'split', 'match', 'matchAll', 'test', 'search', 'format', 't', 'tName', 'returnTypeColor', 'log', 'info', 'warn', 'error', 'debug', 'table', 'Error',
  'require', 'fetch', 'closest', 'matches', 'RegExp', 'join', 'padStart', 'padEnd', 'scrollIntoView', 'execCommand', 'createTextNode', 'insertAdjacentElement', 'voidAnimation',
  'Fuse', 'animate', 'Blob', 'download', 'replaceAll', 'charAt', 'localeCompare', 'toLocaleString', 'Date', 'parse', 'setLang', 'loadLangFile', 'escapeHTML']);
const SKIP_PROPS = new Set(['type', 'id', 'split', 'image', 'icon', 'background', 'sprite', 'rarity', 'color', 'rename', 'name', 'category', 'hue', 'effect', 'sort', 'theme',
  'class', 'className', 'src', 'href', 'key', 'value', 'tag', 'font', 'filter', 'display', 'cursor', 'animation', 'zType', 'typings', 'pkmn', 'move', 'ability', 'item',
  'difficulty', 'encounterEffect', 'trainer', 'league', 'season', 'weather', 'status', 'stat', 'buff', 'mode', 'tier', 'icon2', 'nameTag']);
const TEXT_TARGETS = new Set(['innerHTML', 'textContent', 'innerText', 'title', 'placeholder', 'alt', 'outerHTML']);
const DICT_NS = { move: 'move', ability: 'ability', item: 'item', field: 'field', areas: 'area', pkmn: 'pkmn', skill: 'skill', ribbon: 'ribbon', season: 'season' };

const M0 = '', M1 = '';
const marker = i => M0 + i + M1;
const unescapeRaw = s => s.replace(/\\(u\{[0-9a-fA-F]+\}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{2}|.)/gs, (m, c) => {
  if (c[0] === 'u' && c.length > 1) return String.fromCodePoint(parseInt(c.replace(/[u{}]/g, ''), 16));
  if (c[0] === 'x' && c.length === 3) return String.fromCharCode(parseInt(c.slice(1), 16));
  return { n: '\n', t: '\t', r: '\r', '\n': '', '\r': '' }[c] ?? c;
});
const words = s => (s.replace(/<[^>]*>/g, ' ').replace(new RegExp(M0 + '\\d+' + M1, 'g'), ' ').replace(/&\w+;/g, ' ').match(/[A-Za-z][A-Za-z']+/g) || []);
function translatable(text, loose) {
  const plain = text.replace(/<[^>]*>/g, ' ').replace(new RegExp(M0 + '\\d+' + M1, 'g'), ' ');
  if (/^\s*\w+=\w+\s*$/.test(plain)) return false;
  if (/\.(png|gif|jpe?g|svg|json|js|css|mp3|ogg)\b|url\(|^\s*#[0-9a-f]{3,8}\s*$|^\s*[\w-]+\s*:\s*[^:]*;\s*$/i.test(plain)) return false;
  if (/^\s*[-\w]+\s*:\s*[-\w#.%() ,]+(;\s*[-\w]+\s*:\s*[-\w#.%() ,]+)*;?\s*$/.test(plain)) return false; // CSS
  const w = words(text);
  if (!w.length) return false;
  if (loose) return true;
  if (w.length >= 2 && /[A-Za-z]{2,}\W+[A-Za-z]{2,}/.test(plain)) return true;
  return w.length === 1 && /^[A-Z][a-z]{2,}$/.test(w[0]) && plain.trim().length > 2 && !/^[A-Z][a-z]+[A-Z]/.test(plain.trim());
}
const slug = s => 'ui.' + (words(s).slice(0, 6).join('_').toLowerCase().replace(/[^a-z0-9_]/g, '') || 'text');

let total = 0; const candidates = [];
function keyFor(text, ctxKey) {
  if (byText[text]) return byText[text];
  let k = ctxKey || slug(text), n = 2;
  while (EN[k] !== undefined && EN[k] !== text) k = (ctxKey || slug(text)) + '_' + n++;
  EN[k] = text; byText[text] = k; return k;
}
function varName(exprSrc, used) {
  let m = exprSrc.match(/^[\w$.]*?([A-Za-z_$][\w$]*)$/), n = m ? m[1] : 'v';
  if (/^(i|e|x|id|this)$/.test(n)) n = 'v';
  let k = n, i = 1; while (used.has(k)) k = n + (++i);
  used.add(k); return k;
}

// Découpe une chaîne (raw) avec marqueurs d'expressions en segments de texte traduisibles.
// Retourne la nouvelle source (raw, marqueurs préservés + appels t()) ; exprs[i] = source de l'expression i.
function processRaw(raw, exprs, ctxKey, q, loose) {
  const sub = []; // éléments inline dynamiques → variables
  let s = raw, guard = 0;
  const dyn = new RegExp('<(' + [...INLINE].join('|') + ')\\b[^>]*' + M0 + '\\d+' + M1 + '[^>]*>', 'i');
  for (let m; (m = s.match(dyn)) && guard++ < 50;) {
    const tag = m[1].toLowerCase(), start = m.index;
    const re = new RegExp('<(/?)' + tag + '\\b[^>]*>', 'gi'); re.lastIndex = start; let d = 0, end = -1, mm;
    while ((mm = re.exec(s))) { if (mm[1]) { if (--d === 0) { end = re.lastIndex; break; } } else if (!mm[0].endsWith('/>')) d++; }
    if (end < 0) break;
    sub.push(s.slice(start, end)); s = s.slice(0, start) + '' + (sub.length - 1) + '' + s.slice(end);
  }
  // contenu d'un élément inline dynamique : seul l'intérieur est retraité
  const procSub = i => { const m = sub[i].match(/^(<[^>]*>)([\s\S]*)(<\/[^>]*>)$/); return m ? m[1] + processRaw(m[2], exprs, null, q, false) + m[3] : sub[i]; };
  const parts = s.split(/(<[^>]*>)/); const out = []; let run = [];
  const isInlineStatic = p => { const m = p.match(/^<\/?([a-z0-9]+)/i); return m && INLINE.has(m[1].toLowerCase()) && !p.includes(M0); };
  const flush = () => {
    if (!run.length) return; let txt = run.join(''); run = [];
    // balises et espaces en bordure : laissés hors de la chaîne traduite
    const lead = txt.match(/^(\s|&nbsp;|<[^>]*>)*/)[0], trail = txt.slice(lead.length).match(/(\s|&nbsp;|<[^>]*>)*$/)[0];
    let core = txt.slice(lead.length, txt.length - trail.length);
    // balises inline qui ouvrent/ferment le segment : laissées hors traduction
    const restoreSub = x => x.replace(/(\d+)/g, (m, i) => procSub(i));
    const toTpl = x => x.replace(new RegExp(M0 + '(\\d+)' + M1, 'g'), (mm, j) => '${' + exprs[j] + '}').replace(/([^]*)/g, '${$1}');
    const plainCore = restoreSub(core);
    if (!core || !translatable(core.replace(/\d+/g, M0 + '0' + M1), loose)) { out.push(restoreSub(txt)); return; }
    const used = new Set(), vars = []; let text = core;
    text = text.replace(new RegExp(M0 + '(\\d+)' + M1, 'g'), (m, i) => { const n = varName(exprs[i], used); vars.push(`${n}: ${exprs[i]}`); return '{' + n + '}'; });
    text = text.replace(/(\d+)/g, (m, i) => { const n = varName('v', used); vars.push(`${n}: \`${toTpl(procSub(i))}\``); return '{' + n + '}'; });
    const cooked = unescapeRaw(text.replace(/[ \t]*\r?\n[ \t]*/g, ' ')); // retours à la ligne du source = espace en HTML
    const k = keyFor(cooked, ctxKey && candidates.filter(c => c.ctx === ctxKey).length ? ctxKey + '_' + (candidates.filter(c => c.ctx === ctxKey).length + 1) : ctxKey);
    candidates.push({ key: k, ctx: ctxKey, en: cooked }); total++;
    out.push(lead + '' + `t(${q}${k}${q}${vars.length ? ', { ' + vars.join(', ') + ' }' : ''})` + '' + trail);
    void plainCore;
  };
  for (const p of parts) {
    if (p.startsWith('<') && p.endsWith('>') && !isInlineStatic(p)) { flush(); out.push(p.replace(/(\d+)/g, (m, i) => procSub(i))); }
    else run.push(p);
  }
  flush();
  return out.join('');
}

// ---------- JS ----------
function rewriteJs(src, fileLabel, q = "'") {
  let ast;
  try { ast = acorn.parse(src, { ecmaVersion: 'latest', sourceType: 'script', allowReturnOutsideFunction: true, allowHashBang: true }); }
  catch (e) { console.error('PARSE', fileLabel, e.message); return src; }
  const edits = [];
  walk.fullAncestor(ast, (node, st, anc) => {
    if (node.type !== 'Literal' && node.type !== 'TemplateLiteral') return;
    if (node.type === 'Literal' && typeof node.value !== 'string') return;
    const parent = anc[anc.length - 2], gp = anc[anc.length - 3];
    if (!parent) return;
    if (anc.slice(0, -1).some(a => a.type === 'TemplateLiteral' && a !== node)) {
      // template imbriqué : traité seulement s'il est l'argument direct d'un ${} d'un template parent (il sera traité séparément)
    }
    if (parent.type === 'TaggedTemplateExpression') return;
    if (parent.type === 'ExpressionStatement' && parent.directive) return;
    if (parent.type === 'Property' && parent.key === node) return;
    if (parent.type === 'MemberExpression' && parent.property === node) return;
    if (parent.type === 'BinaryExpression' && /^[=!]==?$/.test(parent.operator)) return;
    if (parent.type === 'SwitchCase') return;
    if (parent.type === 'ImportExpression') return;
    if (parent.type === 'CallExpression' || parent.type === 'NewExpression') {
      const c = parent.callee, name = c.type === 'Identifier' ? c.name : c.type === 'MemberExpression' && !c.computed ? c.property.name : '';
      if (SKIP_CALLS.has(name)) return;
      if (name === 'setAttribute' && parent.arguments[0] === node) return;
      if (name === 'setAttribute' && !/^(title|placeholder|alt|aria-label)$/.test(parent.arguments[0]?.value)) return;
      if (c.type === 'MemberExpression' && c.object.type === 'Identifier' && c.object.name === 'console') return;
    }
    if (parent.type === 'Property' && !parent.computed) {
      const k = parent.key.name || parent.key.value;
      if (SKIP_PROPS.has(k)) return;
    }
    if (parent.type === 'AssignmentExpression' && parent.right === node || (parent.type === 'BinaryExpression' && parent.operator === '+' && gp?.type === 'AssignmentExpression')) {
      const asg = parent.type === 'AssignmentExpression' ? parent : gp;
      const l = asg.left; const chain = src.slice(l.start, l.end);
      if (l.type === 'MemberExpression' && !l.computed && !TEXT_TARGETS.has(l.property.name) && /\.(style|dataset)\b|\.(id|className|src|href|value|type|display|background|filter|color|cursor|width|height|animation|opacity|transform)$/.test(chain)) return;
      if (/^saved\.|^areas\[[^\]]+\]\.(name|id|type|icon|background|sprite|trainer|league)$|^localStorage/.test(chain)) return;
    }
    if (parent.type === 'VariableDeclarator' && /^(id|key|type|url|path|icon|img|src|svg)/i.test(parent.id.name || '')) return;
    // Clé de contexte pour les dictionnaires : move.x.info, item.x.info, areas.x.unlockDescription …
    let ctxKey = null;
    for (let i = anc.length - 2; i >= 0; i--) {
      const a = anc[i];
      if (a.type === 'AssignmentExpression' && a.left.type === 'MemberExpression') {
        const ls = src.slice(a.left.start, a.left.end).match(/^(move|ability|item|field|areas|pkmn|skill|ribbon|season)\.(\w+)(?:\.(\w+))?$/);
        if (ls) {
          const prop = anc.slice(i + 1).find(x => x.type === 'Property' && !x.computed);
          const pk = ls[3] || (prop && (prop.key.name || prop.key.value));
          if (pk) ctxKey = `${DICT_NS[ls[1]]}.${ls[2]}.${pk}`;
        }
        break;
      }
    }
    let raw, exprs = [], isTpl = node.type === 'TemplateLiteral';
    if (isTpl) {
      raw = node.quasis.map((qq, i) => src.slice(qq.start, qq.end) + /* raw exact : acorn normalise CRLF dans value.raw */(i < node.expressions.length ? marker(i) : '')).join('');
      exprs = node.expressions.map(e => src.slice(e.start, e.end));
      if (exprs.some(e => /`/.test(e))) {
        // expressions contenant des templates : on les réécrit d'abord récursivement
        exprs = exprs.map(e => (/`/.test(e) ? rewriteJs('(' + e + ')', fileLabel, q).replace(/^\(|\)$/g, '') : e));
      }
    } else raw = node.raw.slice(1, -1);
    const isHtmlTarget = parent.type === 'AssignmentExpression' && parent.left.type === 'MemberExpression' && TEXT_TARGETS.has(parent.left.property?.name);
    const out = processRaw(raw, exprs, ctxKey, q, false);
    if (!out.includes('')) return;
    if (ONLY && !fileLabel.includes(ONLY)) return;
    let rep;
    if (/^[^]*$/.test(out)) rep = out.slice(1, -1); // toute la chaîne → t(...)
    else {
      let body = out.replace(new RegExp(M0 + '(\\d+)' + M1, 'g'), (m, i) => '${' + exprs[i] + '}');
      if (!isTpl) body = body.replace(/`/g, '\\`').replace(/\$\{(?![^]*)/g, '\\${');
      rep = '`' + body.replace(/([^]*)/g, '${$1}') + '`';
    }
    rep = rep.replace(/|/g, '');
    void isHtmlTarget;
    edits.push({ start: node.start, end: node.end, rep });
  });
  // les éditions imbriquées (template dans template) : on garde la plus externe, la récursion a déjà réécrit l'intérieur
  edits.sort((a, b) => a.start - b.start || b.end - a.end);
  const kept = []; let lastEnd = -1;
  for (const e of edits) if (e.start >= lastEnd) { kept.push(e); lastEnd = e.end; }
  let out = ''; let pos = 0;
  for (const e of kept) { out += src.slice(pos, e.start) + e.rep; pos = e.end; }
  return out + src.slice(pos);
}

// ---------- HTML ----------
function rewriteHtml(src) {
  const doc = parse5.parse(src, { sourceCodeLocationInfo: true });
  const edits = [];
  const ATTRS = ['title', 'placeholder', 'alt'];
  const visit = (n, inSkip) => {
    const skip = inSkip || ['script', 'style', 'svg', 'template', 'head'].includes(n.nodeName) || n.attrs?.some(a => a.name === 'data-i18n');
    if (n.attrs && n.sourceCodeLocation?.attrs) {
      for (const a of n.attrs) {
        const loc = n.sourceCodeLocation.attrs[a.name];
        if (/^on[a-z]+$/.test(a.name)) { // JS inline : même réécriture que les scripts
          const raw = src.slice(loc.startOffset, loc.endOffset), m = raw.match(/^([^=]+=\s*)(['"]?)([\s\S]*?)\2$/);
          if (!m) continue;
          const q = m[2] === '"' ? "'" : '"';
          const js = rewriteJs(m[3], 'index.html#' + a.name, q);
          if (js !== m[3]) edits.push({ start: loc.startOffset, end: loc.endOffset, rep: m[1] + m[2] + js + m[2] });
        } else if (ATTRS.includes(a.name) && translatable(a.value, true) && !skip) {
          const k = keyFor(a.value); total++; candidates.push({ key: k, en: a.value });
          edits.push({ start: loc.endOffset, end: loc.endOffset, rep: ` data-i18n-${a.name}="${k}"` });
        }
      }
    }
    if (!skip && n.childNodes) {
      const kids = n.childNodes, hasIdChild = (x) => x.childNodes?.some(c => c.attrs?.some(a => a.name === 'id') || hasIdChild(c));
      const onlyInline = kids.every(c => c.nodeName === '#text' || c.nodeName === '#comment' || (INLINE.has(c.nodeName) && !c.attrs?.some(a => a.name === 'id' || /^on/.test(a.name)) && c.childNodes.every(cc => cc.nodeName === '#text')));
      const textKids = kids.filter(c => c.nodeName === '#text' && translatable(c.value, true));
      if (textKids.length && onlyInline && !hasIdChild(n) &&n.sourceCodeLocation?.startTag) {
        const st = n.sourceCodeLocation.startTag, et = n.sourceCodeLocation.endTag;
        const inner = src.slice(st.endOffset, et ? et.startOffset : st.endOffset).trim();
        const k = keyFor(inner.replace(/\s+/g, ' ')); total++; candidates.push({ key: k, en: inner });
        edits.push({ start: st.endOffset - 1 - (src[st.endOffset - 2] === '/' ? 1 : 0), end: st.endOffset - 1 - (src[st.endOffset - 2] === '/' ? 1 : 0), rep: ` data-i18n="${k}"` });
      } else for (const c of textKids) {
        const loc = c.sourceCodeLocation, raw = src.slice(loc.startOffset, loc.endOffset);
        const lead = raw.match(/^\s*/)[0], trail = raw.match(/\s*$/)[0], core = raw.trim();
        const k = keyFor(core.replace(/\s+/g, ' ')); total++; candidates.push({ key: k, en: core });
        edits.push({ start: loc.startOffset, end: loc.endOffset, rep: `${lead}<span data-i18n="${k}">${core}</span>${trail}` });
      }
      for (const c of kids) visit(c, skip);
    } else if (n.childNodes) for (const c of n.childNodes) visit(c, skip || inSkip);
  };
  visit(doc, false);
  edits.sort((a, b) => b.start - a.start);
  let out = src;
  for (const e of edits) out = out.slice(0, e.start) + e.rep + out.slice(e.end);
  return out;
}

for (const f of JS_FILES) {
  const p = path.join(R, 'scripts', f), src = fs.readFileSync(p, 'utf8');
  const out = rewriteJs(src, f);
  if (APPLY && out !== src && (!ONLY || f.includes(ONLY))) fs.writeFileSync(p, out);
}
if (!ONLY || ONLY === 'index.html') {
  const p = path.join(R, 'index.html'), src = fs.readFileSync(p, 'utf8');
  const out = rewriteHtml(src);
  if (APPLY && out !== src) fs.writeFileSync(p, out);
}
fs.mkdirSync(path.dirname(enFile), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'strings', 'candidates.json'), JSON.stringify(candidates, null, 1) + '\n');
if (APPLY) fs.writeFileSync(enFile, JSON.stringify(EN, null, 1) + '\n');
console.log(`Chaînes candidates : ${total} occurrences, ${new Set(candidates.map(c => c.key)).size} clés uniques${APPLY ? ' (appliqué)' : ' (simulation)'}`);
