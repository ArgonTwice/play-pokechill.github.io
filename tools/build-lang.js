// Génère lang/en.json et lang/fr.json (UTF-8 sans BOM).
// Noms : tools/glossary-fr.json. Phrases : tools/strings/en.json (extraites) + tools/strings/fr.json (traduites).
const fs = require('fs'), path = require('path');
const T = __dirname, R = path.join(T, '..');
const read = f => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {});
const glossary = read(path.join(T, 'glossary-fr.json'));
const sEn = read(path.join(T, 'strings', 'en.json')), sFr = read(path.join(T, 'strings', 'fr.json'));

// Typographie française hors balises HTML, {variables} et URL : insécable avant ! ? ; : » et après «
// Balises/variables/URL sont masquées par un caractère opaque pour que la ponctuation qui les suit soit traitée.
const NB = ' ';
function typoFr(s) {
  const kept = [];
  let p = s.replace(/<[^>]*>|\{\w+\}|https?:\/\/\S+/g, m => { kept.push(m); return '' + (kept.length - 1) + ''; });
  p = p
    .replace(/'/g, '’')
    .replace(/"([^"]*)"/g, '«' + NB + '$1' + NB + '»')
    .replace(/«[  ]*/g, '«' + NB).replace(/[  ]*»/g, NB + '»')
    // collé à du texte : insécable ; après une balise/variable : seulement si une espace existait (« <br>![mot] » reste intact)
    .replace(/([^\s !?])[  ]*([!?;])/g, '$1' + NB + '$2')
    .replace(/()[  ]+([!?;])/g, '$1' + NB + '$2')
    .replace(/([^\s\d ])[  ]*:(?=[\s(]|$)/g, '$1' + NB + ':')
    .replace(/()[  ]+:(?=[\s(]|$)/g, '$1' + NB + ':')
    .replace(/\.\.\./g, '…');
  return p.replace(/(\d+)/g, (m, i) => kept[i]);
}

function build() {
const en = {}, fr = {};
for (const g of glossary) {
  const k = `${g.categorie}.${g.cle}`;
  en[k] = g.en;
  if (g.fr) fr[k] = g.fr;
}
for (const [k, v] of Object.entries(sEn)) en[k] = v;
// valeur identique à l'anglais (code, sigle, nom propre) : recopiée telle quelle, sans retouche typographique
for (const [k, v] of Object.entries(sFr)) if (k in sEn && v) fr[k] = v === sEn[k] ? v : typoFr(v);

fs.mkdirSync(path.join(R, 'lang'), { recursive: true });
const out = o => JSON.stringify(Object.fromEntries(Object.entries(o).sort(([a], [b]) => a.localeCompare(b))), null, 1) + '\n';
fs.writeFileSync(path.join(R, 'lang', 'en.json'), out(en));
// En-tête de métadonnées (hors namespace : jamais lu par t())
fs.writeFileSync(path.join(R, 'lang', 'fr.json'), out(fr).replace(/^\{\n/, '{\n "translator": "AmicusSoft",\n'));
// Copies en .js chargées par <script> : contrairement à un XMLHttpRequest synchrone, un script passe par
// le service worker (version à jour après publication, disponible hors ligne). Le .json reste la référence.
for (const code of ['en', 'fr']) {
  const json = fs.readFileSync(path.join(R, 'lang', `${code}.json`), 'utf8').trimEnd();
  fs.writeFileSync(path.join(R, 'lang', `${code}.js`),
    `// Généré par tools/build-lang.js depuis lang/${code}.json : ne pas modifier à la main.\n` +
    `(window.POKECHILL_LANG = window.POKECHILL_LANG || {})[${JSON.stringify(code)}] = ${json};\n`);
}
console.log(`en: ${Object.keys(en).length} clés, fr: ${Object.keys(fr).length} clés`);
}
if (require.main === module) build();
module.exports = { typoFr };
