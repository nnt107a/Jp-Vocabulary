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

    const inputClean = userInput.trim().toLowerCase();

    if (this.mode === 'jp_to_vn') {
      const vnClean = word.vietnamese.trim().toLowerCase();
      // Allow flexible partial match if multiple translations exist
      const meanings = vnClean.split(/[,;/()]/).map(m => m.trim()).filter(m => m.length > 0);
      return meanings.some(m => inputClean.includes(m) || m.includes(inputClean));
    } else {
      // VN -> JP mode
      const rawClean = inputClean.replace(/\s+/g, '');
      const hiraClean = word.hiragana.trim().toLowerCase().replace(/\s+/g, '');
      const kanjiClean = word.kanji ? word.kanji.trim().toLowerCase().replace(/\s+/g, '') : '';
      
      const inputKana = (typeof wanakana !== 'undefined') ? wanakana.toHiragana(inputClean).replace(/\s+/g, '') : rawClean;

      return inputKana === hiraClean || rawClean === hiraClean || (kanjiClean && (inputKana === kanjiClean || rawClean === kanjiClean));
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
