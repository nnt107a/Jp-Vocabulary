const wanakana = require('./node_modules/wanakana');

function stripVietnameseAccents(str) {
  if (!str) return str;
  let s = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
             .replace(/đ/g, 'd').replace(/Đ/g, 'D');

  // UniKey Telex consumes trailing vowel to make circumflex across consonant:
  // ata -> ât, oto -> ôt, ete -> êt, aka -> âk, otoko -> ôtok...
  // Restore circumflex + consonant to vowel + consonant + vowel
  s = s.replace(/â([bcdfghjklmnpqrstvwxyz])/gi, 'a$1a');
  s = s.replace(/ô([bcdfghjklmnpqrstvwxyz])/gi, 'o$1o');
  s = s.replace(/ê([bcdfghjklmnpqrstvwxyz])/gi, 'e$1e');

  // Catch remaining standalone circumflexes/horns
  s = s.replace(/â/g, 'a').replace(/ê/g, 'e').replace(/ô/g, 'o')
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

console.log("=== UniKey Output Restorations ===");
console.log("ât (from ata)   ->", convert("ât"));
console.log("ôt (from oto)   ->", convert("ôt"));
console.log("êt (from ete)   ->", convert("êt"));
console.log("âk (from aka)   ->", convert("âk"));
console.log("ôk (from oko)   ->", convert("ôk"));
console.log("âta (from ata)  ->", convert("âta"));
console.log("ôtoko (otoko)   ->", convert("ôtoko"));
console.log("atama           ->", convert("atama"));
console.log("kasa            ->", convert("kasa"));
console.log("sakura          ->", convert("sakura"));
