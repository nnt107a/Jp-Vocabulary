const wanakana = require('./node_modules/wanakana');

console.log("=== Testing WanaKana Native with customMapping ===");

const options = {
  customMapping: {
    'â': 'a', 'ê': 'e', 'ô': 'o',
    'á': 'a', 'à': 'a', 'ả': 'a', 'ã': 'a', 'ạ': 'a',
    'é': 'e', 'è': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ẹ': 'e',
    'í': 'i', 'ì': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ị': 'i',
    'ó': 'o', 'ò': 'o', 'ỏ': 'o', 'õ': 'o', 'ọ': 'o',
    'ú': 'u', 'ù': 'u', 'ủ': 'u', 'ũ': 'u', 'ụ': 'u',
    'ơ': 'o', 'ư': 'u', 'ă': 'a', 'đ': 'd'
  }
};

console.log("toHiragana('oto'):", wanakana.toHiragana('oto', options));
console.log("toHiragana('oro'):", wanakana.toHiragana('oro', options));
console.log("toHiragana('asa'):", wanakana.toHiragana('asa', options));
console.log("toHiragana('ôto'):", wanakana.toHiragana('ôto', options));
console.log("toHiragana('ôto'):", wanakana.toHiragana('ôto', options));
console.log("toHiragana('áa'):", wanakana.toHiragana('áa', options));
console.log("toHiragana('ỏo'):", wanakana.toHiragana('ỏo', options));
