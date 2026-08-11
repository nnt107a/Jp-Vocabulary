const wanakana = require('./node_modules/wanakana');
const fs = require('fs');
const imeCode = fs.readFileSync('./js/ime.js', 'utf8');
global.wanakana = wanakana;
eval(imeCode);

console.log("Testing 'あá' ->", convertRomajiSmart('あá'));
console.log("Testing 'あáa' ->", convertRomajiSmart('あáa'));
console.log("Testing 'as' ->", convertRomajiSmart('as'));

// What if UniKey generated 'á' then 'a'?
// 'áa' -> 'asa' -> 'あさ'
console.log("Testing 'áa' ->", convertRomajiSmart('áa'));

// What if the user typed o,t,o and got おおt?
console.log("Testing 'おo' ->", convertRomajiSmart('おo')); // typing o, o ?
console.log("Testing 'oô' ->", convertRomajiSmart('oô')); 
console.log("Testing 'ôo' ->", convertRomajiSmart('ôo')); 
console.log("Testing 'おôt' ->", convertRomajiSmart('おôt')); 
