/**
 * JLPT N5 Test Engine & Question Generator
 * Supports Grammar Fill, Sentence Arrangement, Paraphrase, Contextual Vocab, Kanji Reading, Kanji Writing, and Mock Exam.
 */

class JLPTTestEngine {
  constructor() {
    this.mode = 'grammar_fill';
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    this.isAnswerRevealed = false;
    this.timer = null;
    this.timeRemaining = 0; // seconds
  }

  /**
   * Start a JLPT test session
   * @param {string} mode - 'grammar_fill' | 'sentence_arrangement' | 'paraphrase' | 'contextual_vocab' | 'kanji_reading' | 'kanji_writing' | 'mock_test'
   * @param {object} options - { count: 20, timeLimitMinutes: 25 }
   */
  startSession(mode = 'grammar_fill', options = {}) {
    this.mode = mode;
    this.currentIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    this.isAnswerRevealed = false;
    this.questions = [];

    const count = options.count || 20;

    if (mode === 'grammar_fill') {
      this.questions = this._getRandomSubset(JLPT_PRACTICE_DATA.grammar_fill, count).map(q => ({
        type: 'grammar_fill',
        ...q,
        shuffledOptions: this._shuffleOptions(q.options, q.correct)
      }));
    } else if (mode === 'sentence_arrangement') {
      this.questions = this._getRandomSubset(JLPT_PRACTICE_DATA.sentence_arrangement, count).map(q => ({
        type: 'sentence_arrangement',
        ...q
      }));
    } else if (mode === 'paraphrase') {
      this.questions = this._getRandomSubset(JLPT_PRACTICE_DATA.paraphrase, count).map(q => ({
        type: 'paraphrase',
        ...q,
        shuffledOptions: this._shuffleOptions(q.options, q.correct)
      }));
    } else if (mode === 'contextual_vocab') {
      this.questions = this._getRandomSubset(JLPT_PRACTICE_DATA.contextual_vocab, count).map(q => ({
        type: 'contextual_vocab',
        ...q,
        shuffledOptions: this._shuffleOptions(q.options, q.correct)
      }));
    } else if (mode === 'kanji_reading') {
      this.questions = this._generateKanjiReadingQuestions(count);
    } else if (mode === 'kanji_writing') {
      this.questions = this._generateKanjiWritingQuestions(count);
    } else if (mode === 'mock_test') {
      this.questions = this._generateMockExam();
    }

    // Shuffle questions
    this.questions.sort(() => Math.random() - 0.5);

    if (options.timeLimitMinutes) {
      this.timeRemaining = options.timeLimitMinutes * 60;
    } else if (mode === 'mock_test') {
      this.timeRemaining = 25 * 60; // 25 mins for N5 mock test
    } else {
      this.timeRemaining = 0;
    }

    return this.questions.length > 0;
  }

  _getRandomSubset(arr, n) {
    if (!arr || arr.length === 0) return [];
    const copy = [...arr].sort(() => Math.random() - 0.5);
    return copy.slice(0, Math.min(n, copy.length));
  }

  _shuffleOptions(options, correctIndex) {
    const correctVal = options[correctIndex];
    const shuffled = [...options].sort(() => Math.random() - 0.5);
    const newCorrectIndex = shuffled.indexOf(correctVal);
    return {
      options: shuffled,
      correct: newCorrectIndex
    };
  }

  _getAllKanjiWords() {
    const kanjiWords = [];
    if (typeof VOCAB_DATA !== 'undefined' && VOCAB_DATA.N5) {
      VOCAB_DATA.N5.lessons.forEach(lesson => {
        lesson.words.forEach(w => {
          if (w.kanji && w.kanji.trim().length > 0 && w.hiragana && w.hiragana.trim().length > 0) {
            kanjiWords.push(w);
          }
        });
      });
    }
    return kanjiWords;
  }

  _generateKanjiReadingQuestions(count) {
    const words = this._getAllKanjiWords();
    if (words.length === 0) return [];

    const shuffled = [...words].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    return selected.map((w, idx) => {
      // Pick 3 distractors from other words' hiragana
      const distractors = words
        .filter(other => other.hiragana !== w.hiragana)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(other => other.hiragana);

      const opts = [w.hiragana, ...distractors];
      const shuffledOpt = this._shuffleOptions(opts, 0);

      return {
        id: `kr_${idx + 1}`,
        type: 'kanji_reading',
        sentence: `「${w.kanji}」の よみかたは どれですか。 (${w.vietnamese})`,
        targetKanji: w.kanji,
        shuffledOptions: shuffledOpt,
        explanation: `Chữ Hán「${w.kanji}」đọc là「${w.hiragana}」: ${w.vietnamese}`
      };
    });
  }

  _generateKanjiWritingQuestions(count) {
    const words = this._getAllKanjiWords();
    if (words.length === 0) return [];

    const shuffled = [...words].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    return selected.map((w, idx) => {
      // Pick 3 distractors from other words' kanji
      const distractors = words
        .filter(other => other.kanji !== w.kanji)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(other => other.kanji);

      const opts = [w.kanji, ...distractors];
      const shuffledOpt = this._shuffleOptions(opts, 0);

      return {
        id: `kw_${idx + 1}`,
        type: 'kanji_writing',
        sentence: `「${w.hiragana}」の かんじは どれですか。 (${w.vietnamese})`,
        targetHiragana: w.hiragana,
        shuffledOptions: shuffledOpt,
        explanation: `Từ「${w.hiragana}」viết Hán tự là「${w.kanji}」: ${w.vietnamese}`
      };
    });
  }

  _generateMockExam() {
    const grammarSubset = this._getRandomSubset(JLPT_PRACTICE_DATA.grammar_fill, 8).map(q => ({
      type: 'grammar_fill',
      ...q,
      shuffledOptions: this._shuffleOptions(q.options, q.correct)
    }));

    const arrangementSubset = this._getRandomSubset(JLPT_PRACTICE_DATA.sentence_arrangement, 5).map(q => ({
      type: 'sentence_arrangement',
      ...q
    }));

    const paraphraseSubset = this._getRandomSubset(JLPT_PRACTICE_DATA.paraphrase, 4).map(q => ({
      type: 'paraphrase',
      ...q,
      shuffledOptions: this._shuffleOptions(q.options, q.correct)
    }));

    const contextualSubset = this._getRandomSubset(JLPT_PRACTICE_DATA.contextual_vocab, 4).map(q => ({
      type: 'contextual_vocab',
      ...q,
      shuffledOptions: this._shuffleOptions(q.options, q.correct)
    }));

    const kanjiReadSubset = this._generateKanjiReadingQuestions(5);
    const kanjiWriteSubset = this._generateKanjiWritingQuestions(4);

    return [
      ...kanjiReadSubset,
      ...kanjiWriteSubset,
      ...contextualSubset,
      ...paraphraseSubset,
      ...grammarSubset,
      ...arrangementSubset
    ];
  }

  getCurrentQuestion() {
    if (this.currentIndex >= this.questions.length) return null;
    return this.questions[this.currentIndex];
  }

  /**
   * Submit an answer for the current question
   * @param {any} answer - For multiple choice: option index; for sentence arrangement: array of segment indices [2, 0, 1, 3] or star answer
   */
  checkAnswer(userAnswer) {
    const q = this.getCurrentQuestion();
    if (!q) return { isCorrect: false };

    let isCorrect = false;
    let details = {};

    if (q.type === 'sentence_arrangement') {
      // In sentence arrangement, userAnswer is an array of segment indices, e.g. [3, 0, 2, 1]
      // Or it's the index of the segment placed at star position
      if (Array.isArray(userAnswer)) {
        const correctOrder = q.correct_order;
        isCorrect = (JSON.stringify(userAnswer) === JSON.stringify(correctOrder));
        // Check if at least star position is correct
        const starIdx = q.star_index;
        const isStarCorrect = (userAnswer[starIdx] === correctOrder[starIdx]);
        details = {
          userOrder: userAnswer,
          correctOrder: correctOrder,
          isStarCorrect: isStarCorrect
        };
      }
    } else {
      // Multiple choice (grammar_fill, paraphrase, contextual_vocab, kanji_reading, kanji_writing)
      const correctOptIndex = q.shuffledOptions.correct;
      isCorrect = (parseInt(userAnswer) === correctOptIndex);
      details = {
        chosenIndex: parseInt(userAnswer),
        correctIndex: correctOptIndex,
        correctText: q.shuffledOptions.options[correctOptIndex]
      };
    }

    if (!this.isAnswerRevealed) {
      if (isCorrect) {
        this.score++;
      }
      this.userAnswers.push({
        questionId: q.id,
        type: q.type,
        isCorrect: isCorrect,
        userAnswer: userAnswer,
        details: details
      });
      this.isAnswerRevealed = true;
    }

    return {
      isCorrect: isCorrect,
      explanation: q.explanation,
      details: details,
      score: this.score,
      total: this.questions.length
    };
  }

  nextQuestion() {
    this.currentIndex++;
    this.isAnswerRevealed = false;
    return this.currentIndex < this.questions.length;
  }

  getProgress() {
    return {
      current: this.currentIndex + 1,
      total: this.questions.length,
      percentage: Math.round(((this.currentIndex) / this.questions.length) * 100),
      score: this.score
    };
  }

  getResults() {
    const total = this.questions.length;
    const percentage = total > 0 ? Math.round((this.score / total) * 100) : 0;
    let rank = "C";
    let message = "Cần cố gắng thêm!";

    if (percentage >= 90) {
      rank = "S";
      message = "Xuất sắc! Bạn đã sẵn sàng 100% cho kỳ thi JLPT N5!";
    } else if (percentage >= 80) {
      rank = "A";
      message = "Rất tốt! Kiến thức N5 của bạn rất vững chắc!";
    } else if (percentage >= 60) {
      rank = "B";
      message = "Đạt chuẩn đỗ N5! Hãy ôn thêm một chút để tự tin tuyệt đối!";
    } else {
      rank = "C";
      message = "Hãy tiếp tục luyện tập các phần còn yếu nhé!";
    }

    return {
      score: this.score,
      total: total,
      percentage: percentage,
      rank: rank,
      message: message,
      mode: this.mode,
      details: this.userAnswers
    };
  }
}
