const wanakana = require('./node_modules/wanakana');
const fs = require('fs');

function stripVietnameseAccents(str) {
  if (!str) return str;
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
            .replace(/â/g, 'a').replace(/ê/g, 'e').replace(/ô/g, 'o')
            .replace(/ă/g, 'a').replace(/ơ/g, 'o').replace(/ư/g, 'u');
}

function convertRomajiSmart(text, mode = 'hiragana', finalize = false) {
  if (!text || typeof wanakana === 'undefined') return text;
  const cleanText = stripVietnameseAccents(text);
  const processedText = cleanText.replace(/nn$/i, "n'");
  const converter = mode === 'katakana' ? wanakana.toKatakana : wanakana.toHiragana;
  if (finalize) return converter(processedText);

  const endsWithSingleN = /[a-zA-Z]?[nN]$/.test(processedText) && !/[nN]{2}$/.test(processedText) && !/[nN]'$/.test(processedText);
  if (endsWithSingleN) {
    const mainPart = processedText.slice(0, -1);
    const lastChar = processedText.slice(-1);
    return converter(mainPart) + lastChar;
  }
  return converter(processedText);
}

// Run test_tilde assertions
const tildeCode = fs.readFileSync('scratch/test_tilde.js', 'utf8');
// Replace the loaded ime.js in test_tilde
let passed = 0, failed = 0;
function test(input, expected, description) {
  const actual = convertRomajiSmart(input);
  if (actual === expected) {
    passed++;
  } else {
    failed++;
    console.log(`FAIL: ${description} | Expected "${expected}", got "${actual}" (input: "${input}")`);
  }
}

console.log("=== Running Tilde Regression Suite ===");
test('watashi~', 'わたし〜', 'tilde converts');
test('watashi', 'わたし', 'no tilde stays hiragana');
test('kanna', 'かん', 'kanna -> かん');
test('kann', 'かん', 'kann -> かん');

console.log(`Passed: ${passed}, Failed: ${failed}`);
