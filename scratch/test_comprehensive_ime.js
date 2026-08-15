const wanakana = require('wanakana');

const KANA_TO_ROMAJI = {
  'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
  'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
  'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
  'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
  'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
  'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
  'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
  'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
  'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
  'わ': 'wa', 'を': 'wo', 'ん': 'n',
  'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
  'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
  'だ': 'da', 'ぢ': 'di', 'づ': 'du', 'で': 'de', 'ど': 'do',
  'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
  'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
  'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
  'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
  'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
  'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
  'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
  'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
  'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
  'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
  'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
  'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n',
  'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
  'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
  'ダ': 'da', 'ヂ': 'di', 'ヅ': 'du', 'デ': 'de', 'ド': 'do',
  'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
  'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po'
};

function decodeVietnameseCharToTelex(ch) {
  const map = {
    // Sắc (s)
    'á': { base: 'a', key: 's' }, 'é': { base: 'e', key: 's' }, 'í': { base: 'i', key: 's' }, 'ó': { base: 'o', key: 's' }, 'ú': { base: 'u', key: 's' }, 'ý': { base: 'y', key: 's' },
    // Huyền (f)
    'à': { base: 'a', key: 'f' }, 'è': { base: 'e', key: 'f' }, 'ì': { base: 'i', key: 'f' }, 'ò': { base: 'o', key: 'f' }, 'ù': { base: 'u', key: 'f' }, 'ỳ': { base: 'y', key: 'f' },
    // Hỏi (r)
    'ả': { base: 'a', key: 'r' }, 'ẻ': { base: 'e', key: 'r' }, 'ỉ': { base: 'i', key: 'r' }, 'ỏ': { base: 'o', key: 'r' }, 'ủ': { base: 'u', key: 'r' }, 'ỷ': { base: 'y', key: 'r' },
    // Ngã (x)
    'ã': { base: 'a', key: 'x' }, 'ẽ': { base: 'e', key: 'x' }, 'ĩ': { base: 'i', key: 'x' }, 'õ': { base: 'o', key: 'x' }, 'ũ': { base: 'u', key: 'x' }, 'ỹ': { base: 'y', key: 'x' },
    // Nặng (j)
    'ạ': { base: 'a', key: 'j' }, 'ẹ': { base: 'e', key: 'j' }, 'ị': { base: 'i', key: 'j' }, 'ọ': { base: 'o', key: 'j' }, 'ụ': { base: 'u', key: 'j' }, 'ỵ': { base: 'y', key: 'j' },

    // Circumflex (a, e, o)
    'â': { base: 'a', key: 'a' }, 'ê': { base: 'e', key: 'e' }, 'ô': { base: 'o', key: 'o' },
    // Horn / Breve
    'ă': { base: 'a', key: 'w' }, 'ơ': { base: 'o', key: 'w' }, 'ư': { base: 'u', key: 'w' },

    // Circumflex + Tone Marks
    'ấ': { base: 'a', key: 'as' }, 'ầ': { base: 'a', key: 'af' }, 'ẩ': { base: 'a', key: 'ar' }, 'ẫ': { base: 'a', key: 'ax' }, 'ậ': { base: 'a', key: 'aj' },
    'ế': { base: 'e', key: 'es' }, 'ề': { base: 'e', key: 'ef' }, 'ể': { base: 'e', key: 'er' }, 'ễ': { base: 'e', key: 'ex' }, 'ệ': { base: 'e', key: 'ej' },
    'ố': { base: 'o', key: 'os' }, 'ồ': { base: 'o', key: 'of' }, 'ổ': { base: 'o', key: 'or' }, 'ỗ': { base: 'o', key: 'ox' }, 'ộ': { base: 'o', key: 'oj' },

    // Breve/Horn + Tone Marks
    'ắ': { base: 'a', key: 'ws' }, 'ằ': { base: 'a', key: 'wf' }, 'ẳ': { base: 'a', key: 'wr' }, 'ẵ': { base: 'a', key: 'wx' }, 'ặ': { base: 'a', key: 'wj' },
    'ớ': { base: 'o', key: 'ws' }, 'ờ': { base: 'o', key: 'wf' }, 'ở': { base: 'o', key: 'wr' }, 'ỡ': { base: 'o', key: 'wx' }, 'ợ': { base: 'o', key: 'wj' },
    'ứ': { base: 'u', key: 'ws' }, 'ừ': { base: 'u', key: 'wf' }, 'ử': { base: 'u', key: 'wr' }, 'ữ': { base: 'u', key: 'wx' }, 'ự': { base: 'u', key: 'wj' },
  };
  return map[ch] || null;
}

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

function convertRomajiSmart(val, lastVal = '', mode = 'hiragana', finalize = false) {
  if (!val || typeof wanakana === 'undefined') return val;

  let textToProcess = val;

  // Reconstruct UniKey Telex deleted Kana if lastVal ended with Kana and val starts with prefix + accented char
  if (lastVal && lastVal.length > 0) {
    const lastChar = lastVal.slice(-1);
    const kanaRomaji = KANA_TO_ROMAJI[lastChar];

    if (kanaRomaji) {
      const prefix = lastVal.slice(0, -1);
      if (val.startsWith(prefix)) {
        const suffix = val.slice(prefix.length);
        if (suffix.length > 0) {
          const firstChar = suffix.charAt(0);
          const decoded = decodeVietnameseCharToTelex(firstChar);
          if (decoded && kanaRomaji.endsWith(decoded.base)) {
            textToProcess = prefix + kanaRomaji + decoded.key + suffix.slice(1);
          }
        }
      }
    }
  }

  const cleanText = stripVietnameseAccents(textToProcess);
  const processedText = cleanText.replace(/nn$/i, "n'");
  const converter = mode === 'katakana' ? wanakana.toKatakana : wanakana.toHiragana;

  if (finalize) {
    return converter(processedText);
  }

  const endsWithSingleN = /[a-zA-Z]?[nN]$/.test(processedText) && !/[nN]{2}$/.test(processedText) && !/[nN]'$/.test(processedText);

  let result = '';
  if (endsWithSingleN) {
    const mainPart = processedText.slice(0, -1);
    const lastChar = processedText.slice(-1);
    result = converter(mainPart) + lastChar;
  } else {
    result = converter(processedText);
  }

  return result;
}

console.log("=== PREFIX SIMULATION ===");
console.log(convertRomajiSmart("わたしはé", "わたしはて", "hiragana"));
