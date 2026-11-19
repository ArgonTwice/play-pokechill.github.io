// Annule l'extraction de clés techniques (CSS, MIME, classes…) : t('clé', vars) redevient la chaîne d'origine.
//   node tools/revert-keys.js ui.cle1 ui.cle2 …
const fs = require('fs'), path = require('path'), acorn = require('acorn'), walk = require('acorn-walk');
const R = path.join(__dirname, '..'), keys = new Set(process.argv.slice(2));
const enF = path.join(__dirname, 'strings/en.json'), frF = path.join(__dirname, 'strings/fr.json');
const en = JSON.parse(fs.readFileSync(enF, 'utf8')), fr = JSON.parse(fs.readFileSync(frF, 'utf8'));
const files = fs.readdirSync(path.join(R, 'scripts')).filter(f => f.endsWith('.js')).map(f => 'scripts/' + f)
  .concat(fs.readdirSync(path.join(R, 'scripts/PR')).map(f => 'scripts/PR/' + f));
const literal = (text, vars, src) => {
  if (!vars) return "'" + text.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r?\n/g, '\\n') + "'";
  const map = {}; for (const p of vars.properties) map[p.key.name || p.key.value] = src.slice(p.value.start, p.value.end);
  return '`' + text.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${').replace(/\{(\w+)\}/g, (m, k) => (k in map ? '${' + map[k] + '}' : m)) + '`';
};
let n = 0;
for (const f of files) {
  const p = path.join(R, f), src = fs.readFileSync(p, 'utf8');
  let ast; try { ast = acorn.parse(src, { ecmaVersion: 'latest', allowReturnOutsideFunction: true }); } catch { continue; }
  const edits = [];
  walk.full(ast, node => {
    if (node.type !== 'CallExpression' || node.callee.name !== 't') return;
    const a = node.arguments[0];
    if (a?.type === 'Literal' && keys.has(a.value)) edits.push({ s: node.start, e: node.end, rep: literal(en[a.value], node.arguments[1], src) });
  });
  if (!edits.length) continue;
  let out = src; for (const e of edits.sort((x, y) => y.s - x.s)) out = out.slice(0, e.s) + e.rep + out.slice(e.e);
  fs.writeFileSync(p, out); n += edits.length;
}
for (const k of keys) { delete en[k]; delete fr[k]; }
fs.writeFileSync(enF, JSON.stringify(en, null, 1) + '\n'); fs.writeFileSync(frF, JSON.stringify(fr, null, 1) + '\n');
console.log(`appels restaurés : ${n}, clés retirées : ${keys.size}`);
