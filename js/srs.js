// Spaced Repetition System (SRS) & Mastered Vocab Engine
class SRSEngine {
  constructor() {
    this.storageKey = 'jpapp_srs_data';
    this.data = this.loadData();
  }

  loadData() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.error('Failed to load SRS data from localStorage:', e);
    }
    return { cards: {} };
  }

  saveData() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    } catch (e) {
      console.error('Failed to save SRS data:', e);
    }
  }

  getCardId(wordObj, lessonId) {
    if (!wordObj) return null;
    const cleanHiragana = wordObj.hiragana ? wordObj.hiragana.trim() : '';
    const cleanKanji = wordObj.kanji ? wordObj.kanji.trim() : '';
    const cleanVn = wordObj.vietnamese ? wordObj.vietnamese.trim() : '';
    return `${lessonId || 'general'}_${cleanKanji}_${cleanHiragana}_${cleanVn}`.replace(/\s+/g, '_');
  }

  getCardState(wordObj, lessonId) {
    const cardId = this.getCardId(wordObj, lessonId);
    if (!cardId || !this.data.cards[cardId]) {
      return {
        cardId,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        dueDate: null,
        lastReviewed: null,
        mistakeCount: 0,
        totalReviews: 0,
        graduated: false
      };
    }
    return this.data.cards[cardId];
  }

  markGraduated(wordObj, lessonId) {
    const cardId = this.getCardId(wordObj, lessonId);
    if (!cardId) return;

    const existing = this.getCardState(wordObj, lessonId);
    const now = Date.now();
    
    // Set initial SRS interval = 1 day upon graduation from new lesson
    this.data.cards[cardId] = {
      ...existing,
      cardId,
      lessonId: lessonId || 'custom',
      hiragana: wordObj.hiragana,
      kanji: wordObj.kanji,
      vietnamese: wordObj.vietnamese,
      graduated: true,
      repetition: Math.max(existing.repetition || 1, 1),
      interval: existing.interval || 1,
      dueDate: existing.dueDate || (now + 24 * 60 * 60 * 1000), // Due in 1 day
      lastReviewed: now
    };

    this.saveData();
  }

  recordReview(wordObj, lessonId, isCorrect) {
    const cardId = this.getCardId(wordObj, lessonId);
    if (!cardId) return;

    const state = this.getCardState(wordObj, lessonId);
    const now = Date.now();

    let repetition = state.repetition || 0;
    let interval = state.interval || 1;
    let easeFactor = state.easeFactor || 2.5;
    let mistakeCount = state.mistakeCount || 0;
    let totalReviews = (state.totalReviews || 0) + 1;

    if (isCorrect) {
      if (repetition === 0) {
        interval = 1;
      } else if (repetition === 1) {
        interval = 3;
      } else {
        interval = Math.round(interval * easeFactor);
      }
      repetition += 1;
    } else {
      repetition = 0;
      interval = 1;
      easeFactor = Math.max(1.3, easeFactor - 0.2);
      mistakeCount += 1;
    }

    // Calculate next due date (in ms)
    const dueDate = now + (interval * 24 * 60 * 60 * 1000);

    this.data.cards[cardId] = {
      cardId,
      lessonId: lessonId || 'custom',
      hiragana: wordObj.hiragana,
      kanji: wordObj.kanji,
      vietnamese: wordObj.vietnamese,
      graduated: true,
      repetition,
      interval,
      easeFactor,
      dueDate,
      lastReviewed: now,
      mistakeCount,
      totalReviews
    };

    this.saveData();
    return this.data.cards[cardId];
  }

  isDue(wordObj, lessonId) {
    const state = this.getCardState(wordObj, lessonId);
    if (!state.graduated || !state.dueDate) return false;
    return Date.now() >= state.dueDate;
  }

  getDueCards(allWordsWithMetadata) {
    const now = Date.now();
    return allWordsWithMetadata.filter(item => {
      const state = this.getCardState(item.word, item.lessonId);
      return state.graduated && state.dueDate && now >= state.dueDate;
    });
  }

  getWeakCards(allWordsWithMetadata) {
    return allWordsWithMetadata.filter(item => {
      const state = this.getCardState(item.word, item.lessonId);
      return state.mistakeCount >= 2 || (state.totalReviews > 2 && (state.mistakeCount / state.totalReviews) > 0.3);
    });
  }

  getOverallStats() {
    let totalGraduated = 0;
    let dueTodayCount = 0;
    let weakCount = 0;
    const now = Date.now();

    Object.values(this.data.cards).forEach(card => {
      if (card.graduated) {
        totalGraduated++;
        if (card.dueDate && now >= card.dueDate) {
          dueTodayCount++;
        }
        if (card.mistakeCount >= 2) {
          weakCount++;
        }
      }
    });

    return {
      totalGraduated,
      dueTodayCount,
      weakCount
    };
  }
}

const srsEngine = new SRSEngine();
