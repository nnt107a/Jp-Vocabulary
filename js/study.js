// Speech Synthesis / Text-to-Speech (TTS) Helper
function speakJapanese(text) {
  if (!('speechSynthesis' in window) || !text) return;

  try {
    window.speechSynthesis.cancel();

    const cleanText = text.replace(/～/g, '').trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const jpVoice = voices.find(v => v && (v.lang === 'ja-JP' || v.lang === 'ja_JP' || (v.lang && v.lang.startsWith('ja'))));
    if (jpVoice) {
      utterance.voice = jpVoice;
    }

    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.warn('TTS playback error:', e);
  }
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

function normalizeVietnamese(text) {
  if (!text) return '';
  let str = text.normalize('NFC').toLowerCase();

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

  return str.replace(/\s+/g, ' ').trim();
}

function normalizeJapanese(text) {
  if (!text) return '';
  let str = text.normalize('NFC').trim().toLowerCase();
  str = str.replace(/[\s\u3000]+/g, '');
  if (typeof wanakana !== 'undefined') {
    str = wanakana.toHiragana(str);
  }
  return str.normalize('NFC');
}

class StudyEngine {
  constructor() {
    this.wordsList = []; // Array of { word, lessonId }
    this.currentIndex = 0;
    this.score = 0;
    this.mode = 'new_lesson_pipeline';
    this.isAnswerRevealed = false;

    // Pipeline Batch Config (7 words per batch)
    this.batchSize = 7;
    this.batches = [];
    this.currentBatchIdx = 0;
    this.pipelineStep = 1; // 1: Preview, 2: Multiple Choice, 3: Typing, 4: Batch Graduation
    this.batchWordIdx = 0;
  }

  startSession(wordsWithMeta, mode = 'new_lesson_pipeline') {
    if (!wordsWithMeta || wordsWithMeta.length === 0) return false;

    this.wordsList = wordsWithMeta.map(item => {
      // Normalize to object with word & lessonId
      if (item.word) return item;
      return { word: item, lessonId: item.lessonId || 'general' };
    });

    this.currentIndex = 0;
    this.score = 0;
    this.mode = mode;
    this.isAnswerRevealed = false;

    if (mode === 'new_lesson_pipeline') {
      this.batches = [];
      for (let i = 0; i < this.wordsList.length; i += this.batchSize) {
        this.batches.push(this.wordsList.slice(i, i + this.batchSize));
      }
      this.currentBatchIdx = 0;
      this.pipelineStep = 1;
      this.batchWordIdx = 0;
    } else {
      // Free practice / SRS mode: shuffle list
      this.wordsList.sort(() => Math.random() - 0.5);
    }

    return true;
  }

  getCurrentBatch() {
    if (this.mode !== 'new_lesson_pipeline') return this.wordsList;
    return this.batches[this.currentBatchIdx] || [];
  }

  getCurrentWordItem() {
    if (this.mode === 'new_lesson_pipeline') {
      const batch = this.getCurrentBatch();
      return batch[this.batchWordIdx] || null;
    }
    if (this.currentIndex >= this.wordsList.length) return null;
    return this.wordsList[this.currentIndex];
  }

  getCurrentWord() {
    const item = this.getCurrentWordItem();
    return item ? item.word : null;
  }

  getCurrentLessonId() {
    const item = this.getCurrentWordItem();
    return item ? item.lessonId : 'general';
  }

  getPrompt() {
    const word = this.getCurrentWord();
    if (!word) return null;

    let isJpPrompt = true;

    if (this.mode === 'new_lesson_pipeline') {
      if (this.pipelineStep === 1) {
        isJpPrompt = true;
      } else if (this.pipelineStep === 2) {
        isJpPrompt = true; // Multiple Choice default: JP -> VN
      } else {
        isJpPrompt = false; // Step 3 Typing: VN -> JP
      }
    } else if (this.mode === 'vn_to_jp' || this.mode === 'mc_vn_to_jp') {
      isJpPrompt = false;
    } else {
      isJpPrompt = true;
    }

    if (isJpPrompt) {
      return {
        main: word.kanji ? word.kanji : word.hiragana,
        sub: word.kanji ? `Phiên âm: ${word.hiragana}` : 'Dịch câu/từ này sang tiếng Việt 🇻🇳',
        label: 'Đề bài (Tiếng Nhật 🇯🇵)',
        isJpPrompt: true
      };
    } else {
      return {
        main: word.vietnamese,
        sub: 'Dịch câu/từ này sang tiếng Nhật 🇯🇵 (Hiragana / Katakana)',
        label: 'Đề bài (Tiếng Việt 🇻🇳)',
        isJpPrompt: false
      };
    }
  }

  getExpectedAnswer() {
    const word = this.getCurrentWord();
    if (!word) return null;

    let isJpPrompt = true;
    if (this.mode === 'new_lesson_pipeline') {
      isJpPrompt = (this.pipelineStep !== 3);
    } else if (this.mode === 'vn_to_jp' || this.mode === 'mc_vn_to_jp') {
      isJpPrompt = false;
    }

    if (isJpPrompt) {
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

  // Generate 4 options for Multiple Choice mode
  getMultipleChoiceOptions(allGlobalWords = []) {
    const word = this.getCurrentWord();
    if (!word) return [];

    let isJpPrompt = true;
    if (this.mode === 'mc_vn_to_jp') {
      isJpPrompt = false;
    }

    const correctAnswer = isJpPrompt ? word.vietnamese : (word.hiragana + (word.kanji ? ` (${word.kanji})` : ''));

    // Distractor pool
    let pool = [];
    if (allGlobalWords && allGlobalWords.length > 3) {
      pool = allGlobalWords;
    } else {
      pool = this.wordsList.map(item => item.word);
    }

    const distractors = [];
    const usedTexts = new Set([correctAnswer.toLowerCase()]);

    const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
    for (const item of shuffledPool) {
      const w = item.word || item;
      if (!w) continue;
      const text = isJpPrompt ? w.vietnamese : (w.hiragana + (w.kanji ? ` (${w.kanji})` : ''));
      if (text && !usedTexts.has(text.toLowerCase())) {
        distractors.push(text);
        usedTexts.add(text.toLowerCase());
        if (distractors.length >= 3) break;
      }
    }

    // Fallback distractors if pool was small
    while (distractors.length < 3) {
      distractors.push(`Lựa chọn ${distractors.length + 1}`);
    }

    const options = [
      { text: correctAnswer, isCorrect: true },
      ...distractors.map(d => ({ text: d, isCorrect: false }))
    ];

    return options.sort(() => Math.random() - 0.5);
  }

  checkAnswer(userInput) {
    const word = this.getCurrentWord();
    const lessonId = this.getCurrentLessonId();
    if (!word || !userInput) return false;

    let isJpPrompt = true;
    if (this.mode === 'new_lesson_pipeline') {
      isJpPrompt = (this.pipelineStep !== 3);
    } else if (this.mode === 'vn_to_jp' || this.mode === 'mc_vn_to_jp') {
      isJpPrompt = false;
    }

    let isCorrect = false;

    if (isJpPrompt) {
      const inputClean = normalizeVietnamese(userInput);
      const vnClean = normalizeVietnamese(word.vietnamese);
      const meanings = word.vietnamese.split(/[,;/()]/)
        .map(m => normalizeVietnamese(m))
        .filter(m => m.length > 0);

      if (inputClean === vnClean) {
        isCorrect = true;
      } else {
        isCorrect = meanings.some(m => inputClean === m || inputClean.includes(m) || m.includes(inputClean));
      }
    } else {
      // VN -> JP mode
      const inputClean = normalizeJapanese(userInput);
      if (inputClean) {
        const rawOptions = [];
        if (word.hiragana) {
          word.hiragana.split(/[/,;\(\)]/).forEach(opt => rawOptions.push(opt));
          rawOptions.push(word.hiragana);
        }
        if (word.kanji) {
          word.kanji.split(/[/,;\(\)]/).forEach(opt => rawOptions.push(opt));
          rawOptions.push(word.kanji);
        }

        const inputRawClean = userInput.normalize('NFC').trim().toLowerCase().replace(/[\s\u3000]+/g, '');

        isCorrect = rawOptions.some(opt => {
          const optNormalized = normalizeJapanese(opt);
          const optRawClean = opt.normalize('NFC').trim().toLowerCase().replace(/[\s\u3000]+/g, '');
          return (optNormalized && optNormalized === inputClean) || (optRawClean && optRawClean === inputRawClean);
        });
      }
    }

    // Record SRS review if in SRS mode or free practice
    if (this.mode === 'srs_review' || this.mode === 'weak_words') {
      if (typeof srsEngine !== 'undefined') {
        srsEngine.recordReview(word, lessonId, isCorrect);
      }
    }

    if (isCorrect) this.score++;
    return isCorrect;
  }

  nextWord() {
    this.isAnswerRevealed = false;

    if (this.mode === 'new_lesson_pipeline') {
      const currentBatch = this.getCurrentBatch();
      this.batchWordIdx++;

      if (this.batchWordIdx >= currentBatch.length) {
        // End of current step in this batch!
        this.batchWordIdx = 0;
        this.pipelineStep++;

        if (this.pipelineStep === 4) {
          // Batch Graduation! Mark all words in this batch as graduated in SRS
          if (typeof srsEngine !== 'undefined') {
            currentBatch.forEach(item => {
              srsEngine.markGraduated(item.word, item.lessonId);
            });
          }
        }

        if (this.pipelineStep > 4) {
          // Move to next batch
          this.currentBatchIdx++;
          this.pipelineStep = 1;
          this.batchWordIdx = 0;
          if (this.currentBatchIdx >= this.batches.length) {
            return false; // All batches completed!
          }
        }
      }
      return true;
    }

    this.currentIndex++;
    return this.currentIndex < this.wordsList.length;
  }

  getProgress() {
    if (this.mode === 'new_lesson_pipeline') {
      const totalWords = this.wordsList.length;
      const completedWords = (this.currentBatchIdx * this.batchSize) + (this.pipelineStep === 4 ? this.batchSize : this.batchWordIdx);
      const percentage = Math.min(100, Math.round((completedWords / totalWords) * 100));

      const batchCount = this.batches.length;
      const stepNames = {
        1: 'Bước 1: Khám phá & Phát âm',
        2: 'Bước 2: Trắc nghiệm nhận biết',
        3: 'Bước 3: Gõ từ phản xạ',
        4: 'Bước 4: 🎉 Tốt nghiệp cụm từ'
      };

      return {
        current: Math.min(completedWords + 1, totalWords),
        total: totalWords,
        percentage,
        score: this.score,
        batchText: `Cụm ${this.currentBatchIdx + 1}/${batchCount}`,
        stageText: stepNames[this.pipelineStep] || '',
        pipelineStep: this.pipelineStep,
        isBatchGraduated: (this.pipelineStep === 4)
      };
    }

    return {
      current: this.currentIndex + 1,
      total: this.wordsList.length,
      percentage: Math.round(((this.currentIndex) / this.wordsList.length) * 100),
      score: this.score,
      stageText: this.mode === 'srs_review' ? '🔥 Ôn tập Spaced Repetition' : (this.mode === 'weak_words' ? '⚠️ Tu luyện từ yếu' : '')
    };
  }
}

const studyEngine = new StudyEngine();
