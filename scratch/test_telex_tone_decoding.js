const wanakana = require('./node_modules/wanakana');

function stripVietnameseAccents(str) {
  if (!str) return str;
  let s = str.normalize('NFC');

  // 1. UniKey Telex Tone Marks Decoding:
  // r (hỏi) -> ả, ẻ, ỉ, ỏ, ủ, ỷ
  s = s.replace(/ả/g, 'ar').replace(/ẻ/g, 'er').replace(/ỉ/g, 'ir').replace(/ỏ/g, 'or').replace(/ủ/g, 'ur').replace(/ỷ/g, 'yr');
  // s (sắc) -> á, é, í, ó, ú, ý
  s = s.replace(/á/g, 'as').replace(/é/g, 'es').replace(/í/g, 'is').replace(/ó/g, 'os').replace(/ú/g, 'us').replace(/ý/g, 'ys');
  // f (huyền) -> à, è, ì, ò, ù, ỳ
  s = s.replace(/à/g, 'af').replace(/è/g, 'ef').replace(/ì/g, 'if').replace(/ò/g, 'of').replace(/ù/g, 'uf').replace(/ỳ/g, 'yf');
  // x (ngã) -> ã, ẽ, ĩ, õ, ũ, ỹ
  s = s.replace(/ã/g, 'ax').replace(/ẽ/g, 'ex').replace(/ĩ/g, 'ix').replace(/õ/g, 'ox').replace(/ũ/g, 'ux').replace(/ỹ/g, 'yx');
  // j (nặng) -> ạ, ẹ, ị, ọ, ụ, ỵ
  s = s.replace(/ạ/g, 'aj').replace(/ẹ/g, 'ej').replace(/ị/g, 'ij').replace(/ọ/g, 'oj').replace(/ụ/g, 'uj').replace(/ỵ/g, 'yj');

  // If previous char was already Kana (e.g. あar -> あr, あas -> あs)
  s = s.replace(/([\u3040-\u30ff])a([rsfxj])/g, '$1$2');
  s = s.replace(/([\u3040-\u30ff])e([rsfxj])/g, '$1$2');
  s = s.replace(/([\u3040-\u30ff])i([rsfxj])/g, '$1$2');
  s = s.replace(/([\u3040-\u30ff])o([rsfxj])/g, '$1$2');
  s = s.replace(/([\u3040-\u30ff])u([rsfxj])/g, '$1$2');

  // 2. Circumflex & Horn Restoration across consonant
  s = s.replace(/â([bcdfghjklmnpqrstvwxyz])(?![aeiouyâêôơưăáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])/gi, 'a$1a');
  s = s.replace(/ô([bcdfghjklmnpqrstvwxyz])(?![aeiouyâêôơưăáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])/gi, 'o$1o');
  s = s.replace(/ê([bcdfghjklmnpqrstvwxyz])(?![aeiouyâêôơưăáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])/gi, 'e$1e');

  // 3. Fallback NFD decomposition for any remaining accents
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/đ/g, 'd').replace(/Đ/g, 'D')
          .replace(/â/g, 'a').replace(/ê/g, 'e').replace(/ô/g, 'o')
          .replace(/ă/g, 'a').replace(/ơ/g, 'o').replace(/ư/g, 'u');
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

console.log("=== Testing Telex Tone Decoding ===");
console.log("ả (from a + r)          ->", convert("ả"));
console.log("ara (from a + r + a)    ->", convert("ảa"));
console.log("あả (from あ + r)        ->", convert("あả"));
console.log("あảa (from あ + r + a)   ->", convert("あảa"));
console.log("あáa (from あ + s + a)   ->", convert("あáa"));
console.log("おỏo (from お + r + o)   ->", convert("おỏo"));
console.log("おóo (from お + s + o)   ->", convert("おóo"));
console.log("sakura                  ->", convert("sakura"));
console.log("arigatou                ->", convert("ảigatou"));
