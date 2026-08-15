const fs = require('fs');
const wanakana = require('wanakana');

// Read js/ime.js content and eval in node sandbox environment
const imeCode = fs.readFileSync('./js/ime.js', 'utf8');

// Set up global context
global.wanakana = wanakana;
eval(imeCode);

console.log("=== VERIFYING IME MODULE ===");
console.log("1. EN typing 'tes' (t -> te -> てs):", convertRomajiSmart("てs", "て", "hiragana"));
console.log("2. EN typing 'tesu' (t -> te -> てs -> てsu):", convertRomajiSmart("てsu", "てs", "hiragana"));
console.log("3. VN Telex typing 'tes' (t -> te -> é):", convertRomajiSmart("é", "て", "hiragana"));
console.log("4. VN Telex typing 'tesu' (t -> te -> é -> てsu):", convertRomajiSmart("てsu", "てs", "hiragana"));
console.log("5. Katakana VN Telex 'tes' (t -> te -> é):", convertRomajiSmart("é", "テ", "katakana"));
console.log("6. Normal 'otoko':", convertRomajiSmart("otoko", "", "hiragana"));
console.log("7. Telex 'asa' (a -> あs -> áa):", convertRomajiSmart("áa", "あs", "hiragana"));
