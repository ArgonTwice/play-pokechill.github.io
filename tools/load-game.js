// Charge les dictionnaires du jeu dans un contexte Node isolé (lecture seule).
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..');
module.exports = function loadGame() {
  const handler = { get: (t, k) => (k in t ? t[k] : (typeof k === 'string' ? stub : undefined)), has: () => true };
  const stub = new Proxy(function () { return stub; }, { get: (t, k) => k === Symbol.toPrimitive ? () => '' : stub });
  const base = { console, Math, JSON, Date, Object, Array, String, Number, Boolean, RegExp, Set, Map, Symbol, parseInt, parseFloat, isNaN, Infinity, NaN, undefined };
  const ctx = vm.createContext(base);
  const files = ['moveDictionary.js', 'itemDictionary.js', 'pkmnDictionary.js', 'areasDictionary.js'];
  let src = files.map(f => fs.readFileSync(path.join(root, 'scripts', f), 'utf8')).join('\n;\n');
  src += '\n;' + fs.readFileSync(path.join(root, 'scripts', 'explore.js'), 'utf8').match(/function format\(input\)[\s\S]*?\r?\n}/)[0];
  src += '\n;this.__g={pkmn,move,ability,item,areas,field,format};';
  const g = new Proxy(ctx, handler);
  vm.runInContext('with(__p){' + src + '}', Object.assign(ctx, { __p: g }));
  return ctx.__g;
};
