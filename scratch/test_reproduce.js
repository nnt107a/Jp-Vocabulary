const wanakana = require('./node_modules/wanakana');
const fs = require('fs');

// Read current ime.js
const imeCode = fs.readFileSync('./js/ime.js', 'utf8');

// Evaluate the functions (we provide a fake wanakana for it to use)
global.wanakana = wanakana;
eval(imeCode);

console.log("Testing 'asa' ->", convertRomajiSmart('asa'));
console.log("Testing 'oto' ->", convertRomajiSmart('oto'));

// Simulate rapid typing where previous chars are already kana
console.log("Testing 'あsa' ->", convertRomajiSmart('あsa'));
console.log("Testing 'おto' ->", convertRomajiSmart('おto'));
console.log("Testing 'あs' ->", convertRomajiSmart('あs'));
console.log("Testing 'おt' ->", convertRomajiSmart('おt'));

// What if UniKey messed it up?
console.log("Testing 'áa' ->", convertRomajiSmart('áa'));
console.log("Testing 'ôto' ->", convertRomajiSmart('ôto'));

// What if the user typed o, o, t (for oto)
console.log("Testing 'oot' ->", convertRomajiSmart('oot'));
console.log("Testing 'おおt' ->", convertRomajiSmart('おおt'));

console.log("Testing 'aas' ->", convertRomajiSmart('aas'));
console.log("Testing 'あas' ->", convertRomajiSmart('あas'));
console.log("Testing 'あa' ->", convertRomajiSmart('あa'));
