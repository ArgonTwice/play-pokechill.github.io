// Génère scripts/pkmnGenerations.js : génération (1-9) de chaque Pokémon du jeu, d'après son espèce.
// Usage : node tools/build-generations.js <chemin/pokemon_species_names.csv>   (CSV PokéAPI, lu seul)
// Une forme (Méga, Alola, Gigamax, clone…) prend la génération de son espèce de base.
const fs = require('fs'), path = require('path');
const R = path.join(__dirname, '..');
const csv = process.argv[2];
if (!csv) { console.error('Usage : node tools/build-generations.js <pokemon_species_names.csv>'); process.exit(1); }

const GEN_END = [151, 251, 386, 493, 649, 721, 809, 905, 1025]; // dernier n° national de chaque génération
const genOf = n => GEN_END.findIndex(end => n <= end) + 1;
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');

// Noms anglais (local_language_id = 9) → numéro national
const species = [];
for (const line of fs.readFileSync(csv, 'utf8').split(/\r?\n/).slice(1)) {
  const [id, langId, name] = line.split(',');
  if (langId === '9' && name) species.push({ n: Number(id), key: norm(name) });
}
species.sort((a, b) => b.key.length - a.key.length); // nom le plus long d'abord (« mewtwo » avant « mew »)

const pkmn = require('./load-game.js')().pkmn;
const out = {}, unknown = [];
for (const id in pkmn) {
  const k = norm(id);
  const hit = species.find(s => k.includes(s.key));
  if (hit) out[id] = genOf(hit.n); else unknown.push(id);
}
fs.writeFileSync(path.join(R, 'scripts', 'pkmnGenerations.js'),
  '// Généré par tools/build-generations.js (données PokéAPI) : ne pas modifier à la main.\n' +
  'const pkmnGeneration = ' + JSON.stringify(out) + ';\n');
console.log(`${Object.keys(out).length} Pokémon classés, sans génération : ${unknown.join(', ') || 'aucun'}`);
