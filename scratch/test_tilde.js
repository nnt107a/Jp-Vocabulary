const fs = require('fs');
const path = require('path');
const vm = require('vm');
const wanakana = require(path.join(__dirname, 'node_modules', 'wanakana'));

// Global wanakana for study.js
global.wanakana = wanakana;

// Read study.js content and eval it in global context
const studyJsPath = path.join(__dirname, '..', 'js', 'study.js');
const studyJsCode = fs.readFileSync(studyJsPath, 'utf8');
vm.runInThisContext(studyJsCode);

// Test runner function
let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${message}`);
  } else {
    console.error(`  [FAIL] ${message}`);
  }
}

console.log('=== RUNNING TILDE MATCHING TESTS ===\n');

// Mock words for testing
const word1 = { hiragana: "～さん", vietnamese: "Bạn~, anh~, chị~, ông~, bà~" };
const word2 = { hiragana: "～じん", vietnamese: "Người ~" };
const word3 = { hiragana: "～さい", vietnamese: "~ tuổi" };
const word4 = { hiragana: "だれの ～？", vietnamese: "~ của ai?" };
const word5 = { hiragana: "～ちゃん / ～くん", vietnamese: "Bé ~" };
const word6 = { hiragana: "しつれいですが", vietnamese: "Xin thất lễ, ~" };

// 1. VI -> JP Mode Tests (vn_to_jp)
console.log('--- VI -> JP Mode Tests ---');
const engineVnToJp = new StudyEngine();
engineVnToJp.wordsList = [word1, word2, word3, word4, word5];
engineVnToJp.mode = 'vn_to_jp';

// Word 1: ～さん
engineVnToJp.currentIndex = 0;
assert(engineVnToJp.checkAnswer('san'), '～さん: input "san" (Romaji no tilde)');
assert(engineVnToJp.checkAnswer('~san'), '～さん: input "~san" (ASCII tilde)');
assert(engineVnToJp.checkAnswer('～san'), '～san: input "～san" (Fullwidth tilde)');
assert(engineVnToJp.checkAnswer('〜san'), '～san: input "〜san" (Wave dash)');
assert(engineVnToJp.checkAnswer('~ san'), '～san: input "~ san" (Space around tilde)');
assert(engineVnToJp.checkAnswer('...san'), '～san: input "...san" (Ellipsis)');
assert(engineVnToJp.checkAnswer('さん'), '～san: input "さん" (Hiragana no tilde)');
assert(engineVnToJp.checkAnswer('～さん'), '～san: input "～さん" (Hiragana fullwidth tilde)');
assert(engineVnToJp.checkAnswer('~さん'), '～san: input "~さん" (Hiragana ASCII tilde)');

// Word 2: ～じん
engineVnToJp.currentIndex = 1;
assert(engineVnToJp.checkAnswer('jin'), '～じん: input "jin"');
assert(engineVnToJp.checkAnswer('~jin'), '～じん: input "~jin"');
assert(engineVnToJp.checkAnswer('～jin'), '～じん: input "～jin"');
assert(engineVnToJp.checkAnswer('じん'), '～じん: input "じん"');

// Word 3: ～さい
engineVnToJp.currentIndex = 2;
assert(engineVnToJp.checkAnswer('sai'), '～さい: input "sai"');
assert(engineVnToJp.checkAnswer('~sai'), '～さい: input "~sai"');
assert(engineVnToJp.checkAnswer('さい'), '～さい: input "さい"');

// Word 4: だれの ～？
engineVnToJp.currentIndex = 3;
assert(engineVnToJp.checkAnswer('dare no ~'), 'だれの ～？: input "dare no ~"');
assert(engineVnToJp.checkAnswer('dare no ~?'), 'だれの ～？: input "dare no ~?"');
assert(engineVnToJp.checkAnswer('dare no'), 'だれの ～？: input "dare no"');
assert(engineVnToJp.checkAnswer('だれの'), 'だれの ～？: input "だれの"');
assert(engineVnToJp.checkAnswer('だれの～'), 'だれの ～？: input "だれの～"');

// Word 5: ～ちゃん / ～くん
engineVnToJp.currentIndex = 4;
assert(engineVnToJp.checkAnswer('chan'), '～ちゃん / ～くん: input "chan"');
assert(engineVnToJp.checkAnswer('~chan'), '～ちゃん / ～くん: input "~chan"');
assert(engineVnToJp.checkAnswer('kun'), '～ちゃん / ～くん: input "kun"');
assert(engineVnToJp.checkAnswer('~kun'), '～ちゃん / ～くん: input "~kun"');

// 2. JP -> VI Mode Tests (jp_to_vn)
console.log('\n--- JP -> VI Mode Tests ---');
const engineJpToVn = new StudyEngine();
engineJpToVn.wordsList = [word1, word2, word3, word4, word6];
engineJpToVn.mode = 'jp_to_vn';

// Word 1: Bạn~, anh~, chị~, ông~, bà~
engineJpToVn.currentIndex = 0;
assert(engineJpToVn.checkAnswer('bạn'), 'Bạn~: input "bạn" (no tilde)');
assert(engineJpToVn.checkAnswer('ban'), 'Bạn~: input "ban" (no accents, no tilde)');
assert(engineJpToVn.checkAnswer('bạn~'), 'Bạn~: input "bạn~" (ASCII tilde)');
assert(engineJpToVn.checkAnswer('bạn ~'), 'Bạn~: input "bạn ~" (space tilde)');
assert(engineJpToVn.checkAnswer('bạn ～'), 'Bạn~: input "bạn ～" (fullwidth tilde)');
assert(engineJpToVn.checkAnswer('anh'), 'Bạn~: input "anh"');
assert(engineJpToVn.checkAnswer('anh~'), 'Bạn~: input "anh~"');
assert(engineJpToVn.checkAnswer('chị'), 'Bạn~: input "chị"');

// Word 2: Người ~
engineJpToVn.currentIndex = 1;
assert(engineJpToVn.checkAnswer('người'), 'Người ~: input "người"');
assert(engineJpToVn.checkAnswer('nguoi'), 'Người ~: input "nguoi"');
assert(engineJpToVn.checkAnswer('người ~'), 'Người ~: input "người ~"');
assert(engineJpToVn.checkAnswer('người~'), 'Người ~: input "người~"');
assert(engineJpToVn.checkAnswer('người ～'), 'Người ~: input "người ～"');

// Word 3: ~ tuổi
engineJpToVn.currentIndex = 2;
assert(engineJpToVn.checkAnswer('tuổi'), '~ tuổi: input "tuổi"');
assert(engineJpToVn.checkAnswer('tuoi'), '~ tuổi: input "tuoi"');
assert(engineJpToVn.checkAnswer('~ tuổi'), '~ tuổi: input "~ tuổi"');
assert(engineJpToVn.checkAnswer('~tuổi'), '~ tuổi: input "~tuổi"');

// Word 4: ~ của ai?
engineJpToVn.currentIndex = 3;
assert(engineJpToVn.checkAnswer('của ai'), '~ của ai?: input "của ai"');
assert(engineJpToVn.checkAnswer('~ của ai'), '~ của ai?: input "~ của ai"');

// Word 6: Xin thất lễ, ~
engineJpToVn.currentIndex = 4;
assert(engineJpToVn.checkAnswer('xin thất lễ'), 'Xin thất lễ, ~: input "xin thất lễ"');
assert(engineJpToVn.checkAnswer('xin thất lễ ~'), 'Xin thất lễ, ~: input "xin thất lễ ~"');

console.log(`\n=== RESULTS: ${passedTests}/${totalTests} Passed (${Math.round((passedTests/totalTests)*100)}%) ===`);
if (passedTests !== totalTests) {
  process.exit(1);
}
