const wanakana = require('./node_modules/wanakana');
const fs = require('fs');

global.wanakana = wanakana;
const imeCode = fs.readFileSync('./js/ime.js', 'utf8');
eval(imeCode);

const testCases = [
  'odo', 'oto', 'oro', 'oso', 'ofo', 'oxo', 'ojo',
  'ada', 'ata', 'ara', 'asa', 'afa', 'axa', 'aja',
  'ede', 'ete', 'ere', 'ese', 'efe', 'exe', 'eje',
  'otoko', 'atama', 'soto', 'kasa', 'sakura'
];

console.log("=== Testing Raw Input through convertRomajiSmart ===");
testCases.forEach(tc => {
  console.log(`${tc.padEnd(8)} -> ${convertRomajiSmart(tc)}`);
});

console.log("\n=== Testing UniKey Telex Output through convertRomajiSmart ===");
// When user types these with UniKey Telex active:
// oso -> óo
// oro -> ỏo
// ofo -> òo
// oxo -> õo
// ojo -> ọo
// asa -> áa
// ara -> ảa
// ata -> âta (or ata)
const unikeyCases = [
  { raw: 'oso', unikey: 'óo' },
  { raw: 'oro', unikey: 'ỏo' },
  { raw: 'ofo', unikey: 'òo' },
  { raw: 'oxo', unikey: 'õo' },
  { raw: 'ojo', unikey: 'ọo' },
  { raw: 'asa', unikey: 'áa' },
  { raw: 'ara', unikey: 'ảa' },
  { raw: 'afa', unikey: 'àa' },
  { raw: 'axa', unikey: 'ãa' },
  { raw: 'aja', unikey: 'ạa' },
  { raw: 'oto', unikey: 'ôto' },
  { raw: 'ata', unikey: 'âta' },
  { raw: 'ete', unikey: 'ête' }
];

unikeyCases.forEach(c => {
  console.log(`Raw: ${c.raw.padEnd(6)} | UniKey: ${c.unikey.padEnd(6)} -> ${convertRomajiSmart(c.unikey)}`);
});
