const wanakana = require('./node_modules/wanakana');

function stripVietnameseAccents(str) {
  if (!str) return str;
  let s = str.normalize('NFC');

  // If UniKey produces ât, ôt, êt (consonant at end or before another consonant), restore trailing vowel: ata -> ât, oto -> ôt, ete -> êt
  s = s.replace(/â([bcdfghjklmnpqrstvwxyz])(?![aeiouyâêôơưăáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])/gi, 'a$1a');
  s = s.replace(/ô([bcdfghjklmnpqrstvwxyz])(?![aeiouyâêôơưăáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])/gi, 'o$1o');
  s = s.replace(/ê([bcdfghjklmnpqrstvwxyz])(?![aeiouyâêôơưăáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])/gi, 'e$1e');

  // NFD decomposition for tone marks & remaining accents
  s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
       .replace(/đ/g, 'd').replace(/Đ/g, 'D')
       .replace(/â/g, 'a').replace(/ê/g, 'e').replace(/ô/g, 'o')
       .replace(/ă/g, 'a').replace(/ơ/g, 'o').replace(/ư/g, 'u');

  return s;
}

function convert(text, mode = 'hiragana', finalize = false) {
  if (!text) return text;
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

console.log("=== Testing Negative Lookahead Circumflex Restoration ===");
console.log("ât (from typing ata)   ->", convert("ât"));
console.log("ôt (from typing oto)   ->", convert("ôt"));
console.log("êt (from typing ete)   ->", convert("êt"));
console.log("âk (from typing aka)   ->", convert("âk"));
console.log("ôk (from typing oko)   ->", convert("ôk"));
console.log("âta (from ata)        ->", convert("âta"));
console.log("ôtoko (from otoko)     ->", convert("ôtoko"));
console.log("atama                 ->", convert("atama"));
console.log("kasa                  ->", convert("kasa"));
console.log("sakura                ->", convert("sakura"));
