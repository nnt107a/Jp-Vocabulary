// Main Application Logic

let currentLevel = 'N5';

// Stores selected word indices per lesson: { [lessonId]: Set<number> }
let selectedWordsMap = {};

let activeLessonForModal = null; // Stores lesson object being inspected/edited

// Load custom words & overrides from localStorage
let customWords = JSON.parse(localStorage.getItem('jpapp_custom_words') || '[]');
let vocabOverrides = JSON.parse(localStorage.getItem('jpapp_vocab_overrides') || '{}');

// Merge overrides into VOCAB_DATA on load
applyVocabOverrides();

function applyVocabOverrides() {
  Object.keys(vocabOverrides).forEach(levelKey => {
    if (VOCAB_DATA[levelKey]) {
      vocabOverrides[levelKey].forEach(overriddenLesson => {
        const targetLesson = VOCAB_DATA[levelKey].lessons.find(l => l.id === overriddenLesson.id);
        if (targetLesson) {
          targetLesson.words = overriddenLesson.words;
        } else {
          VOCAB_DATA[levelKey].lessons.push(overriddenLesson);
        }
      });
    }
  });

  // Ensure N5 Kanji fields are cleared for pure Hiragana / Katakana
  if (VOCAB_DATA.N5) {
    VOCAB_DATA.N5.lessons.forEach(lesson => {
      lesson.words.forEach(word => {
        word.kanji = "";
      });
    });
  }
}

function saveVocabOverrides() {
  localStorage.setItem('jpapp_vocab_overrides', JSON.stringify(vocabOverrides));
}

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  renderLevelTabs();
  renderLessons();
  setupEventListeners();
}

/* Lesson Selection Status Helpers */
function getLessonSelectionStatus(lesson) {
  if (!lesson || !lesson.words || lesson.words.length === 0) return 'none';
  
  const selectedSet = selectedWordsMap[lesson.id];
  if (!selectedSet || selectedSet.size === 0) return 'none';
  if (selectedSet.size >= lesson.words.length) return 'full';
  return 'partial';
}

function toggleLessonSelection(lesson) {
  if (!lesson || !lesson.words) return;
  const status = getLessonSelectionStatus(lesson);
  
  if (!selectedWordsMap[lesson.id]) {
    selectedWordsMap[lesson.id] = new Set();
  }

  if (status === 'full') {
    // Deselect all
    selectedWordsMap[lesson.id].clear();
  } else {
    // Select all words in this lesson
    lesson.words.forEach((_, idx) => selectedWordsMap[lesson.id].add(idx));
  }
}

function toggleWordSelection(lessonId, wordIdx) {
  if (!selectedWordsMap[lessonId]) {
    selectedWordsMap[lessonId] = new Set();
  }
  if (selectedWordsMap[lessonId].has(wordIdx)) {
    selectedWordsMap[lessonId].delete(wordIdx);
  } else {
    selectedWordsMap[lessonId].add(wordIdx);
  }
}

/* Renderers */
function renderLevelTabs() {
  const levelTabsContainer = document.getElementById('level-tabs');
  if (!levelTabsContainer) return;

  const levels = ['N5', 'N4', 'N3', 'N2', 'N1', 'CUSTOM'];
  levelTabsContainer.innerHTML = levels.map(lvl => {
    const label = lvl === 'CUSTOM' ? 'Từ của tôi ⭐' : lvl;
    return `
      <button class="level-tab-btn ${lvl === currentLevel ? 'active' : ''}" data-level="${lvl}">
        ${label}
      </button>
    `;
  }).join('');
}

function renderLessons() {
  const container = document.getElementById('lessons-grid');
  if (!container) return;

  if (currentLevel === 'CUSTOM') {
    renderCustomWordsView(container);
    return;
  }

  const levelData = VOCAB_DATA[currentLevel];
  if (!levelData || !levelData.lessons) {
    container.innerHTML = `<p class="text-muted">Không có dữ liệu bài học cho trình độ này.</p>`;
    return;
  }

  container.innerHTML = levelData.lessons.map(lesson => {
    const status = getLessonSelectionStatus(lesson);
    const selectedCount = selectedWordsMap[lesson.id] ? selectedWordsMap[lesson.id].size : 0;
    
    let cardClass = 'lesson-card';
    let statusText = 'Chọn bài này';
    if (status === 'full') {
      cardClass += ' selected';
      statusText = 'Đã chọn tất cả';
    } else if (status === 'partial') {
      cardClass += ' partial';
      statusText = `Đã chọn ${selectedCount}/${lesson.words.length}`;
    }

    return `
      <div class="${cardClass}" data-id="${lesson.id}">
        <div class="card-header">
          <div class="lesson-title">${lesson.title}</div>
          <span class="word-count-badge">${selectedCount > 0 && status !== 'full' ? `${selectedCount}/` : ''}${lesson.words.length} từ</span>
        </div>
        <div class="lesson-description">${lesson.description}</div>
        
        <div class="card-actions-row">
          <button class="btn btn-secondary btn-icon view-words-btn" data-id="${lesson.id}">
            👁️ Xem & Chọn từ
          </button>
          <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; color: var(--text-muted);">
            <span>${statusText}</span>
            <div class="checkbox-custom"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateSelectedCount();
}

function renderCustomWordsView(container) {
  let customHtml = `
    <div style="grid-column: 1 / -1; width: 100%;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <h3>Danh sách từ vựng tự thêm (${customWords.length} từ)</h3>
        <button class="btn btn-primary" id="open-add-word-modal">+ Thêm từ mới</button>
      </div>
  `;

  if (customWords.length === 0) {
    customHtml += `
      <div style="text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--glass-border);">
        <p style="color: var(--text-muted); margin-bottom: 1rem;">Bạn chưa thêm từ vựng tự tạo nào.</p>
        <button class="btn btn-primary" id="open-add-word-modal-empty">+ Thêm từ ngay</button>
      </div>
    `;
  } else {
    customHtml += `
      <table class="custom-words-table">
        <thead>
          <tr>
            <th>Kanji</th>
            <th>Hiragana / Katakana</th>
            <th>Nghĩa Tiếng Việt</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          ${customWords.map((w, index) => `
            <tr>
              <td class="jp-text">${w.kanji || '—'}</td>
              <td class="jp-text">${w.hiragana}</td>
              <td>${w.vietnamese}</td>
              <td>
                <button class="btn btn-danger btn-sm delete-word-btn" data-index="${index}">Xóa</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  customHtml += `</div>`;
  container.innerHTML = customHtml;

  // Auto select custom words if not set
  if (!selectedWordsMap['custom_lesson']) {
    selectedWordsMap['custom_lesson'] = new Set(customWords.map((_, i) => i));
  }
}

function updateSelectedCount() {
  const countSpan = document.getElementById('selected-count');
  if (!countSpan) return;

  let totalWords = 0;
  let selectedLessonsCount = 0;

  if (currentLevel === 'CUSTOM') {
    totalWords = customWords.length;
    selectedLessonsCount = customWords.length > 0 ? 1 : 0;
  } else {
    const levelData = VOCAB_DATA[currentLevel];
    if (levelData) {
      levelData.lessons.forEach(l => {
        const set = selectedWordsMap[l.id];
        if (set && set.size > 0) {
          selectedLessonsCount++;
          totalWords += set.size;
        }
      });
    }
  }

  countSpan.textContent = `Đã chọn: ${selectedLessonsCount} bài (${totalWords} từ)`;
}

/* Event Listeners */
function setupEventListeners() {
  // Level Tab Clicks
  document.getElementById('level-tabs').addEventListener('click', (e) => {
    const btn = e.target.closest('.level-tab-btn');
    if (!btn) return;
    currentLevel = btn.dataset.level;
    renderLevelTabs();
    renderLessons();
  });

  // Lesson Grid interactions
  document.getElementById('lessons-grid').addEventListener('click', (e) => {
    // Check if "Xem & Chọn từ" button clicked
    const viewBtn = e.target.closest('.view-words-btn');
    if (viewBtn) {
      e.stopPropagation();
      const lessonId = viewBtn.dataset.id;
      openLessonWordsModal(lessonId);
      return;
    }

    // Toggle card selection
    const card = e.target.closest('.lesson-card');
    if (card) {
      const lessonId = card.dataset.id;
      const levelData = VOCAB_DATA[currentLevel];
      if (levelData) {
        const lesson = levelData.lessons.find(l => l.id === lessonId);
        if (lesson) {
          toggleLessonSelection(lesson);
          renderLessons();
        }
      }
      return;
    }

    // Modal buttons inside custom view
    if (e.target.id === 'open-add-word-modal' || e.target.id === 'open-add-word-modal-empty') {
      openAddWordModal(null);
    }

    // Delete custom word
    if (e.target.classList.contains('delete-word-btn')) {
      const idx = parseInt(e.target.dataset.index);
      customWords.splice(idx, 1);
      localStorage.setItem('jpapp_custom_words', JSON.stringify(customWords));
      renderLessons();
    }
  });

  // Select All / Deselect All
  document.getElementById('btn-select-all')?.addEventListener('click', () => {
    if (currentLevel === 'CUSTOM') return;
    const levelData = VOCAB_DATA[currentLevel];
    if (levelData) {
      levelData.lessons.forEach(l => {
        if (!selectedWordsMap[l.id]) selectedWordsMap[l.id] = new Set();
        l.words.forEach((_, idx) => selectedWordsMap[l.id].add(idx));
      });
      renderLessons();
    }
  });

  document.getElementById('btn-deselect-all')?.addEventListener('click', () => {
    selectedWordsMap = {};
    renderLessons();
  });

  // Study Button
  document.getElementById('btn-start-study')?.addEventListener('click', startStudySession);

  // Add Custom / Lesson Word Modal Triggers
  document.getElementById('btn-open-custom-modal')?.addEventListener('click', () => openAddWordModal(null));
  document.getElementById('modal-close')?.addEventListener('click', closeAddWordModal);
  document.getElementById('modal-cancel')?.addEventListener('click', closeAddWordModal);
  document.getElementById('form-add-word')?.addEventListener('submit', handleAddWordSubmit);

  // Lesson detail modal listeners
  document.getElementById('lesson-modal-close')?.addEventListener('click', closeLessonWordsModal);
  document.getElementById('lesson-modal-done')?.addEventListener('click', closeLessonWordsModal);
  document.getElementById('btn-add-word-to-lesson')?.addEventListener('click', () => {
    const lesson = activeLessonForModal;
    closeLessonWordsModal();
    openAddWordModal(lesson);
  });

  // Export Data JS button
  document.getElementById('btn-export-data')?.addEventListener('click', exportDataJs);

  // IME mode toggle button for custom word form
  document.getElementById('ime-toggle-btn')?.addEventListener('click', () => {
    const currentMode = currentImeMode === 'hiragana' ? 'katakana' : 'hiragana';
    const input = document.getElementById('custom-hiragana');
    const badge = document.getElementById('custom-ime-badge');
    setImeMode(currentMode, input, badge);
  });

  // Study view IME mode toggle
  document.getElementById('study-ime-toggle')?.addEventListener('click', () => {
    const currentMode = currentImeMode === 'hiragana' ? 'katakana' : 'hiragana';
    const input = document.getElementById('study-answer-input');
    const badge = document.getElementById('study-ime-badge');
    setImeMode(currentMode, input, badge);
  });

  // Small Kana toolbar buttons
  document.getElementById('small-kana-toolbar')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.kana-tool-btn');
    if (!btn) return;
    const kanaChar = btn.dataset.kana;
    const input = document.getElementById('study-answer-input');
    if (input && kanaChar) {
      insertTextAtCursor(input, kanaChar);
      input.focus();
    }
  });

  // Study View Controls
  document.getElementById('btn-submit-answer')?.addEventListener('click', handleAnswerSubmission);
  document.getElementById('btn-show-answer')?.addEventListener('click', handleShowAnswer);
  document.getElementById('btn-next-word')?.addEventListener('click', handleNextWord);
  document.getElementById('btn-exit-study')?.addEventListener('click', exitStudySession);


  // Enter key inside study input
  document.getElementById('study-answer-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (studyEngine.isAnswerRevealed) {
        handleNextWord();
      } else {
        handleAnswerSubmission();
      }
    }
  });
}

/* Lesson Words Modal (Word Preview, Inspection & Granular Selection) */
function openLessonWordsModal(lessonId) {
  const levelData = VOCAB_DATA[currentLevel];
  if (!levelData) return;

  const lesson = levelData.lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  activeLessonForModal = lesson;
  if (!selectedWordsMap[lesson.id]) {
    selectedWordsMap[lesson.id] = new Set();
  }

  document.getElementById('lesson-modal-title').textContent = lesson.title;
  document.getElementById('lesson-modal-sub').textContent = `${currentLevel} • Total ${lesson.words.length} từ`;

  renderLessonModalContent(lesson);

  const modal = document.getElementById('lesson-words-modal');
  modal.classList.add('active');
}

function renderLessonModalContent(lesson) {
  const bodyEl = document.getElementById('lesson-modal-body');
  if (!bodyEl) return;

  const selectedSet = selectedWordsMap[lesson.id] || new Set();

  if (lesson.words.length === 0) {
    bodyEl.innerHTML = `<p class="text-muted" style="text-align: center; padding: 2rem;">Chưa có từ vựng nào trong bài học này.</p>`;
    return;
  }

  let html = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
      <span style="font-weight: 600; font-size: 0.9rem; color: var(--text-muted);">
        Đã chọn học: ${selectedSet.size} / ${lesson.words.length} từ
      </span>
      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-secondary btn-sm" id="modal-select-all-words">Chọn tất cả</button>
        <button class="btn btn-secondary btn-sm" id="modal-deselect-all-words">Bỏ chọn</button>
      </div>
    </div>

    <table class="lesson-words-table">
      <thead>
        <tr>
          <th style="width: 10%; text-align: center;">Học</th>
          <th style="width: 25%">Kanji</th>
          <th style="width: 35%">Hiragana / Katakana</th>
          <th style="width: 25%">Nghĩa Tiếng Việt</th>
          <th style="width: 5%">Xóa</th>
        </tr>
      </thead>
      <tbody>
        ${lesson.words.map((w, index) => {
          const isChecked = selectedSet.has(index);
          return `
            <tr style="cursor: pointer;" class="word-row" data-index="${index}">
              <td style="text-align: center;">
                <input type="checkbox" class="word-select-checkbox" data-index="${index}" ${isChecked ? 'checked' : ''} style="cursor: pointer; width: 16px; height: 16px;" />
              </td>
              <td class="jp-text" style="font-size: 1.1rem; font-weight: bold;">${w.kanji || '—'}</td>
              <td class="jp-text" style="font-size: 1.05rem; color: var(--accent-pink);">${w.hiragana}</td>
              <td style="color: var(--text-main);">${w.vietnamese}</td>
              <td>
                <button class="btn btn-danger btn-sm remove-word-from-lesson-btn" data-index="${index}" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;">✕</button>
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;

  bodyEl.innerHTML = html;

  // Add event listeners inside modal
  bodyEl.querySelector('#modal-select-all-words')?.addEventListener('click', () => {
    lesson.words.forEach((_, idx) => selectedSet.add(idx));
    renderLessonModalContent(lesson);
    renderLessons();
  });

  bodyEl.querySelector('#modal-deselect-all-words')?.addEventListener('click', () => {
    selectedSet.clear();
    renderLessonModalContent(lesson);
    renderLessons();
  });

  // Checkbox toggle
  bodyEl.querySelectorAll('.word-select-checkbox').forEach(chk => {
    chk.addEventListener('change', (evt) => {
      const idx = parseInt(evt.target.dataset.index);
      toggleWordSelection(lesson.id, idx);
      renderLessonModalContent(lesson);
      renderLessons();
    });
  });

  // Inline Delete button
  bodyEl.querySelectorAll('.remove-word-from-lesson-btn').forEach(btn => {
    btn.addEventListener('click', (evt) => {
      evt.stopPropagation();
      const index = parseInt(evt.target.dataset.index);
      lesson.words.splice(index, 1);
      
      // Remove index from selected set and re-index
      selectedSet.delete(index);
      saveLessonOverride(currentLevel, lesson);
      
      renderLessonModalContent(lesson);
      renderLessons();
    });
  });
}

function closeLessonWordsModal() {
  const modal = document.getElementById('lesson-words-modal');
  modal.classList.remove('active');
}

/* Save Lesson Override to LocalStorage */
function saveLessonOverride(level, lesson) {
  if (!vocabOverrides[level]) {
    vocabOverrides[level] = [];
  }
  const existingIdx = vocabOverrides[level].findIndex(l => l.id === lesson.id);
  if (existingIdx >= 0) {
    vocabOverrides[level][existingIdx] = lesson;
  } else {
    vocabOverrides[level].push(lesson);
  }
  saveVocabOverrides();
}

/* Add Word Modal Functions */
let targetLessonForNewWord = null;

function openAddWordModal(targetLesson = null) {
  targetLessonForNewWord = targetLesson;
  const modal = document.getElementById('custom-word-modal');
  if (!modal) return;

  const modalTitle = modal.querySelector('.modal-title');
  if (modalTitle) {
    modalTitle.textContent = targetLesson ? `Thêm từ vào "${targetLesson.title}"` : 'Thêm từ vựng mới ⭐';
  }

  modal.classList.add('active');
  const input = document.getElementById('custom-hiragana');
  const badge = document.getElementById('custom-ime-badge');
  initImeBinding(input, badge);
}

function closeAddWordModal() {
  const modal = document.getElementById('custom-word-modal');
  if (!modal) return;
  modal.classList.remove('active');
  const input = document.getElementById('custom-hiragana');
  unbindIme(input);
  document.getElementById('form-add-word').reset();
  targetLessonForNewWord = null;
}

function handleAddWordSubmit(e) {
  e.preventDefault();
  const kanji = document.getElementById('custom-kanji').value.trim();
  const hiragana = document.getElementById('custom-hiragana').value.trim();
  const vietnamese = document.getElementById('custom-vietnamese').value.trim();

  if (!hiragana || !vietnamese) {
    alert('Vui lòng nhập phiên âm Hiragana/Katakana và nghĩa tiếng Việt.');
    return;
  }

  const newWordObj = { kanji, hiragana, vietnamese };

  if (targetLessonForNewWord) {
    targetLessonForNewWord.words.push(newWordObj);
    
    // Auto select newly added word
    const newIdx = targetLessonForNewWord.words.length - 1;
    if (!selectedWordsMap[targetLessonForNewWord.id]) {
      selectedWordsMap[targetLessonForNewWord.id] = new Set();
    }
    selectedWordsMap[targetLessonForNewWord.id].add(newIdx);

    saveLessonOverride(currentLevel, targetLessonForNewWord);
    renderLessons();
    alert(`Đã thêm từ "${hiragana}" vào ${targetLessonForNewWord.title}!`);
  } else if (currentLevel === 'CUSTOM') {
    customWords.push(newWordObj);
    localStorage.setItem('jpapp_custom_words', JSON.stringify(customWords));
    renderLessons();
  } else {
    customWords.push(newWordObj);
    localStorage.setItem('jpapp_custom_words', JSON.stringify(customWords));
    renderLessons();
  }

  closeAddWordModal();
}

/* Export Data.js File for Permanent Sharing */
function exportDataJs() {
  const fullContent = `const VOCAB_DATA = ${JSON.stringify(VOCAB_DATA, null, 2)};\n`;
  const blob = new Blob([fullContent], { type: 'application/javascript;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'data.js');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* Study Session Controller */
function startStudySession() {
  let targetWords = [];

  if (currentLevel === 'CUSTOM') {
    targetWords = [...customWords];
  } else {
    const levelData = VOCAB_DATA[currentLevel];
    if (levelData) {
      levelData.lessons.forEach(l => {
        const set = selectedWordsMap[l.id];
        if (set && set.size > 0) {
          l.words.forEach((w, idx) => {
            if (set.has(idx)) {
              targetWords.push(w);
            }
          });
        }
      });
    }
  }

  if (targetWords.length === 0) {
    alert('Vui lòng chọn ít nhất 1 từ vựng hoặc 1 bài học để bắt đầu học!');
    return;
  }

  const studyMode = document.getElementById('study-mode-select').value;
  studyEngine.startSession(targetWords, studyMode);

  // Switch View
  document.getElementById('lesson-picker-view').classList.add('hidden');
  document.getElementById('study-view').classList.remove('hidden');

  const input = document.getElementById('study-answer-input');
  const badge = document.getElementById('study-ime-badge');

  if (studyMode === 'vn_to_jp') {
    initImeBinding(input, badge);
    input.placeholder = 'Nhập câu trả lời bằng tiếng Nhật...';
  } else {
    unbindIme(input);
    if (badge) badge.textContent = 'Tiếng Việt 🇻🇳';
    input.placeholder = 'Nhập nghĩa tiếng Việt...';
  }


  renderCurrentCard();
}

function renderCurrentCard() {
  const prompt = studyEngine.getPrompt();
  const progress = studyEngine.getProgress();

  if (!prompt) {
    renderStudySummary();
    return;
  }

  document.getElementById('card-prompt-label').textContent = prompt.label;
  document.getElementById('card-prompt-text').textContent = prompt.main;
  document.getElementById('card-prompt-sub').textContent = prompt.sub;

  document.getElementById('study-progress-text').textContent = `Câu ${progress.current} / ${progress.total}`;
  document.getElementById('progress-bar-fill').style.width = `${progress.percentage}%`;

  const input = document.getElementById('study-answer-input');
  input.value = '';
  input.focus();

  const revealedBox = document.getElementById('revealed-answer-box');
  revealedBox.classList.remove('show');
  document.getElementById('revealed-main').textContent = '';
  document.getElementById('revealed-sub').textContent = '';

  document.getElementById('btn-submit-answer').classList.remove('hidden');
  document.getElementById('btn-show-answer').classList.remove('hidden');
  document.getElementById('btn-next-word').classList.add('hidden');

}

function handleAnswerSubmission() {
  const input = document.getElementById('study-answer-input');
  const userAns = input.value;
  if (!userAns.trim()) return;

  const isCorrect = studyEngine.checkAnswer(userAns);
  if (isCorrect) {
    studyEngine.score++;
    showFeedback('Chính xác! 🎉', true);
    setTimeout(() => {
      handleNextWord();
    }, 900);
  } else {
    showFeedback('Chưa đúng! Thử lại hoặc xem đáp án 💡', false);
  }
}

function showFeedback(msg, isSuccess) {
  const feedbackEl = document.getElementById('feedback-message');
  feedbackEl.textContent = msg;
  feedbackEl.style.color = isSuccess ? '#38ef7d' : '#ff4757';
  feedbackEl.style.fontWeight = 'bold';
  feedbackEl.classList.remove('hidden');
  setTimeout(() => {
    feedbackEl.classList.add('hidden');
  }, 1500);
}

function handleShowAnswer() {
  const expected = studyEngine.getExpectedAnswer();
  if (!expected) return;

  studyEngine.isAnswerRevealed = true;

  document.getElementById('revealed-main').textContent = expected.main;
  document.getElementById('revealed-sub').textContent = expected.sub;
  document.getElementById('revealed-answer-box').classList.add('show');

  document.getElementById('btn-submit-answer').classList.add('hidden');
  document.getElementById('btn-show-answer').classList.add('hidden');
  document.getElementById('btn-next-word').classList.remove('hidden');
}

function handleNextWord() {
  const hasMore = studyEngine.nextWord();
  if (hasMore) {
    renderCurrentCard();
  } else {
    renderStudySummary();
  }
}

function renderStudySummary() {
  const progress = studyEngine.getProgress();
  document.getElementById('card-prompt-label').textContent = 'KẾT QUẢ HOÀN THÀNH 🏆';
  document.getElementById('card-prompt-text').textContent = `${progress.score} / ${progress.total} câu đúng`;
  document.getElementById('card-prompt-sub').textContent = `Tỷ lệ chính xác: ${Math.round((progress.score / progress.total) * 100)}%`;

  document.getElementById('answer-section-inputs').classList.add('hidden');
  document.getElementById('study-summary-actions').classList.remove('hidden');
}

function exitStudySession() {
  document.getElementById('study-view').classList.add('hidden');
  document.getElementById('lesson-picker-view').classList.remove('hidden');
  document.getElementById('answer-section-inputs').classList.remove('hidden');
  document.getElementById('study-summary-actions').classList.add('hidden');
  
  const input = document.getElementById('study-answer-input');
  unbindIme(input);
}
