const wanakana = require('./node_modules/wanakana');

function stripVietnameseAccentsClean(str) {
  if (!str) return str;
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
            .replace(/â/g, 'a').replace(/ê/g, 'e').replace(/ô/g, 'o')
            .replace(/ă/g, 'a').replace(/ơ/g, 'o').replace(/ư/g, 'u');
}

function convertClean(text, mode = 'hiragana', finalize = false) {
  if (!text) return text;
  const cleanText = stripVietnameseAccentsClean(text);
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

const testCases = [
  'odo', 'oto', 'oro', 'oso', 'ofo', 'oxo', 'ojo',
  'ada', 'ata', 'ara', 'asa', 'afa', 'axa', 'aja',
  'ede', 'ete', 'ere', 'ese', 'efe', 'exe', 'eje',
  'otoko', 'atama', 'soto', 'kasa', 'sakura', 'kann', 'kan'
];

console.log("=== Normal Typing ===");
testCases.forEach(tc => {
  console.log(`${tc.padEnd(8)} -> ${convertClean(tc)}`);
});

console.log("\n=== UniKey Telex Accented Inputs ===");
const unikeyInputs = ['óo', 'ỏo', 'òo', 'õo', 'ọo', 'áa', 'ảa', 'àa', 'ãa', 'ạa', 'ôto', 'âta', 'ête', 'tô', 'kê', 'sâ'];
unikeyInputs.forEach(u => {
  console.log(`${u.padEnd(8)} -> ${convertClean(u)}`);
});
