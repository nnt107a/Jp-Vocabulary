const wanakana = require('./node_modules/wanakana');

function stripVietnameseAccents(str) {
  if (!str) return str;
  let s = str.normalize('NFC');

  // 1. Kana + UniKey Tone Mark:
  // Since Kana (あ,い,う,え,お) ALREADY includes the vowel, the tone mark represents ONLY the consonant!
  // あ + á/ả/à/ã/ạ -> あs / あr / あf / あx / あj
  s = s.replace(/([\u3040-\u30ff])[áấắ]/g, '$1s').replace(/([\u3040-\u30ff])[ảẩẳ]/g, '$1r').replace(/([\u3040-\u30ff])[àầằ]/g, '$1f').replace(/([\u3040-\u30ff])[ãẫẵ]/g, '$1x').replace(/([\u3040-\u30ff])[ạậặ]/g, '$1j');
  s = s.replace(/([\u3040-\u30ff])[éế]/g, '$1s').replace(/([\u3040-\u30ff])[ẻể]/g, '$1r').replace(/([\u3040-\u30ff])[èề]/g, '$1f').replace(/([\u3040-\u30ff])[ẽễ]/g, '$1x').replace(/([\u3040-\u30ff])[ẹệ]/g, '$1j');
  s = s.replace(/([\u3040-\u30ff])í/g, '$1s').replace(/([\u3040-\u30ff])ỉ/g, '$1r').replace(/([\u3040-\u30ff])ì/g, '$1f').replace(/([\u3040-\u30ff])ĩ/g, '$1x').replace(/([\u3040-\u30ff])ị/g, '$1j');
  s = s.replace(/([\u3040-\u30ff])[óốớ]/g, '$1s').replace(/([\u3040-\u30ff])[ỏổở]/g, '$1r').replace(/([\u3040-\u30ff])[òồờ]/g, '$1f').replace(/([\u3040-\u30ff])[õỗỡ]/g, '$1x').replace(/([\u3040-\u30ff])[ọộợ]/g, '$1j');
  s = s.replace(/([\u3040-\u30ff])[úứ]/g, '$1s').replace(/([\u3040-\u30ff])[ủử]/g, '$1r').replace(/([\u3040-\u30ff])[ùừ]/g, '$1f').replace(/([\u3040-\u30ff])[ũữ]/g, '$1x').replace(/([\u3040-\u30ff])[ụự]/g, '$1j');

  // 2. Standalone Latin Tone Marks Decoding (when typed without preceding Kana):
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

  // 3. Circumflex & Horn Restoration across consonant
  s = s.replace(/â([bcdfghjklmnpqrstvwxyz])(?![aeiouyâêôơưăáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])/gi, 'a$1a');
  s = s.replace(/ô([bcdfghjklmnpqrstvwxyz])(?![aeiouyâêôơưăáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])/gi, 'o$1o');
  s = s.replace(/ê([bcdfghjklmnpqrstvwxyz])(?![aeiouyâêôơưăáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])/gi, 'e$1e');

  // 4. Fallback NFD decomposition for any remaining accents
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

console.log("=== Testing Fix for Double あ ===");
console.log("あáa (typing asa)      ->", convert("あáa"));
console.log("あảa (typing ara)      ->", convert("あảa"));
console.log("おỏo (typing oro)      ->", convert("おỏo"));
console.log("おóo (typing oso)      ->", convert("おóo"));
console.log("あá  (step 2 of asa)   ->", convert("あá"));
console.log("あả  (step 2 of ara)   ->", convert("あả"));
