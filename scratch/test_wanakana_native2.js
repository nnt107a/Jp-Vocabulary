const wanakana = require('./node_modules/wanakana');

console.log("=== Testing WanaKana Native mapping to Hiragana ===");

const options = {
  customMapping: {
    'â': 'あ', 'ê': 'え', 'ô': 'お',
    'á': 'あ', 'à': 'あ', 'ả': 'あ', 'ã': 'あ', 'ạ': 'あ',
    'é': 'え', 'è': 'え', 'ẻ': 'え', 'ẽ': 'え', 'ẹ': 'え',
    'í': 'い', 'ì': 'い', 'ỉ': 'い', 'ĩ': 'い', 'ị': 'い',
    'ó': 'お', 'ò': 'お', 'ỏ': 'お', 'õ': 'お', 'ọ': 'お',
    'ú': 'う', 'ù': 'う', 'ủ': 'う', 'ũ': 'う', 'ụ': 'う',
    'ơ': 'お', 'ư': 'う', 'ă': 'あ'
  }
};

console.log("toHiragana('oto'):", wanakana.toHiragana('oto', options));
console.log("toHiragana('oro'):", wanakana.toHiragana('oro', options));
console.log("toHiragana('asa'):", wanakana.toHiragana('asa', options));
console.log("toHiragana('ôto'):", wanakana.toHiragana('ôto', options));
console.log("toHiragana('ôto'):", wanakana.toHiragana('ôto', options));
console.log("toHiragana('áa'):", wanakana.toHiragana('áa', options));
console.log("toHiragana('ỏo'):", wanakana.toHiragana('ỏo', options));
console.log("toHiragana('âta'):", wanakana.toHiragana('âta', options));
console.log("toHiragana('ête'):", wanakana.toHiragana('ête', options));
