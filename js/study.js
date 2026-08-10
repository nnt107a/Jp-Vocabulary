function normalizeVietnamese(text) {
  if (!text) return '';
  let str = text.normalize('NFC').toLowerCase();

  // Map old-style tone mark placement to modern tone mark placement
  const toneMap = {
    'òa': 'oà', 'óa': 'oá', 'ỏa': 'oả', 'õa': 'oã', 'ọa': 'oạ',
    'òe': 'oè', 'óe': 'oé', 'ỏe': 'oẻ', 'õe': 'oẽ', 'ọe': 'oẹ',
    'ùy': 'uỳ', 'úy': 'uý', 'ủy': 'uỷ', 'ũy': 'uỹ', 'ụy': 'uỵ',
    'ùa': 'uà', 'úa': 'uá', 'ủa': 'uả', 'ũa': 'uã', 'ụa': 'uạ',
    'ùe': 'uè', 'úe': 'ué', 'ủe': 'uẻ', 'ũe': 'uẽ', 'ụe': 'uẹ',
    'ùo': 'uò', 'úo': 'uó', 'ủo': 'uỏ', 'ũo': 'uõ', 'ụo': 'uọ'
  };

  for (const [oldTone, newTone] of Object.entries(toneMap)) {
    str = str.replaceAll(oldTone, newTone);
  }

  // Remove multiple spaces and punctuation boundaries
  return str.replace(/\s+/g, ' ').trim();
}

class StudyEngine {
  constructor() {
    this.wordsList = [];
    this.currentIndex = 0;
    this.score = 0;
    this.mode = 'jp_to_vn';
    this.isAnswerRevealed = false;
  }

  startSession(words, mode = 'jp_to_vn') {
    if (!words || words.length === 0) return false;
    
    // Shuffle words
    this.wordsList = [...words].sort(() => Math.random() - 0.5);
    this.currentIndex = 0;
    this.score = 0;
    this.mode = mode;
    this.isAnswerRevealed = false;
    return true;
  }

  getCurrentWord() {
    if (this.currentIndex >= this.wordsList.length) return null;
    return this.wordsList[this.currentIndex];
  }

  getPrompt() {
    const word = this.getCurrentWord();
    if (!word) return null;

    if (this.mode === 'jp_to_vn') {
      return {
        main: word.kanji ? word.kanji : word.hiragana,
        sub: word.kanji ? `Phiên âm: ${word.hiragana}` : 'Dịch câu/từ này sang tiếng Việt 🇻🇳',
        label: 'Đề bài (Tiếng Nhật 🇯🇵)'
      };
    } else {
      return {
        main: word.vietnamese,
        sub: 'Dịch câu/từ này sang tiếng Nhật 🇯🇵 (Hiragana / Katakana)',
        label: 'Đề bài (Tiếng Việt 🇻🇳)'
      };
    }
  }

  getExpectedAnswer() {
    const word = this.getCurrentWord();
    if (!word) return null;

    if (this.mode === 'jp_to_vn') {
      return {
        main: word.vietnamese,
        sub: `Đáp án tiếng Nhật: ${word.hiragana} ${word.kanji ? `(${word.kanji})` : ''}`
      };
    } else {
      return {
        main: word.hiragana,
        sub: word.kanji ? `Kanji: ${word.kanji}` : `Nghĩa: ${word.vietnamese}`
      };
    }
  }

  checkAnswer(userInput) {
    const word = this.getCurrentWord();
    if (!word || !userInput) return false;

    if (this.mode === 'jp_to_vn') {
      const inputClean = normalizeVietnamese(userInput);
      const vnClean = normalizeVietnamese(word.vietnamese);

      // Split multiple acceptable meanings by comma, slash, semicolon, or parentheses
      const meanings = word.vietnamese.split(/[,;/()]/)
        .map(m => normalizeVietnamese(m))
        .filter(m => m.length > 0);

      // Exact normalized match or match within individual meanings
      if (inputClean === vnClean) return true;
      return meanings.some(m => inputClean === m || inputClean.includes(m) || m.includes(inputClean));
    } else {
      // VN -> JP mode
      const inputRaw = userInput.trim().toLowerCase().replace(/\s+/g, '');
      const hiraClean = word.hiragana.trim().toLowerCase().replace(/\s+/g, '');
      const kanjiClean = word.kanji ? word.kanji.trim().toLowerCase().replace(/\s+/g, '') : '';
      
      const inputKana = (typeof wanakana !== 'undefined') ? wanakana.toHiragana(inputRaw).replace(/\s+/g, '') : inputRaw;

      return inputKana === hiraClean || inputRaw === hiraClean || (kanjiClean && (inputKana === kanjiClean || inputRaw === kanjiClean));
    }
  }

  nextWord() {
    this.currentIndex++;
    this.isAnswerRevealed = false;
    return this.currentIndex < this.wordsList.length;
  }

  getProgress() {
    return {
      current: this.currentIndex + 1,
      total: this.wordsList.length,
      percentage: Math.round(((this.currentIndex) / this.wordsList.length) * 100),
      score: this.score
    };
  }
}

const studyEngine = new StudyEngine();
