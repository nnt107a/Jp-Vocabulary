const wanakana = require('./node_modules/wanakana');

function stripVietnameseAccents(str) {
  if (!str) return str;
  let s = str.normalize('NFC').replace(/\s+/g, '');

  // 1. Residual Kana + UniKey Telex duplicates (e.g. おôto -> おto, あâta -> あta, えête -> えte, そôto -> そto)
  s = s.replace(/([\u3040-\u30ff])(?:áa|âa|ôo|ee|oo)/gi, '$1');
  s = s.replace(/([\u3040-\u30ff])(?:[ôốồổỗộâấầẩẫậêếềểễệơớờởỡợưứừửữựăắằẳẵặáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])([bcdfghjklmnpqrstvwxyz])/gi, '$1$2');
  s = s.replace(/([\u3040-\u30ff])[ôốồổỗộâấầẩẫậêếềểễệơớờởỡợưứừửữựăắằẳẵặáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ]/gi, '$1');

  // 2. Consonant + Circumflex vowel (e.g. tô -> to, tâ -> ta, tê -> te, kô -> ko, kâ -> ka, kê -> ke, sô -> so, etc.)
  s = s.replace(/([bcdfghjklmnpqrstvwxyz])ô/gi, '$1o');
  s = s.replace(/([bcdfghjklmnpqrstvwxyz])â/gi, '$1a');
  s = s.replace(/([bcdfghjklmnpqrstvwxyz])ê/gi, '$1e');

  // 3. Circumflex vowel + Consonant (e.g. ôt -> ot, ât -> at, êt -> et)
  s = s.replace(/ô([bcdfghjklmnpqrstvwxyz])/gi, 'o$1');
  s = s.replace(/â([bcdfghjklmnpqrstvwxyz])/gi, 'a$1');
  s = s.replace(/ê([bcdfghjklmnpqrstvwxyz])/gi, 'e$1');

  // 4. Tone vowel + same vowel (UniKey outputs áa for asa, ảa for ara, ỏo for oro, óo for oso, etc.)
  s = s.replace(/áa/g, 'asa').replace(/ée/g, 'ese').replace(/íi/g, 'isi').replace(/óo/g, 'oso').replace(/úu/g, 'usu');
  s = s.replace(/àa/g, 'afa').replace(/èe/g, 'efe').replace(/ìi/g, 'ifi').replace(/òo/g, 'ofo').replace(/ùu/g, 'ufu');
  s = s.replace(/ảa/g, 'ara').replace(/ẻe/g, 'ere').replace(/ỉi/g, 'iri').replace(/ỏo/g, 'oro').replace(/ủu/g, 'uru');
  s = s.replace(/ãa/g, 'axa').replace(/ẽe/g, 'exe').replace(/ĩi/g, 'ixi').replace(/õo/g, 'oxo').replace(/ũu/g, 'uxu');
  s = s.replace(/ạa/g, 'aja').replace(/ẹe/g, 'eje').replace(/ịi/g, 'iji').replace(/ọo/g, 'ojo').replace(/ụu/g, 'uju');

  // 5. Tone mark mappings for circumflex vowels
  s = s.replace(/ấ/g, 'aas').replace(/ầ/g, 'aaf').replace(/ẩ/g, 'aar').replace(/ẫ/g, 'aax').replace(/ậ/g, 'aaj');
  s = s.replace(/ế/g, 'ees').replace(/ề/g, 'eef').replace(/ể/g, 'eer').replace(/ễ/g, 'eex').replace(/ệ/g, 'eej');
  s = s.replace(/ố/g, 'oos').replace(/ồ/g, 'oof').replace(/ổ/g, 'oor').replace(/ỗ/g, 'oox').replace(/ộ/g, 'ooj');

  s = s.replace(/ắ/g, 'aws').replace(/ằ/g, 'awf').replace(/ẳ/g, 'awr').replace(/ẵ/g, 'awx').replace(/ặ/g, 'awj');
  s = s.replace(/ớ/g, 'ows').replace(/ờ/g, 'owf').replace(/ở/g, 'owr').replace(/ỡ/g, 'owx').replace(/ợ/g, 'owj');
  s = s.replace(/ứ/g, 'uws').replace(/ừ/g, 'uwf').replace(/ử/g, 'uwr').replace(/ữ/g, 'uwx').replace(/ự/g, 'uwj');

  s = s.replace(/á/g, 'as').replace(/à/g, 'af').replace(/ả/g, 'ar').replace(/ã/g, 'ax').replace(/ạ/g, 'aj');
  s = s.replace(/é/g, 'es').replace(/è/g, 'ef').replace(/ẻ/g, 'er').replace(/ẽ/g, 'ex').replace(/ẹ/g, 'ej');
  s = s.replace(/í/g, 'is').replace(/ì/g, 'if').replace(/ỉ/g, 'ir').replace(/ĩ/g, 'ix').replace(/ị/g, 'ij');
  s = s.replace(/ó/g, 'os').replace(/ò/g, 'of').replace(/ỏ/g, 'or').replace(/õ/g, 'ox').replace(/ọ/g, 'oj');
  s = s.replace(/ú/g, 'us').replace(/ù/g, 'uf').replace(/ủ/g, 'ur').replace(/ũ/g, 'ux').replace(/ũ/g, 'uj');
  s = s.replace(/ý/g, 'ys').replace(/ỳ/g, 'yf').replace(/ỷ/g, 'yr').replace(/ỹ/g, 'yx').replace(/ỵ/g, 'yj');

  // 6. Standalone circumflex, horn, breve, stroke
  s = s.replace(/ô/g, 'oo').replace(/â/g, 'aa').replace(/ê/g, 'ee');
  s = s.replace(/ơ/g, 'o').replace(/ư/g, 'u').replace(/ă/g, 'a');
  s = s.replace(/đ/g, 'd').replace(/Đ/g, 'D');

  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function convertRomajiSmart(text, mode = 'hiragana', finalize = false) {
  if (!text || typeof wanakana === 'undefined') return text;

  const cleanText = stripVietnameseAccents(text);
  const processedText = cleanText.replace(/nn$/i, "n'");
  const converter = mode === 'katakana' ? wanakana.toKatakana : wanakana.toHiragana;

  if (finalize) {
    return converter(processedText);
  }

  const endsWithSingleN = /[a-zA-Z]?[nN]$/.test(processedText) && !/[nN]{2}$/.test(processedText) && !/[nN]'$/.test(processedText);

  if (endsWithSingleN) {
    const mainPart = processedText.slice(0, -1);
    const lastChar = processedText.slice(-1);
    return converter(mainPart) + lastChar;
  } else {
    return converter(processedText);
  }
}

console.log('--- TYPING SEQUENCES SIMULATION ---');
console.log('o ->', convertRomajiSmart('o'));
console.log('おt ->', convertRomajiSmart('おt'));
console.log('おto ->', convertRomajiSmart('おto'));
console.log('おtô ->', convertRomajiSmart('おtô'));
console.log('おとk ->', convertRomajiSmart('おとk'));
console.log('おとko ->', convertRomajiSmart('おとko'));
console.log('おとkô ->', convertRomajiSmart('おとkô'));
console.log('otoko ->', convertRomajiSmart('otoko'));
