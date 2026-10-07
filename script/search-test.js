// Checks that real support questions find the right article: node script/search-test.js _site/search.json
// Each line of search-queries.txt is "query|/expected-permalink/"; the expected article must be in the top 3.
const fs = require('fs');
const path = require('path');
const S = require('../assets/js/search-core.js');
const index = S.prepare(JSON.parse(fs.readFileSync(process.argv[2] || '_site/search.json', 'utf8')));
const tests = fs.readFileSync(path.join(__dirname, 'search-queries.txt'), 'utf8').trim().split(/\r?\n/).map(l => l.split('|'));
let ok = 0;
for (const [q, want] of tests) {
  const got = S.run(index, q, 5).map(x => x.d.url);
  const pos = got.indexOf(want.replace(/\//g, ''));
  if (pos > -1 && pos < 3) ok++;
  else console.log(`MISS "${q}" want ${want} got [${got.slice(0, 3).join(', ')}]`);
}
console.log(`${ok}/${tests.length} in the top 3`);
process.exitCode = ok === tests.length ? 0 : 1;
