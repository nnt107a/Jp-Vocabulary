const wanakana = require('wanakana');

function stripVietnameseAccents(str) {
  if (!str) return str;
  let s = str.normalize('NFC');

  // 1. Kana + UniKey Tone Mark:
  s = s.replace(/([\u3040-\u30ff])[áấắ]/g, '$1s').replace(/([\u3040-\u30ff])[ảẩẳ]/g, '$1r').replace(/([\u3040-\u30ff])[àầằ]/g, '$1f').replace(/([\u3040-\u30ff])[ãẫẵ]/g, '$1x').replace(/([\u3040-\u30ff])[ạậặ]/g, '$1j');
  s = s.replace(/([\u3040-\u30ff])[éế]/g, '$1s').replace(/([\u3040-\u30ff])[ẻể]/g, '$1r').replace(/([\u3040-\u30ff])[èề]/g, '$1f').replace(/([\u3040-\u30ff])[ẽễ]/g, '$1x').replace(/([\u3040-\u30ff])[ẹệ]/g, '$1j');
  s = s.replace(/([\u3040-\u30ff])í/g, '$1s').replace(/([\u3040-\u30ff])ỉ/g, '$1r').replace(/([\u3040-\u30ff])ì/g, '$1f').replace(/([\u3040-\u30ff])ĩ/g, '$1x').replace(/([\u3040-\u30ff])ị/g, '$1j');
  s = s.replace(/([\u3040-\u30ff])[óốớ]/g, '$1s').replace(/([\u3040-\u30ff])[ỏổở]/g, '$1r').replace(/([\u3040-\u30ff])[òồờ]/g, '$1f').replace(/([\u3040-\u30ff])[õỗỡ]/g, '$1x').replace(/([\u3040-\u30ff])[ọộợ]/g, '$1j');
  s = s.replace(/([\u3040-\u30ff])[úứ]/g, '$1s').replace(/([\u3040-\u30ff])[ủử]/g, '$1r').replace(/([\u3040-\u30ff])[ùừ]/g, '$1f').replace(/([\u3040-\u30ff])[ũữ]/g, '$1x').replace(/([\u3040-\u30ff])[ụự]/g, '$1j');

  // 2. Standalone Latin Tone Marks Decoding:
  s = s.replace(/ả/g, 'ar').replace(/ẻ/g, 'er').replace(/ỉ/g, 'ir').replace(/ỏ/g, 'or').replace(/ủ/g, 'ur').replace(/ỷ/g, 'yr');
  s = s.replace(/á/g, 'as').replace(/é/g, 'es').replace(/í/g, 'is').replace(/ó/g, 'os').replace(/ú/g, 'us').replace(/ý/g, 'ys');
  s = s.replace(/à/g, 'af').replace(/è/g, 'ef').replace(/ì/g, 'if').replace(/ò/g, 'of').replace(/ù/g, 'uf').replace(/ỳ/g, 'yf');
  s = s.replace(/ã/g, 'ax').replace(/ẽ/g, 'ex').replace(/ĩ/g, 'ix').replace(/õ/g, 'ox').replace(/ũ/g, 'ux').replace(/ỹ/g, 'yx');
  s = s.replace(/ạ/g, 'aj').replace(/ẹ/g, 'ej').replace(/ị/g, 'ij').replace(/ọ/g, 'oj').replace(/ụ/g, 'uj').replace(/ỵ/g, 'yj');

  s = s.replace(/â([bcdfghjklmnpqrstvwxyz])(?![aeiouyâêôơưăáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])/gi, 'a$1a');
  s = s.replace(/ô([bcdfghjklmnpqrstvwxyz])(?![aeiouyâêôơưăáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])/gi, 'o$1o');
  s = s.replace(/ê([bcdfghjklmnpqrstvwxyz])(?![aeiouyâêôơưăáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])/gi, 'e$1e');

  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/đ/g, 'd').replace(/Đ/g, 'D')
          .replace(/â/g, 'a').replace(/ê/g, 'e').replace(/ô/g, 'o')
          .replace(/ă/g, 'a').replace(/ơ/g, 'o').replace(/ư/g, 'u');
}

function convert(text) {
  const clean = stripVietnameseAccents(text);
  return wanakana.toHiragana(clean);
}

console.log('stripVietnameseAccents("é") ->', stripVietnameseAccents("é"));
console.log('convert("é") ->', convert("é"));
