/**
 * Japanese Grammar Study Engine (Trợ từ & Nghi vấn từ)
 * Supports Particle Fill, Interrogative Fill, Sentence Translation, Error Correction, and Mixed Grammar Mock Exam.
 */

class GrammarStudyEngine {
  constructor() {
    this.mode = 'grammar_particle_fill';
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    this.isAnswerRevealed = false;
    this.timer = null;
    this.timeRemaining = 0;
    this.categoryStats = {};
  }

  /**
   * Start a Grammar practice or test session
   * @param {string} mode - 'grammar_particle_fill' | 'grammar_interrogative_fill' | 'grammar_sentence_translate' | 'grammar_error_correction' | 'grammar_mixed_test'
   * @param {object} options - { count: 20, timeLimitMinutes: null }
   */
  startSession(mode = 'grammar_particle_fill', options = {}) {
    this.mode = mode;
    this.currentIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    this.isAnswerRevealed = false;
    this.questions = [];
    this.categoryStats = {
      particle_fill: { correct: 0, total: 0 },
      interrogative_fill: { correct: 0, total: 0 },
      sentence_translation: { correct: 0, total: 0 },
      error_correction: { correct: 0, total: 0 }
    };

    const count = options.count || 20;

    if (mode === 'grammar_particle_fill') {
      this.questions = this._getRandomSubset(GRAMMAR_DATA.exercises.particle_fill, count).map(q => ({
        type: 'particle_fill',
        ...q,
        shuffled: this._shuffleOptions(q.options, q.correct)
      }));
    } else if (mode === 'grammar_interrogative_fill') {
      this.questions = this._getRandomSubset(GRAMMAR_DATA.exercises.interrogative_fill, count).map(q => ({
        type: 'interrogative_fill',
        ...q,
        shuffled: this._shuffleOptions(q.options, q.correct)
      }));
    } else if (mode === 'grammar_sentence_translate') {
      this.questions = this._getRandomSubset(GRAMMAR_DATA.exercises.sentence_translation, count).map(q => ({
        type: 'sentence_translation',
        ...q,
        shuffled: this._shuffleOptions(q.options, q.correct)
      }));
    } else if (mode === 'grammar_error_correction') {
      this.questions = this._generateErrorCorrectionQuestions(count);
    } else if (mode === 'grammar_mixed_test') {
      this.questions = this._generateMixedGrammarTest(count);
    }

    // Shuffle questions
    this.questions.sort(() => Math.random() - 0.5);

    if (options.timeLimitMinutes) {
      this.timeRemaining = options.timeLimitMinutes * 60;
    } else if (mode === 'grammar_mixed_test') {
      this.timeRemaining = 20 * 60; // 20 mins for mixed grammar test
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
    const originalCorrectText = options[correctIndex];
    const items = options.map((opt, idx) => ({ text: opt, isCorrect: idx === correctIndex }));
    items.sort(() => Math.random() - 0.5);

    const newOptions = items.map(item => item.text);
    const newCorrect = items.findIndex(item => item.isCorrect);

    return {
      options: newOptions,
      correctIndex: newCorrect,
      originalCorrectText: originalCorrectText
    };
  }

  _generateErrorCorrectionQuestions(count) {
    const rawList = this._getRandomSubset(GRAMMAR_DATA.exercises.error_correction, count);
    return rawList.map(q => {
      // Build 4 multiple choice options from common particles
      const allParticles = ["は", "が", "を", "に", "へ", "で", "と", "も", "から", "まで"];
      const correctParticle = q.correctParticle || "Không có lỗi (Chính xác)";
      const wrongParticle = q.wrongParticle || "";

      let distractorCandidates = allParticles.filter(p => p !== correctParticle && p !== wrongParticle);
      distractorCandidates.sort(() => Math.random() - 0.5);

      const options = [correctParticle];
      if (wrongParticle && wrongParticle !== correctParticle) {
        options.push(wrongParticle);
      }
      while (options.length < 4 && distractorCandidates.length > 0) {
        const nextDist = distractorCandidates.pop();
        if (!options.includes(nextDist)) options.push(nextDist);
      }

      return {
        type: 'error_correction',
        ...q,
        shuffled: this._shuffleOptions(options, 0)
      };
    });
  }

  _generateMixedGrammarTest(totalCount) {
    const perCategory = Math.max(3, Math.floor(totalCount / 4));
    
    const pf = this._getRandomSubset(GRAMMAR_DATA.exercises.particle_fill, perCategory).map(q => ({
      type: 'particle_fill',
      ...q,
      shuffled: this._shuffleOptions(q.options, q.correct)
    }));

    const ifItems = this._getRandomSubset(GRAMMAR_DATA.exercises.interrogative_fill, perCategory).map(q => ({
      type: 'interrogative_fill',
      ...q,
      shuffled: this._shuffleOptions(q.options, q.correct)
    }));

    const st = this._getRandomSubset(GRAMMAR_DATA.exercises.sentence_translation, perCategory).map(q => ({
      type: 'sentence_translation',
      ...q,
      shuffled: this._shuffleOptions(q.options, q.correct)
    }));

    const ec = this._generateErrorCorrectionQuestions(perCategory);

    const merged = [...pf, ...ifItems, ...st, ...ec];
    merged.sort(() => Math.random() - 0.5);
    return merged.slice(0, totalCount);
  }

  getCurrentQuestion() {
    if (this.currentIndex >= this.questions.length) return null;
    return this.questions[this.currentIndex];
  }

  submitAnswer(selectedOptionIndex) {
    const q = this.getCurrentQuestion();
    if (!q) return null;

    let isCorrect = false;
    let correctAnswerDisplay = '';

    if (q.shuffled) {
      isCorrect = (selectedOptionIndex === q.shuffled.correctIndex);
      correctAnswerDisplay = q.shuffled.options[q.shuffled.correctIndex];
    }

    if (isCorrect) {
      this.score++;
    }

    // Record category stats
    if (this.categoryStats[q.type]) {
      this.categoryStats[q.type].total++;
      if (isCorrect) this.categoryStats[q.type].correct++;
    }

    const answerRecord = {
      questionIndex: this.currentIndex,
      question: q,
      selectedOptionIndex,
      selectedText: q.shuffled ? q.shuffled.options[selectedOptionIndex] : '',
      isCorrect,
      correctAnswerDisplay,
      explanation: q.explanation || ''
    };

    this.userAnswers.push(answerRecord);
    this.isAnswerRevealed = true;

    return answerRecord;
  }

  nextQuestion() {
    this.isAnswerRevealed = false;
    this.currentIndex++;
    return this.getCurrentQuestion();
  }

  isFinished() {
    return this.currentIndex >= this.questions.length;
  }

  getProgress() {
    return {
      current: this.currentIndex + 1,
      total: this.questions.length,
      percentage: Math.round(((this.currentIndex) / this.questions.length) * 100),
      score: this.score
    };
  }

  getSummary() {
    const total = this.questions.length;
    const correct = this.score;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    let grade = 'C';
    let feedback = 'Cần ôn tập kỹ thêm các trợ từ và nghi vấn từ căn bản!';
    let badgeColor = '#ef4444';

    if (percentage >= 90) {
      grade = 'S';
      feedback = 'Xuất sắc! Bạn đã nắm vững toàn bộ hệ thống Trợ từ & Nghi vấn từ!';
      badgeColor = '#eab308';
    } else if (percentage >= 80) {
      grade = 'A';
      feedback = 'Rất tốt! Bạn hiểu rất chắc cách phân biệt các trợ từ và nghi vấn từ.';
      badgeColor = '#10b981';
    } else if (percentage >= 65) {
      grade = 'B';
      feedback = 'Khá tốt! Hãy chú ý hơn các trợ từ hay nhầm như に / で và は / が.';
      badgeColor = '#3b82f6';
    }

    return {
      total,
      correct,
      incorrect: total - correct,
      percentage,
      grade,
      feedback,
      badgeColor,
      categoryStats: this.categoryStats,
      userAnswers: this.userAnswers
    };
  }
}

// Global instance
const grammarEngine = new GrammarStudyEngine();
