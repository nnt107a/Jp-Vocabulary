const wanakana = require('./node_modules/wanakana');

// Simulated state
let inputValue = "あt"; // Input value currently stuck at "あt" because UniKey swallowed 'a'

// Simulate keyup event for 'a'
function handleImeKeyupSimulated(key, currentVal) {
  const vowelMap = { 'a': 'a', 'i': 'i', 'u': 'u', 'e': 'e', 'o': 'o' };
  const pressedVowel = vowelMap[key.toLowerCase()];
  
  if (pressedVowel) {
    // Check if the current input value ends with an un-converted consonant (or pending kana)
    // Non-Japanese Latin consonants at end: b, c, d, f, g, h, j, k, l, m, p, q, r, s, t, v, w, x, y, z
    // Note: 'n' is excluded if user wants 'na', 'no', etc., but wait!
    // If input ends with 't' and user releases 'a', we append 'a' to get 'ta' -> た!
    // If input ends with 'n' and user releases 'o', we append 'o' to get 'no' -> の!
    
    // Clean Vietnamese accents first
    let clean = currentVal.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    // Check if clean text ends with a consonant (including 'n' when followed by a vowel keyup!)
    if (/[bcdfghjklmnpqrstvwxyz]$/i.test(clean)) {
      // Append the released vowel!
      let newVal = currentVal + pressedVowel;
      return wanakana.toHiragana(newVal);
    }
  }
  return currentVal;
}

console.log("=== Testing Keyup Vowel Recovery ===");
console.log("Input stuck at 'あt', user releases 'a' ->", handleImeKeyupSimulated('a', 'あt'));
console.log("Input stuck at 'おt', user releases 'o' ->", handleImeKeyupSimulated('o', 'おt'));
console.log("Input stuck at 'えt', user releases 'e' ->", handleImeKeyupSimulated('e', 'えt'));
console.log("Input stuck at 'あk', user releases 'a' ->", handleImeKeyupSimulated('a', 'あk'));
console.log("Input stuck at 'かn', user releases 'o' ->", handleImeKeyupSimulated('o', 'かn'));
console.log("Input stuck at 'かn', user releases 'a' ->", handleImeKeyupSimulated('a', 'かn'));
