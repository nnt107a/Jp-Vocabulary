const wanakana = require('wanakana');

// Reverse Kana to Romaji mapping table
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

// Vietnamese Telex / Accent decoding for standalone accented letters when typed after erasing Kana
// s (sắc) -> +s
// f (huyền) -> +f
// r (hỏi) -> +r
// x (ngã) -> +x
// j (nặng) -> +j
// a, e, o circumflex (aa, ee, oo) -> +a, +e, +o
// w (aw, ow, uw) -> +w (or +a, +o, +u)

function decodeVietnameseCharToTelex(ch) {
  // Return the Telex key sequence for an accented character
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

// Test function simulating input handling
function handleInputSimulation(lastVal, newVal) {
  console.log(`Input: lastVal="${lastVal}" -> newVal="${newVal}"`);

  // Check if lastVal ended with Kana, and newVal has an accented character replacing that Kana
  if (lastVal && lastVal.length > 0) {
    const lastChar = lastVal.slice(-1);
    const kanaRomaji = KANA_TO_ROMAJI[lastChar];

    if (kanaRomaji) {
      // Check if newVal is an accented Vietnamese character (or starts with one)
      const decoded = decodeVietnameseCharToTelex(newVal);
      if (decoded) {
        // e.g. lastChar = 'て' (romaji 'te'), newVal = 'é' (base 'e', key 's')
        // Check if base matches the vowel of kanaRomaji (e.g. 'te' ends with 'e', base is 'e')
        if (kanaRomaji.endsWith(decoded.base)) {
          // Reconstruct: kanaRomaji + key
          const reconstructedRomaji = lastVal.slice(0, -1) + kanaRomaji + decoded.key;
          const converted = wanakana.toHiragana(reconstructedRomaji);
          console.log(`  -> RECONSTRUCTED: "${reconstructedRomaji}" => "${converted}"`);
          return converted;
        }
      }
    }
  }

  return wanakana.toHiragana(newVal);
}

console.log("=== SIMULATIONS ===");
handleInputSimulation("て", "é"); // User typed 'tes' in Telex: 'て' was erased by Backspace, replaced by 'é'
handleInputSimulation("と", "ó"); // User typed 'tos' in Telex: 'と' was erased by Backspace, replaced by 'ó'
handleInputSimulation("た", "á"); // User typed 'tas' in Telex: 'た' was erased by Backspace, replaced by 'á'
handleInputSimulation("か", "á"); // User typed 'kas' in Telex: 'か' was erased by Backspace, replaced by 'á'
handleInputSimulation("て", "ế"); // User typed 'tees' in Telex (t+e+e+s): 'て' was erased, replaced by 'ế'
