function stripAccents(str) {
  if (!str) return '';
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

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

  // Standardize tildes: convert ～ (U+FF5E), 〜 (U+301C), … (U+2026), ... (3+ dots) to ASCII ~
  str = str.replace(/[\uFF5E\u301C\u2026]+/g, '~').replace(/\.{3,}/g, '~');

  // Standardize spaces around tildes (e.g. "người ~" or "người~" -> "người ~")
  str = str.replace(/\s*~\s*/g, ' ~ ');

  // Remove multiple spaces and trim
  return str.replace(/\s+/g, ' ').trim();
}

function normalizeJapanese(text) {
  if (!text) return '';
  // 1. Unicode NFC Normalization (crucial for voiced/semi-voiced Kana like べ, ぷ, ば, ぼ, が)
  let str = text.normalize('NFC').trim().toLowerCase();

  // 2. Temporarily convert all non-ASCII tildes (～ U+FF5E, 〜 U+301C, … U+2026, ... 3+ dots) to ASCII ~
  // so WanaKana's Romaji engine can parse any surrounding Romaji (e.g. "～san" -> "~san" -> "〜さん")
  str = str.replace(/[\uFF5E\u301C\u2026]+/g, '~').replace(/\.{3,}/g, '~');

  // 3. Remove all spaces (including full-width Japanese space U+3000)
  str = str.replace(/[\s\u3000]+/g, '');

  // 4. Convert Romaji / Katakana to Hiragana if WanaKana is available
  if (typeof wanakana !== 'undefined') {
    str = wanakana.toHiragana(str);
  }

  // 5. Unify all tildes (~ ASCII U+007E, ～ U+FF5E, 〜 U+301C, … U+2026) to canonical Japanese full-width ～ U+FF5E
  str = str.replace(/[\u007E\uFF5E\u301C\u2026]+/g, '～').replace(/\.{3,}/g, '～');

  return str.normalize('NFC');
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

      const inputNoTilde = inputClean.replace(/~/g, '').replace(/\s+/g, ' ').trim();
      const vnNoTilde = vnClean.replace(/~/g, '').replace(/\s+/g, ' ').trim();

      const inputUnaccented = stripAccents(inputNoTilde);
      const vnUnaccented = stripAccents(vnNoTilde);

      // Exact normalized match (with or without tildes/accents)
      if (
        inputClean === vnClean ||
        (inputNoTilde && inputNoTilde === vnNoTilde) ||
        (inputUnaccented && inputUnaccented === vnUnaccented)
      ) {
        return true;
      }

      // Split multiple acceptable meanings by comma, slash, semicolon, or parentheses
      const rawMeanings = word.vietnamese.split(/[,;/()]/);
      const meaningsClean = rawMeanings
        .map(m => normalizeVietnamese(m))
        .filter(m => m.length > 0);
      const meaningsNoTilde = rawMeanings
        .map(m => normalizeVietnamese(m).replace(/~/g, '').replace(/\s+/g, ' ').trim())
        .filter(m => m.length > 0);
      const meaningsUnaccented = meaningsNoTilde
        .map(m => stripAccents(m));

      return meaningsClean.some((mClean, idx) => {
        const mNoTilde = meaningsNoTilde[idx];
        const mUnaccented = meaningsUnaccented[idx];
        return (
          (mClean && inputClean === mClean) ||
          (mNoTilde && inputNoTilde === mNoTilde) ||
          (mUnaccented && inputUnaccented === mUnaccented) ||
          (inputClean.length >= 2 && mClean.includes(inputClean)) ||
          (mClean.length >= 2 && inputClean.includes(mClean)) ||
          (inputNoTilde.length >= 2 && mNoTilde.includes(inputNoTilde)) ||
          (mNoTilde.length >= 2 && inputNoTilde.includes(mNoTilde)) ||
          (inputUnaccented.length >= 2 && mUnaccented.includes(inputUnaccented)) ||
          (mUnaccented.length >= 2 && mUnaccented.includes(inputUnaccented))
        );
      });
    } else {
      // VN -> JP mode
      const inputClean = normalizeJapanese(userInput);
      if (!inputClean) return false;

      const inputNoTilde = inputClean.replace(/～/g, '');
      const inputNoPunct = inputClean.replace(/[～\uFF1F\u003F\uFF01\u0021\u3002\u002E\u3001\u002C]+/g, '');

      // Extract all acceptable Japanese answers (hiragana & kanji, split by delimiters)
      const rawOptions = [];
      if (word.hiragana) {
        word.hiragana.split(/[/,;\(\)]/).forEach(opt => rawOptions.push(opt));
        rawOptions.push(word.hiragana);
      }
      if (word.kanji) {
        word.kanji.split(/[/,;\(\)]/).forEach(opt => rawOptions.push(opt));
        rawOptions.push(word.kanji);
      }

      // Also compare raw input without wanakana conversion in case of direct Kanji match
      const inputRawClean = userInput.normalize('NFC').trim().toLowerCase().replace(/[\s\u3000]+/g, '');
      const inputRawNoTilde = inputRawClean.replace(/[~～〜…\uFF1F\u003F\uFF01\u0021\u3002\u002E\u3001\u002C]+/g, '');

      return rawOptions.some(opt => {
        if (!opt) return false;
        const optNormalized = normalizeJapanese(opt);
        const optNoTilde = optNormalized.replace(/～/g, '');
        const optNoPunct = optNormalized.replace(/[～\uFF1F\u003F\uFF01\u0021\u3002\u002E\u3001\u002C]+/g, '');

        const optRawClean = opt.normalize('NFC').trim().toLowerCase().replace(/[\s\u3000]+/g, '');
        const optRawNoTilde = optRawClean.replace(/[~～〜…\uFF1F\u003F\uFF01\u0021\u3002\u002E\u3001\u002C]+/g, '');

        return (
          (optNormalized && optNormalized === inputClean) ||
          (optNoTilde && optNoTilde === inputNoTilde) ||
          (optNoPunct && optNoPunct === inputNoPunct) ||
          (optRawClean && optRawClean === inputRawClean) ||
          (optRawNoTilde && optRawNoTilde === inputRawNoTilde)
        );
      });
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
