const fs = require('fs');
const path = require('path');
const assert = require('assert');

// Global mock for normalizeJapanese
global.normalizeJapanese = function(str) {
  if (!str) return '';
  return str.trim();
};

let dataCode = fs.readFileSync(path.join(__dirname, '../js/data.js'), 'utf8');
dataCode = dataCode.replace(/const VERB_CONJUGATION_DATA =/g, 'global.VERB_CONJUGATION_DATA =');
eval(dataCode);

let conjugationCode = fs.readFileSync(path.join(__dirname, '../js/conjugation.js'), 'utf8');
conjugationCode = conjugationCode.replace(/class ConjugationEngine/g, 'global.ConjugationEngine = class ConjugationEngine');
eval(conjugationCode);

// Test 1: VERB_CONJUGATION_DATA.forms 'ba' name check
const baForm = VERB_CONJUGATION_DATA.forms.find(f => f.id === 'ba');
assert.strictEqual(baForm.name, 'Nếu ~', 'Form ba name should be "Nếu ~"');
console.log('✓ Form ba name verified:', baForm.name);

// Test 2: ConjugationEngine checkAnswer behavior on wrong then right answer
const engine = new ConjugationEngine();
engine.startSession([VERB_CONJUGATION_DATA.verbs[0]], 'ba'); // いく -> ba: いけば

const q = engine.getCurrentQuestion();
assert.strictEqual(q.expectedAnswer, 'いけば');
assert.strictEqual(q.prompt, 'Chia động từ "いく" (Đi) sang Nếu ~');

// Submit WRONG answer
const wrongRes = engine.checkAnswer('いかない');
assert.strictEqual(wrongRes.isCorrect, false, 'Wrong answer should return isCorrect=false');
assert.strictEqual(engine.isAnswerRevealed, false, 'isAnswerRevealed should remain FALSE on wrong answer');
assert.strictEqual(engine.score, 0, 'Score should remain 0');
console.log('✓ Wrong answer submission does not reveal answer or increment score');

// Submit CORRECT answer after wrong answer
const rightRes = engine.checkAnswer('いけば');
assert.strictEqual(rightRes.isCorrect, true, 'Right answer should return isCorrect=true');
assert.strictEqual(engine.isAnswerRevealed, true, 'isAnswerRevealed should become TRUE on right answer');
assert.strictEqual(engine.score, 1, 'Score should increment to 1');
console.log('✓ Subsequent correct answer submission succeeds and increments score');

console.log('ALL TESTS PASSED SUCCESSFULLY!');
