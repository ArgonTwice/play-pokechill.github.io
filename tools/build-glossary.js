// Construit tools/game-terms.json, tools/glossary-fr.json et tools/bible-coverage.md
// Usage : node tools/build-glossary.js <dossier_csv_pokeapi> <dossier_bible>
// La bible est lue seule (jamais écrite) ; son contenu n'est pas versionné, seul le glossaire l'est.
const fs = require('fs'), path = require('path');
const [, , apiDir, bibleDir] = process.argv;
const T = __dirname;
const g = require('./load-game.js')();
const manual = JSON.parse(fs.readFileSync(path.join(T, 'glossary-manual.json'), 'utf8'));

// ---------- PokéAPI ----------
function csv(name) {
  const rows = fs.readFileSync(path.join(apiDir, name + '.csv'), 'utf8').split(/\r?\n/).filter(Boolean);
  const parse = l => { const out = []; let cur = '', q = false; for (const c of l) { if (c === '"') q = !q; else if (c === ',' && !q) { out.push(cur); cur = ''; } else cur += c; } out.push(cur); return out; };
  const head = parse(rows[0]);
  return rows.slice(1).map(r => Object.fromEntries(parse(r).map((v, i) => [head[i], v])));
}
const norm = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
function names(table, idCol, extraCol) {
  const m = {};
  for (const r of csv(table)) {
    if (r.local_language_id !== '5' && r.local_language_id !== '9') continue;
    const o = (m[r[idCol]] = m[r[idCol]] || {});
    const lang = r.local_language_id === '5' ? 'fr' : 'en';
    o[lang] = (extraCol && r[extraCol]) || r.name || r.form_name;
  }
  return m;
}
function api(base, nameTable, idCol, extraCol) {
  const n = names(nameTable, idCol, extraCol), idx = {};
  for (const r of csv(base)) { const e = { ident: r.identifier, ...(n[r.id] || {}) }; idx[norm(r.identifier)] = e; if (e.en) idx[norm(e.en)] = idx[norm(e.en)] || e; }
  return idx;
}
const API = {
  pkmn: api('pokemon_species', 'pokemon_species_names', 'pokemon_species_id'),
  form: api('pokemon_forms', 'pokemon_form_names', 'pokemon_form_id', 'pokemon_name'),
  move: api('moves', 'move_names', 'move_id'),
  ability: api('abilities', 'ability_names', 'ability_id'),
  item: api('items', 'item_names', 'item_id'),
  type: api('types', 'type_names', 'type_id'),
};

// ---------- Bible ----------
const bible = JSON.parse(fs.readFileSync(path.join(bibleDir, 'bible_pokemon_fr.json'), 'utf8'));
const BCAT = { pkmn: ['pokemon'], move: ['capacite'], ability: ['talent'], item: ['objet'], type: ['types'], area: ['lieux_institutions', 'lieu_unbound'], status: ['statuts', 'mecaniques'], trainer: ['classe_dresseur', 'fonctions_personnages', 'professeurs'], field: ['mecaniques', 'capacite', 'talent'], ui: ['mecaniques', 'interface_combat', 'statistiques', 'lieux_institutions'] };
const bIdx = {};
for (const e of bible.entrees) { const k = norm(e.en); (bIdx[k] = bIdx[k] || []).push(e); }
function bibleLookup(cat, en) {
  const hits = (bIdx[norm(en)] || []);
  const vals = new Set(); let entry = null;
  for (const e of hits) for (const c of BCAT[cat] || []) if (e.sens[c]) { vals.add(e.sens[c]); entry = e; }
  if (!entry) return null;
  return { fr: [...vals][0], all: [...vals], fr_jeu: entry.fr_jeu, ambigu: !!entry.ambigu };
}
const bibleCounts = {};
for (const e of bible.entrees) for (const c in e.sens) bibleCounts[c] = (bibleCounts[c] || 0) + 1;

// ---------- Termes du jeu ----------
const terms = [];
const add = (cat, key, en, apiHit) => terms.push({ cat, key, en, apiHit });
const PRE = { mega: 'mega', alolan: 'alola', galarian: 'galar', hisuian: 'hisui', paldean: 'paldea' };
for (const id of Object.keys(g.pkmn)) {
  const raw = g.pkmn[id].rename || id;
  let m = raw.match(/^(mega|alolan|galarian|hisuian|paldean)([A-Z].*)$/), base = raw, pre = '';
  if (m) { pre = PRE[m[1]]; base = m[2][0].toLowerCase() + m[2].slice(1); }
  const sm = base.match(/^([a-z0-9]*)(.*)$/); // espèce = partie minuscule initiale
  const alias = manual.apiAlias.pkmn[id];
  const ok = h => (h && h.fr ? h : null);
  let hit = alias ? ok(API.form[norm(alias)]) || ok(API.pkmn[norm(alias)]) : ok(API.form[norm(sm[1] + pre + sm[2])]) || ok(API.form[norm(sm[1] + sm[2] + pre)]);
  if (!hit && !pre) hit = ok(API.pkmn[norm(base)]);
  if (!hit && !pre && sm[2] && API.pkmn[norm(sm[1])]) { // forme : clé PokéAPI unique qui prolonge l'id (pikachuWorld → pikachu-world-cap)
    const n = norm(base), c = Object.keys(API.form).filter(k => k.startsWith(n) && /-/.test(API.form[k].ident));
    if (c.length === 1) hit = API.form[c[0]];
  }
  add('pkmn', id, g.format(id), hit);
}
const al = (cat, id, o) => manual.apiAlias[cat]?.[id] || o.rename || id;
for (const id of Object.keys(g.move)) add('move', id, g.format(id), API.move[norm(al('move', id, g.move[id]))]);
for (const id of Object.keys(g.ability)) add('ability', id, g.format(id), API.ability[norm(al('ability', id, g.ability[id]))] || API.move[norm(al('ability', id, g.ability[id]))]);
for (const id of Object.keys(g.item)) add('item', id, g.format(id), API.item[norm(al('item', id, g.item[id]))]);
for (const id of Object.keys(g.areas)) add('area', id, typeof g.areas[id].name === 'string' ? g.areas[id].name : g.format(id));
for (const id of Object.keys(g.field)) add('field', id, g.format(id), API.move[norm(id)] || API.ability[norm(id)]);
for (const t of ['normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy', 'stellar']) add('type', t, g.format(t), API.type[t]);
for (const [cat, list] of Object.entries(manual.extraTerms)) for (const [key, en] of Object.entries(list)) add(cat, key, en);

// Espèce de base pour les noms composés (formes non couvertes par PokéAPI)
function speciesFr(id) {
  const raw = id.replace(/^(mega|alolan|galarian|hisuian|paldean)/, '');
  const sp = (raw[0].toLowerCase() + raw.slice(1)).match(/^[a-z0-9]*/)[0];
  const b = bibleLookup('pkmn', (API.pkmn[norm(sp)] || {}).en || sp);
  return { fr: b ? b.fr : (API.pkmn[norm(sp)] || {}).fr, rest: (raw[0].toLowerCase() + raw.slice(1)).slice(sp.length) };
}

// ---------- Résolution ----------
const isAbbr = s => /\p{L}{2,}\.(\s|$)/u.test(s); // abréviations dues aux limites ROM (Ceint. Noire)
const ap = s => s && s.replace(/'/g, "’");
const glossary = [], cov = {}, conflicts = [], doubtful = [], resolved = {};
const C = cat => (cov[cat] = cov[cat] || { total: 0, bible: 0, web: 0, manuel: 0, proposition: 0, manquant: 0 });
for (const t of terms) {
  const c = C(t.cat); c.total++;
  const ov = (manual.overrides[t.cat] || {})[t.key];
  const apiFr = t.apiHit && t.apiHit.fr, apiEn = t.apiHit && t.apiHit.en;
  const b = bibleLookup(t.cat, apiEn || t.en) || (apiEn ? bibleLookup(t.cat, t.en) : null);
  let fr, source, statut = 'ok';
  if (ov) { fr = ov.fr; source = ov.source; statut = ov.statut || 'ok'; }
  else if (b && !isAbbr(b.fr)) { fr = b.fr; source = 'bible'; }
  else if (apiFr) { fr = apiFr; source = 'web:pokeapi.co/' + t.cat + '/' + t.apiHit.ident; if (b) doubtful.push(`${t.cat}.${t.key} : bible « ${b.fr} » abrégée → officiel « ${apiFr} »`); }
  else if (b) { fr = b.fr; source = 'bible'; }
  if (b && apiFr && ap(b.fr) !== ap(apiFr) && source === 'bible') conflicts.push(`${t.cat}.${t.key} (${t.en}) : bible « ${b.fr} » ≠ PokéAPI « ${apiFr} » → bible conservée`);
  if (b && b.all.length > 1) conflicts.push(`${t.cat}.${t.key} (${t.en}) : plusieurs traductions bible ${b.all.map(x => '« ' + x + ' »').join(' / ')}`);
  if (b && b.fr_jeu && ap(b.fr_jeu) !== ap(fr) && !ov) doubtful.push(`${t.cat}.${t.key} : forme Unbound « ${b.fr_jeu} » ignorée (contrainte ROM), « ${fr} » retenu`);
  if (!fr && t.cat === 'pkmn') { // formes composées : espèce officielle + suffixe de forme du manuel
    const s = speciesFr(t.key), suf = manual.formSuffix[s.rest] ?? null;
    const pre = (t.key.match(/^(mega|alolan|galarian|hisuian|paldean)/) || [])[1];
    if (s.fr && suf !== null) { fr = manual.formPattern[pre || ''].replace('{n}', s.fr).replace('{f}', suf).trim(); source = 'proposition'; statut = /^(Gigamax|Méga)/.test(suf) || !suf ? 'ok' : 'à valider'; if (!suf && pre) statut = 'ok'; }
  }
  const it = t.cat === 'item' && g.item[t.key];
  if (!fr && it && (it.type === 'tm' || it.type === 'memory')) { // motifs : CT <capacité>, Mémoire <talent>
    const ref = it.type === 'tm' ? resolved.move[it.move] : resolved.ability[it.ability];
    if (ref) { fr = (it.type === 'tm' ? 'CT ' : manual.memoryPrefix) + ref.fr; source = it.type === 'tm' ? 'motif:CT' : 'proposition'; statut = it.type === 'tm' && ref.statut === 'ok' ? 'ok' : 'à valider'; }
  }
  fr = ap(fr);
  if (!fr) { c.manquant++; fr = null; source = 'manquant'; statut = 'à valider'; }
  else c[source === 'bible' ? 'bible' : source.startsWith('web') ? 'web' : source === 'proposition' ? 'proposition' : 'manuel']++;
  glossary.push({ en: t.en, fr, categorie: t.cat, cle: t.key, source, statut });
  (resolved[t.cat] = resolved[t.cat] || {})[t.key] = { fr, statut };
}

// Termes de la bible absents du jeu (par catégorie de la bible)
const gameEn = new Set(terms.flatMap(t => [norm(t.en), t.apiHit && t.apiHit.en ? norm(t.apiHit.en) : '']));
const absent = {};
for (const e of bible.entrees) if (!gameEn.has(norm(e.en))) for (const c in e.sens) absent[c] = (absent[c] || 0) + 1;

fs.writeFileSync(path.join(T, 'game-terms.json'), JSON.stringify(terms.map(({ cat, key, en }) => ({ categorie: cat, cle: key, en })), null, 1) + '\n');
fs.writeFileSync(path.join(T, 'glossary-fr.json'), JSON.stringify(glossary, null, 1) + '\n');

let md = `# Couverture bible / web — glossaire FR de Pokechill\n\nGénéré par \`tools/build-glossary.js\`. Priorité : bible > officiel web (PokéAPI, recoupé Poképédia/Bulbapedia) > proposition.\n\n`;
md += `| Catégorie | Termes jeu | Bible | Web officiel | Manuel (sourcé) | Proposition | Manquants |\n|---|---|---|---|---|---|---|\n`;
for (const [k, v] of Object.entries(cov)) md += `| ${k} | ${v.total} | ${v.bible} | ${v.web} | ${v.manuel} | ${v.proposition} | ${v.manquant} |\n`;
md += `\n## Entrées de la bible absentes du jeu (par catégorie bible)\n\n| Catégorie bible | Entrées bible | Absentes du jeu |\n|---|---|---|\n`;
for (const [k, v] of Object.entries(bibleCounts)) md += `| ${k} | ${v} | ${absent[k] || 0} |\n`;
md += `\n## Conflits (${conflicts.length})\n\n` + conflicts.map(x => '- ' + x).join('\n') + '\n';
md += `\n## Entrées douteuses (${doubtful.length})\n\n` + doubtful.map(x => '- ' + x).join('\n') + '\n';
const todo = glossary.filter(x => x.statut !== 'ok');
md += `\n## À valider (${todo.length})\n\n` + todo.map(x => `- ${x.categorie}.${x.cle} : ${x.en} → ${x.fr ?? '???'} (${x.source})`).join('\n') + '\n';
fs.writeFileSync(path.join(T, 'bible-coverage.md'), md);
console.log(JSON.stringify(cov), 'conflits', conflicts.length, 'douteux', doubtful.length, 'à valider', todo.length);
