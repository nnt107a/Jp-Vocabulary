const fs = require('fs');
const path = require('path');
const vm = require('vm');
const wanakana = require(path.join(__dirname, 'node_modules', 'wanakana'));

global.wanakana = wanakana;

// Load ime.js
const imeJsPath = path.join(__dirname, '..', 'js', 'ime.js');
const imeJsCode = fs.readFileSync(imeJsPath, 'utf8');
vm.runInThisContext(imeJsCode);

let totalTests = 0;
let passedTests = 0;
let failedTests = [];

function test(input, expected, desc) {
  totalTests++;
  // Test stripVietnameseAccents
  const result = stripVietnameseAccents(input);
  if (result === expected) {
    passedTests++;
    // console.log(`  [PASS] ${desc}: "${input}" -> "${result}"`);
  } else {
    failedTests.push({ desc, input, expected, got: result });
    console.error(`  [FAIL] ${desc}: "${input}" -> "${result}" (expected "${expected}")`);
  }
}

function testConvert(input, expected, desc, finalize = true) {
  totalTests++;
  const result = convertRomajiSmart(input, 'hiragana', finalize);
  if (result === expected) {
    passedTests++;
    // console.log(`  [PASS] ${desc}: "${input}" -> "${result}"`);
  } else {
    failedTests.push({ desc, input, expected, got: result });
    console.error(`  [FAIL] ${desc}: "${input}" -> "${result}" (expected "${expected}")`);
  }
}

console.log('=== TELEX DEMANGLING TESTS ===\n');

// === SECTION 1: Telex tone keys that collide with Romaji consonants ===
console.log('--- S tone (Telex "s" = sắc/acute accent) ---');
// 's' is both a Telex tone key AND a Romaji consonant
// When user types "as" to get あs (pending), UniKey may produce "ás" 
test('as', 'as', 'Plain "as" should pass through');
test('ás', 'ass', 'UniKey "ás" (a+s tone) -> "ass"');  // Actually should be 'as' for just typing a then s
// But the real issue: when user types "asa" (朝), UniKey outputs "ása" or "áa" depending on timing
test('asa', 'asa', '"asa" should stay "asa"');
test('áa', 'asa', '"áa" (UniKey asa) should -> "asa"');

console.log('\n--- F tone (Telex "f" = huyền/grave accent) ---');
test('af', 'af', 'Plain "af" should pass through');
test('àf', 'aff', 'UniKey "àf" -> "aff"');
test('ofu', 'ofu', '"ofu" should stay');
test('òu', 'ofu', '"òu" (UniKey ofu) should -> "ofu"');  // This is tricky

console.log('\n--- R tone (Telex "r" = hỏi accent) ---');
test('ar', 'ar', 'Plain "ar" pass through');
test('ảr', 'arr', 'UniKey "ảr" -> "arr"');
test('ara', 'ara', '"ara" should stay');
test('ảa', 'ara', '"ảa" (UniKey ara) -> "ara"');
test('ore', 'ore', '"ore" should stay');
test('ỏe', 'ore', '"ỏe" -> "ore"');  // UniKey "ore" might produce ỏe

console.log('\n--- X tone (Telex "x" = ngã accent) ---');
test('ax', 'ax', 'Plain "ax" pass through');
test('ãx', 'axx', 'UniKey "ãx" -> "axx"');

console.log('\n--- J tone (Telex "j" = nặng accent) ---');
test('aj', 'aj', 'Plain "aj" pass through');
test('ạj', 'ajj', 'UniKey "ạj" -> "ajj"');

// === SECTION 2: Circumflex keys (aa, ee, oo -> â, ê, ô) ===
console.log('\n--- Circumflex: "aa" -> â, "ee" -> ê, "oo" -> ô ---');
test('ata', 'ata', '"ata" should stay "ata"');
test('oto', 'oto', '"oto" should stay "oto"');
test('ete', 'ete', '"ete" should stay "ete"');
// When UniKey is active and user types "ata", UniKey produces "âta"
test('âta', 'ata', '"âta" (UniKey ata with circumflex) -> "ata"');
test('ôto', 'oto', '"ôto" -> "oto"');
test('êta', 'eta', '"êta" -> "eta"');

console.log('\n--- Circumflex in middle of words ---');
test('kata', 'kata', '"kata" should stay');
test('kâta', 'kata', '"kâta" -> "kata"');
test('soto', 'soto', '"soto" should stay');
test('sôto', 'soto', '"sôto" -> "soto"');

// === SECTION 3: Horn/Breve keys (w -> ơ, ư, ă) ===
console.log('\n--- Horn/Breve: "aw" -> ă, "ow" -> ơ, "uw" -> ư ---');
test('awa', 'awa', '"awa" should stay');
test('ăa', 'aa', '"ăa" -> should be "aa" (aw + a)');  // Hmm, actually ă->a then a->aa
test('ow', 'ow', '"ow" should stay');
test('ơi', 'oi', '"ơi" -> "oi"');
test('ưu', 'uu', '"ưu" -> "uu"');

// === SECTION 4: Stroke key (d -> đ) ===
console.log('\n--- Stroke: "dd" -> đ ---');
test('da', 'da', '"da" should stay');
test('đa', 'da', '"đa" (UniKey "dda") -> "da"');
test('đe', 'de', '"đe" -> "de"');
test('đi', 'di', '"đi" -> "di"');

// === SECTION 5: Combined Telex artifacts & Kana + Telex collisions ---
console.log('\n--- Combined Telex artifacts ---');
test('oto', 'oto', '"oto" -> "oto"');
test('âtâ', 'ata', '"âtâ" -> "ata"');
test('おôto', 'おto', '"おôto" (Kana + Telex oto) -> "おto"');
test('あâta', 'あta', '"あâta" (Kana + Telex ata) -> "あta"');
test('そôto', 'そto', '"そôto" (Kana + Telex soto) -> "そto"');
test('かâta', 'かta', '"かâta" (Kana + Telex kata) -> "かta"');
test('けête', 'けte', '"けête" (Kana + Telex ete) -> "けte"');
test('おósa', 'おsa', '"おósa" (Kana + Telex osa) -> "おsa"');
test('あảra', 'あra', '"あảra" (Kana + Telex ara) -> "あra"');

// === SECTION 6: The convertRomajiSmart end-to-end tests ===
console.log('\n--- convertRomajiSmart end-to-end (finalize=true) ---');
testConvert('ata', 'あた', 'Simple "ata" -> あた');
testConvert('oto', 'おと', 'Simple "oto" -> おと');
testConvert('ete', 'えて', 'Simple "ete" -> えて');
testConvert('kata', 'かた', 'Simple "kata" -> かた');
testConvert('ore', 'おれ', 'Simple "ore" -> おれ');
testConvert('soto', 'そと', 'Simple "soto" -> そと');
testConvert('おôto', 'おと', 'Kana + Telex "おôto" -> おと');
testConvert('あâta', 'あた', 'Kana + Telex "あâta" -> あた');
testConvert('そôto', 'そと', 'Kana + Telex "そôto" -> そと');
testConvert('かâta', 'かた', 'Kana + Telex "かâta" -> かた');
testConvert('けête', 'けて', 'Kana + Telex "けête" -> けて');
testConvert('おósa', 'おさ', 'Kana + Telex "おósa" -> おさ');
testConvert('あảra', 'あら', 'Kana + Telex "あảra" -> あら');

// Telex-corrupted versions
testConvert('âta', 'あた', 'Telex "âta" -> あた');
testConvert('ôto', 'おと', 'Telex "ôto" -> おと');
testConvert('êta', 'えた', 'Telex "êta" -> えた');  // Wait, this should be えた not えた
testConvert('áa', 'あさ', 'Telex "áa" (asa) -> あさ');
testConvert('ảa', 'あら', 'Telex "ảa" (ara) -> あら');
testConvert('óo', 'おそ', 'Telex "óo" (oso) -> おそ');
testConvert('ỏo', 'おろ', 'Telex "ỏo" (oro) -> おろ');

// Keys that Telex may not affect
testConvert('ka', 'か', '"ka" -> か');
testConvert('ki', 'き', '"ki" -> き');
testConvert('ku', 'く', '"ku" -> く');
testConvert('ke', 'け', '"ke" -> け');
testConvert('ko', 'こ', '"ko" -> こ');

// Common Japanese words that hit Telex patterns
testConvert('atama', 'あたま', '"atama" -> あたま (head)');
testConvert('otoko', 'おとこ', '"otoko" -> おとこ (man)');
testConvert('otouto', 'おとうと', '"otouto" -> おとうと (younger brother)');
testConvert('asatte', 'あさって', '"asatte" -> あさって (day after tomorrow)');
testConvert('osake', 'おさけ', '"osake" -> おさけ (alcohol)');
testConvert('okasan', 'おかさん', '"okasan" -> おかさん (mother)');
testConvert('otousan', 'おとうさん', '"otousan" -> おとうさん (father)');
testConvert('okaasan', 'おかあさん', '"okaasan" -> おかあさん');

// Edge cases with Telex D -> Đ interference
testConvert('doko', 'どこ', '"doko" -> どこ (where)');
testConvert('dare', 'だれ', '"dare" -> だれ (who)');
testConvert('desu', 'です', '"desu" -> です');
testConvert('da', 'だ', '"da" -> だ');

// Non-finalize tests (live typing simulation)
console.log('\n--- convertRomajiSmart live typing (finalize=false) ---');
testConvert('k', 'k', 'Pending "k" returns "k"', false);
testConvert('ka', 'か', '"ka" -> か', false);
testConvert('kan', 'かn', 'Pending "kan" keeps "n"', false);
testConvert('kann', 'かん', '"kann" -> かん', false);

console.log(`\n=== RESULTS: ${passedTests}/${totalTests} Passed (${Math.round((passedTests/totalTests)*100)}%) ===`);
if (failedTests.length > 0) {
  console.log(`\n=== FAILED TESTS (${failedTests.length}): ===`);
  failedTests.forEach(f => {
    console.log(`  "${f.input}" -> got "${f.got}" expected "${f.got === f.expected ? 'OK' : f.expected}" (${f.desc})`);
  });
}
if (failedTests.length > 0) process.exit(1);
