// Main Application Logic

// Multi-layer persistent storage (localStorage -> sessionStorage -> 365-day Cookie)
function setCookie(name, value, days = 365) {
  try {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/;SameSite=Lax";
  } catch (e) {}
}

function getCookie(name) {
  try {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
    }
  } catch (e) {}
  return null;
}

function saveStateToStorage(key, valueStr) {
  try { localStorage.setItem(key, valueStr); } catch (e) {}
  try { sessionStorage.setItem(key, valueStr); } catch (e) {}
  setCookie(key, valueStr, 365);
}

function loadStateFromStorage(key) {
  try {
    const val = localStorage.getItem(key);
    if (val !== null) return val;
  } catch (e) {}
  try {
    const val = sessionStorage.getItem(key);
    if (val !== null) return val;
  } catch (e) {}
  const cookieVal = getCookie(key);
  if (cookieVal !== null) return cookieVal;
  return null;
}

let currentLevel = loadStateFromStorage('jpapp_current_level') || 'N5';
let selectedWordsMap = loadSelectedWordsFromSession();

function saveSelectedWordsToSession() {
  try {
    const serializableMap = {};
    for (const lessonId in selectedWordsMap) {
      if (selectedWordsMap[lessonId] && selectedWordsMap[lessonId].size > 0) {
        serializableMap[lessonId] = Array.from(selectedWordsMap[lessonId]);
      }
    }
    saveStateToStorage('jpapp_selected_words', JSON.stringify(serializableMap));
  } catch (e) {
    console.error('Failed to save selected words:', e);
  }
}

function loadSelectedWordsFromSession() {
  try {
    const data = loadStateFromStorage('jpapp_selected_words');
    if (data) {
      const parsed = JSON.parse(data);
      const restoredMap = {};
      for (const lessonId in parsed) {
        if (Array.isArray(parsed[lessonId])) {
          restoredMap[lessonId] = new Set(parsed[lessonId]);
        }
      }
      return restoredMap;
    }
  } catch (e) {
    console.error('Failed to load selected words:', e);
  }
  return {};
}

let activeLessonForModal = null;
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

  if (VOCAB_DATA.N5) {
    VOCAB_DATA.N5.lessons.forEach(lesson => {
      if (lesson.id !== 'n5_b6') {
        lesson.words.forEach(word => {
          if (!word.kanji) word.kanji = "";
        });
      }
    });
  }
}

function saveVocabOverrides() {
  localStorage.setItem('jpapp_vocab_overrides', JSON.stringify(vocabOverrides));
}

// Gather all global words across N5-N1 and CUSTOM for distractors and SRS review
function getAllGlobalWordsWithMeta() {
  const list = [];
  const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];
  
  levels.forEach(lvl => {
    const lvlData = VOCAB_DATA[lvl];
    if (lvlData && lvlData.lessons) {
      lvlData.lessons.forEach(lesson => {
        lesson.words.forEach(w => {
          list.push({ word: w, lessonId: lesson.id, level: lvl });
        });
      });
    }
  });

  customWords.forEach(w => {
    list.push({ word: w, lessonId: 'custom_lesson', level: 'CUSTOM' });
  });

  return list;
}

function getAllGlobalWords() {
  return getAllGlobalWordsWithMeta().map(item => item.word);
}

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  const savedMode = loadStateFromStorage('jpapp_selected_study_mode');
  const selectEl = document.getElementById('study-mode-select');
  if (savedMode && selectEl) {
    selectEl.value = savedMode;
  }

  renderLevelTabs();
  renderLessons();
  setupEventListeners();
  updateSrsHeaderBadges();
}

function updateSrsHeaderBadges() {
  if (typeof srsEngine === 'undefined') return;

  const allWords = getAllGlobalWordsWithMeta();
  const dueCards = srsEngine.getDueCards(allWords);
  const weakCards = srsEngine.getWeakCards(allWords);

  const srsBadge = document.getElementById('srs-due-badge');
  const weakBadge = document.getElementById('weak-words-badge');

  if (srsBadge) srsBadge.textContent = dueCards.length;
  if (weakBadge) weakBadge.textContent = weakCards.length;
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
    selectedWordsMap[lesson.id].clear();
  } else {
    lesson.words.forEach((_, idx) => selectedWordsMap[lesson.id].add(idx));
  }
  saveSelectedWordsToSession();
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
  saveSelectedWordsToSession();
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
    
    let graduatedCount = 0;
    if (typeof srsEngine !== 'undefined') {
      lesson.words.forEach(w => {
        if (srsEngine.getCardState(w, lesson.id).graduated) graduatedCount++;
      });
    }

    let cardClass = 'lesson-card';
    let statusText = 'Chọn bài này';
    if (status === 'full') {
      cardClass += ' selected';
      statusText = 'Đã chọn tất cả';
    } else if (status === 'partial') {
      cardClass += ' partial';
      statusText = `Đã chọn ${selectedCount}/${lesson.words.length}`;
    }

    const gradBadge = graduatedCount > 0 
      ? `<span class="graduated-badge" style="font-size: 0.75rem; background: rgba(56, 239, 125, 0.15); color: #38ef7d; border: 1px solid rgba(56, 239, 125, 0.3); padding: 0.15rem 0.5rem; border-radius: 12px; font-weight: 500;" title="${graduatedCount}/${lesson.words.length} từ đã học (tốt nghiệp SRS)">✓ Đã học ${graduatedCount}/${lesson.words.length}</span>` 
      : '';

    return `
      <div class="${cardClass}" data-id="${lesson.id}">
        <div class="card-header">
          <div class="lesson-title">${lesson.title}</div>
          <div style="display: flex; gap: 0.4rem; align-items: center;">
            ${gradBadge}
            <span class="word-count-badge">${selectedCount > 0 && status !== 'full' ? `${selectedCount}/` : ''}${lesson.words.length} từ</span>
          </div>
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
      <div class="table-responsive">
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
      </div>
    `;
  }

  customHtml += `</div>`;
  container.innerHTML = customHtml;

  if (!selectedWordsMap['custom_lesson']) {
    selectedWordsMap['custom_lesson'] = new Set(customWords.map((_, i) => i));
    saveSelectedWordsToSession();
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
  // Level Tabs
  document.getElementById('level-tabs')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.level-tab-btn');
    if (!btn) return;
    currentLevel = btn.dataset.level;
    saveStateToStorage('jpapp_current_level', currentLevel);
    renderLevelTabs();
    renderLessons();
  });

  // SRS Header Buttons
  document.getElementById('btn-srs-review')?.addEventListener('click', () => {
    const allWords = getAllGlobalWordsWithMeta();
    const dueCards = srsEngine.getDueCards(allWords);

    if (dueCards.length === 0) {
      alert('🎉 Tuyệt vời! Hiện tại không có từ nào đến hạn ôn tập hôm nay.');
      return;
    }

    studyEngine.startSession(dueCards, 'srs_review');
    launchStudyView('srs_review');
  });

  document.getElementById('btn-weak-words')?.addEventListener('click', () => {
    const allWords = getAllGlobalWordsWithMeta();
    const weakCards = srsEngine.getWeakCards(allWords);

    if (weakCards.length === 0) {
      alert('🌟 Xuất sắc! Hiện tại bạn không có từ vựng yếu hay bị làm sai.');
      return;
    }

    studyEngine.startSession(weakCards, 'weak_words');
    launchStudyView('weak_words');
  });

  // TTS Play Speaker Button
  document.getElementById('btn-tts-speaker')?.addEventListener('click', () => {
    const word = studyEngine.getCurrentWord();
    if (word && word.hiragana) {
      speakJapanese(word.hiragana);
    }
  });

  // Lesson Grid interactions
  document.getElementById('lessons-grid')?.addEventListener('click', (e) => {
    const viewBtn = e.target.closest('.view-words-btn');
    if (viewBtn) {
      e.stopPropagation();
      const lessonId = viewBtn.dataset.id;
      openLessonWordsModal(lessonId);
      return;
    }

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

    if (e.target.id === 'open-add-word-modal' || e.target.id === 'open-add-word-modal-empty') {
      openAddWordModal(null);
    }

    if (e.target.classList.contains('delete-word-btn')) {
      const idx = parseInt(e.target.dataset.index);
      customWords.splice(idx, 1);
      localStorage.setItem('jpapp_custom_words', JSON.stringify(customWords));
      if (selectedWordsMap['custom_lesson']) {
        const updatedSet = new Set();
        selectedWordsMap['custom_lesson'].forEach(i => {
          if (i < idx) updatedSet.add(i);
          else if (i > idx) updatedSet.add(i - 1);
        });
        selectedWordsMap['custom_lesson'] = updatedSet;
        saveSelectedWordsToSession();
      }
      renderLessons();
      updateSrsHeaderBadges();
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
      saveSelectedWordsToSession();
      renderLessons();
    }
  });

  document.getElementById('btn-deselect-all')?.addEventListener('click', () => {
    selectedWordsMap = {};
    saveSelectedWordsToSession();
    renderLessons();
  });

  // Start Study Button & Mode Persistence
  document.getElementById('btn-start-study')?.addEventListener('click', startStudySession);
  document.getElementById('study-mode-select')?.addEventListener('change', (e) => {
    saveStateToStorage('jpapp_selected_study_mode', e.target.value);
  });

  // Custom Word Modal Controls
  document.getElementById('btn-open-custom-modal')?.addEventListener('click', () => openAddWordModal(null));
  document.getElementById('modal-close')?.addEventListener('click', closeAddWordModal);
  document.getElementById('modal-cancel')?.addEventListener('click', closeAddWordModal);
  document.getElementById('form-add-word')?.addEventListener('submit', handleAddWordSubmit);

  // Lesson Detail Modal Controls
  document.getElementById('lesson-modal-close')?.addEventListener('click', closeLessonWordsModal);
  document.getElementById('lesson-modal-done')?.addEventListener('click', closeLessonWordsModal);
  document.getElementById('btn-add-word-to-lesson')?.addEventListener('click', () => {
    const lesson = activeLessonForModal;
    closeLessonWordsModal();
    openAddWordModal(lesson);
  });

  // Export Data Button
  document.getElementById('btn-export-data')?.addEventListener('click', exportDataJs);

  // Conjugation Guide Modal Controls
  document.getElementById('btn-open-conjugation-guide')?.addEventListener('click', openConjugationGuideModal);
  document.getElementById('conjugation-modal-close')?.addEventListener('click', closeConjugationGuideModal);
  document.getElementById('conjugation-modal-done')?.addEventListener('click', closeConjugationGuideModal);

  document.querySelectorAll('.conj-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.conj-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.conj-tab-content').forEach(c => c.classList.add('hidden'));

      btn.classList.add('active');
      const targetTabId = btn.dataset.tab;
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) targetContent.classList.remove('hidden');

      if (targetTabId === 'tab-matrix') {
        render24VerbsMatrixTable();
      }
    });
  });

  // IME Toggle
  document.getElementById('ime-toggle-btn')?.addEventListener('click', () => {
    const currentMode = currentImeMode === 'hiragana' ? 'katakana' : 'hiragana';
    const input = document.getElementById('custom-hiragana');
    const badge = document.getElementById('custom-ime-badge');
    setImeMode(currentMode, input, badge);
  });

  document.getElementById('study-ime-toggle')?.addEventListener('click', () => {
    const currentMode = currentImeMode === 'hiragana' ? 'katakana' : 'hiragana';
    const input = document.getElementById('study-answer-input');
    const badge = document.getElementById('study-ime-badge');
    setImeMode(currentMode, input, badge);
  });

  // Kana Toolbar Buttons
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

  // Study Controls
  document.getElementById('btn-submit-answer')?.addEventListener('click', handleAnswerSubmission);
  document.getElementById('btn-show-answer')?.addEventListener('click', handleShowAnswer);
  document.getElementById('btn-next-word')?.addEventListener('click', handleNextWord);
  document.getElementById('btn-exit-study')?.addEventListener('click', exitStudySession);
  document.getElementById('btn-preview-next')?.addEventListener('click', handleNextWord);

  document.getElementById('btn-summary-restart')?.addEventListener('click', () => startStudySession(true));
  document.getElementById('btn-summary-exit')?.addEventListener('click', exitStudySession);

  // Enter Key Handler
  document.getElementById('study-answer-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const isRevealed = isConjugationModeActive ? conjugationEngine.isAnswerRevealed : studyEngine.isAnswerRevealed;
      if (isRevealed) {
        handleNextWord();
      } else {
        handleAnswerSubmission();
      }
    }
  });
}

/* Lesson Words Modal */
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

    <div class="table-responsive">
      <table class="lesson-words-table">
        <thead>
          <tr>
            <th style="width: 8%; text-align: center;">Học</th>
            <th style="width: 22%">Kanji</th>
            <th style="width: 30%">Hiragana / Katakana</th>
            <th style="width: 25%">Nghĩa Tiếng Việt</th>
            <th style="width: 10%; text-align: center;">Trạng thái</th>
            <th style="width: 5%">Xóa</th>
          </tr>
        </thead>
        <tbody>
          ${lesson.words.map((w, index) => {
            const isChecked = selectedSet.has(index);
            const isGraduated = typeof srsEngine !== 'undefined' && srsEngine.getCardState(w, lesson.id).graduated;
            const statusTag = isGraduated 
              ? `<span style="font-size: 0.75rem; color: #38ef7d; background: rgba(56, 239, 125, 0.12); border: 1px solid rgba(56, 239, 125, 0.3); padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 500;">✓ Đã học</span>`
              : `<span style="font-size: 0.75rem; color: var(--text-muted); background: rgba(255,255,255,0.05); padding: 0.15rem 0.4rem; border-radius: 4px;">Từ mới</span>`;

            return `
              <tr style="cursor: pointer;" class="word-row" data-index="${index}">
                <td style="text-align: center;">
                  <input type="checkbox" class="word-select-checkbox" data-index="${index}" ${isChecked ? 'checked' : ''} style="cursor: pointer; width: 16px; height: 16px;" />
                </td>
                <td class="jp-text" style="font-size: 1.1rem; font-weight: bold;">${w.kanji || '—'}</td>
                <td class="jp-text" style="font-size: 1.05rem; color: var(--accent-pink);">${w.hiragana}</td>
                <td style="color: var(--text-main);">${w.vietnamese}</td>
                <td style="text-align: center;">${statusTag}</td>
                <td>
                  <button class="btn btn-danger btn-sm remove-word-from-lesson-btn" data-index="${index}" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;">✕</button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  bodyEl.innerHTML = html;

  bodyEl.querySelector('#modal-select-all-words')?.addEventListener('click', () => {
    lesson.words.forEach((_, idx) => selectedSet.add(idx));
    saveSelectedWordsToSession();
    renderLessonModalContent(lesson);
    renderLessons();
  });

  bodyEl.querySelector('#modal-deselect-all-words')?.addEventListener('click', () => {
    selectedSet.clear();
    saveSelectedWordsToSession();
    renderLessonModalContent(lesson);
    renderLessons();
  });

  bodyEl.querySelectorAll('.word-select-checkbox').forEach(chk => {
    chk.addEventListener('change', (evt) => {
      const idx = parseInt(evt.target.dataset.index);
      toggleWordSelection(lesson.id, idx);
      renderLessonModalContent(lesson);
      renderLessons();
    });
  });

  bodyEl.querySelectorAll('.remove-word-from-lesson-btn').forEach(btn => {
    btn.addEventListener('click', (evt) => {
      evt.stopPropagation();
      const index = parseInt(evt.target.dataset.index);
      lesson.words.splice(index, 1);
      
      const updatedSet = new Set();
      selectedSet.forEach(i => {
        if (i < index) updatedSet.add(i);
        else if (i > index) updatedSet.add(i - 1);
      });
      selectedWordsMap[lesson.id] = updatedSet;

      saveLessonOverride(currentLevel, lesson);
      saveSelectedWordsToSession();
      renderLessonModalContent(lesson);
      renderLessons();
      updateSrsHeaderBadges();
    });
  });
}

function closeLessonWordsModal() {
  const modal = document.getElementById('lesson-words-modal');
  modal.classList.remove('active');
}

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

/* Custom Word Modal */
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
    const newIdx = targetLessonForNewWord.words.length - 1;
    if (!selectedWordsMap[targetLessonForNewWord.id]) {
      selectedWordsMap[targetLessonForNewWord.id] = new Set();
    }
    selectedWordsMap[targetLessonForNewWord.id].add(newIdx);

    saveLessonOverride(currentLevel, targetLessonForNewWord);
    saveSelectedWordsToSession();
    renderLessons();
    alert(`Đã thêm từ "${hiragana}" vào ${targetLessonForNewWord.title}!`);
  } else {
    customWords.push(newWordObj);
    localStorage.setItem('jpapp_custom_words', JSON.stringify(customWords));
    if (selectedWordsMap['custom_lesson']) {
      selectedWordsMap['custom_lesson'].add(customWords.length - 1);
      saveSelectedWordsToSession();
    }
    renderLessons();
  }

  updateSrsHeaderBadges();
  closeAddWordModal();
}

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

/* Conjugation Matrix Guide Modal Functions */
function openConjugationGuideModal() {
  const modal = document.getElementById('conjugation-matrix-modal');
  if (modal) modal.classList.add('active');
}

function closeConjugationGuideModal() {
  const modal = document.getElementById('conjugation-matrix-modal');
  if (modal) modal.classList.remove('active');
}

function render24VerbsMatrixTable() {
  const container = document.getElementById('matrix-24-container');
  if (!container || typeof VERB_CONJUGATION_DATA === 'undefined') return;

  const verbs = VERB_CONJUGATION_DATA.verbs;

  let html = `
    <table class="conj-matrix-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Động Từ</th>
          <th>Nghĩa</th>
          <th>Nhóm</th>
          <th>Không ~ (V-nai)</th>
          <th>Lễ phép (V-masu)</th>
          <th>Thể て (V-te)</th>
          <th>Thể た (V-ta)</th>
          <th>Nếu ~ (V-ba)</th>
          <th>~ thôi (V-ou)</th>
        </tr>
      </thead>
      <tbody class="jp-text">
  `;

  verbs.forEach((v, idx) => {
    const badgeClass = v.group === 1 ? 'badge-v1' : (v.group === 2 ? 'badge-v2' : 'badge-v3');
    html += `
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem;">${idx + 1}</td>
        <td style="font-weight: 600;">${v.kanji ? `${v.kanji} (${v.dictionary})` : v.dictionary}</td>
        <td style="font-family: inherit; font-size: 0.85rem; color: var(--text-muted);">${v.vietnamese}</td>
        <td><span class="${badgeClass}">Nhóm ${v.group}</span></td>
        <td>${v.forms.nai}</td>
        <td>${v.forms.masu}</td>
        <td style="color: var(--accent-pink);">${v.forms.te}</td>
        <td style="color: var(--accent-cyan);">${v.forms.ta}</td>
        <td>${v.forms.ba}</td>
        <td>${v.forms.volitional}</td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  container.innerHTML = html;
}

let isConjugationModeActive = false;

/* Study Session Controller */
function startStudySession(isRestart = false) {
  const studyModeSelect = document.getElementById('study-mode-select');
  const studyMode = studyModeSelect ? studyModeSelect.value : 'new_lesson_pipeline';

  if (studyMode === 'verb_conjugation' || studyMode === 'verb_group_id') {
    isConjugationModeActive = true;
    const formFilter = studyMode === 'verb_group_id' ? 'group' : 'all';
    
    let selectedVerbs = [];
    const selectedHiraganaSet = new Set();

    if (currentLevel === 'CUSTOM') {
      customWords.forEach(w => selectedHiraganaSet.add(w.hiragana));
    } else {
      const levelData = VOCAB_DATA[currentLevel];
      if (levelData) {
        levelData.lessons.forEach(l => {
          const set = selectedWordsMap[l.id];
          if (set && set.size > 0) {
            l.words.forEach((w, idx) => {
              if (set.has(idx)) {
                selectedHiraganaSet.add(w.hiragana);
                if (w.kanji) selectedHiraganaSet.add(w.kanji);
              }
            });
          }
        });
      }
    }

    if (selectedHiraganaSet.size > 0 && typeof VERB_CONJUGATION_DATA !== 'undefined') {
      selectedVerbs = VERB_CONJUGATION_DATA.verbs.filter(v => 
        selectedHiraganaSet.has(v.dictionary) || selectedHiraganaSet.has(v.kanji)
      );
    }

    if (!selectedVerbs || selectedVerbs.length === 0) {
      selectedVerbs = (typeof VERB_CONJUGATION_DATA !== 'undefined') ? VERB_CONJUGATION_DATA.verbs : [];
    }

    conjugationEngine.startSession(selectedVerbs, formFilter);
    launchStudyView(studyMode);
    return;
  }
  isConjugationModeActive = false;

  let targetWords = [];

  if (currentLevel === 'CUSTOM') {
    targetWords = customWords.map(w => ({ word: w, lessonId: 'custom_lesson' }));
  } else {
    const levelData = VOCAB_DATA[currentLevel];
    if (levelData) {
      levelData.lessons.forEach(l => {
        const set = selectedWordsMap[l.id];
        if (set && set.size > 0) {
          l.words.forEach((w, idx) => {
            if (set.has(idx)) {
              targetWords.push({ word: w, lessonId: l.id });
            }
          });
        }
      });
    }
  }

  // Fallback: auto select current level words if none selected
  if (targetWords.length === 0) {
    if (currentLevel === 'CUSTOM') {
      targetWords = customWords.map(w => ({ word: w, lessonId: 'custom_lesson' }));
    } else {
      const levelData = VOCAB_DATA[currentLevel];
      if (levelData && levelData.lessons) {
        levelData.lessons.forEach(l => {
          if (!selectedWordsMap[l.id]) selectedWordsMap[l.id] = new Set();
          l.words.forEach((w, idx) => {
            selectedWordsMap[l.id].add(idx);
            targetWords.push({ word: w, lessonId: l.id });
          });
        });
        saveSelectedWordsToSession();
        renderLessons();
      }
    }
  }

  if (targetWords.length === 0) {
    alert('Vui lòng chọn ít nhất 1 từ vựng hoặc 1 bài học để bắt đầu học!');
    return;
  }

  if (studyMode === 'new_lesson_pipeline' && !isRestart) {
    const unlearnedWords = targetWords.filter(item => {
      if (typeof srsEngine === 'undefined') return true;
      const state = srsEngine.getCardState(item.word, item.lessonId);
      return !state.graduated;
    });

    if (unlearnedWords.length > 0) {
      targetWords = unlearnedWords;
    }
  }

  studyEngine.startSession(targetWords, studyMode);

  launchStudyView(studyMode);
}

function launchStudyView(studyMode) {
  document.getElementById('lesson-picker-view').classList.add('hidden');
  document.getElementById('study-view').classList.remove('hidden');

  document.getElementById('study-summary-actions').classList.add('hidden');
  document.getElementById('preview-section').classList.add('hidden');
  document.getElementById('mc-options-container').classList.add('hidden');
  document.getElementById('answer-section-inputs').classList.remove('hidden');

  const revealedBox = document.getElementById('revealed-answer-box');
  if (revealedBox) {
    revealedBox.classList.remove('show');
    document.getElementById('revealed-main').textContent = '';
    document.getElementById('revealed-sub').textContent = '';
  }

  document.getElementById('btn-submit-answer')?.classList.remove('hidden');
  document.getElementById('btn-show-answer')?.classList.remove('hidden');
  document.getElementById('btn-next-word')?.classList.add('hidden');

  renderCurrentCard();
}

function renderCurrentCard() {
  if (isConjugationModeActive) {
    renderConjugationCard();
    return;
  }

  const word = studyEngine.getCurrentWord();
  const prompt = studyEngine.getPrompt();
  const progress = studyEngine.getProgress();

  if (!word || !prompt) {
    renderStudySummary();
    return;
  }

  // Auto TTS Play on card render ONLY when prompt is Japanese (JP -> VN mode or Preview)
  if (word.hiragana && prompt.isJpPrompt) {
    speakJapanese(word.hiragana);
  }

  // Header & Progress
  document.getElementById('study-progress-text').textContent = progress.batchText 
    ? `${progress.batchText} — Từ ${progress.current}/${progress.total}`
    : `Câu ${progress.current} / ${progress.total}`;
  
  document.getElementById('study-stage-text').textContent = progress.stageText || '';
  document.getElementById('progress-bar-fill').style.width = `${progress.percentage}%`;

  // Pipeline Stepper
  const stepperEl = document.getElementById('pipeline-stepper');
  if (studyEngine.mode === 'new_lesson_pipeline') {
    stepperEl.classList.remove('hidden');
    for (let i = 1; i <= 4; i++) {
      const pill = document.getElementById(`step-pill-${i}`);
      if (pill) {
        pill.className = 'step-pill';
        if (i < progress.pipelineStep) pill.classList.add('completed');
        else if (i === progress.pipelineStep) pill.classList.add('active');
      }
    }
  } else {
    stepperEl.classList.add('hidden');
  }

  document.getElementById('card-prompt-label').textContent = prompt.label;
  document.getElementById('card-prompt-text').textContent = prompt.main;
  document.getElementById('card-prompt-sub').textContent = prompt.sub;

  const previewSec = document.getElementById('preview-section');
  const mcContainer = document.getElementById('mc-options-container');
  const typingInputs = document.getElementById('answer-section-inputs');

  const revealedBox = document.getElementById('revealed-answer-box');
  revealedBox.classList.remove('show');
  document.getElementById('revealed-main').textContent = '';
  document.getElementById('revealed-sub').textContent = '';

  document.getElementById('btn-submit-answer').classList.remove('hidden');
  document.getElementById('btn-show-answer').classList.remove('hidden');
  document.getElementById('btn-next-word').classList.add('hidden');

  // VIEW MODE CONDITIONAL RENDERING
  if (studyEngine.mode === 'new_lesson_pipeline' && progress.pipelineStep === 1) {
    // STEP 1: PREVIEW
    previewSec.classList.remove('hidden');
    mcContainer.classList.add('hidden');
    typingInputs.classList.add('hidden');

    document.getElementById('preview-hiragana').textContent = word.hiragana;
    document.getElementById('preview-vietnamese').textContent = word.vietnamese;
    const kanjiRow = document.getElementById('preview-kanji-row');
    if (word.kanji) {
      document.getElementById('preview-kanji').textContent = word.kanji;
      kanjiRow.style.display = 'flex';
    } else {
      kanjiRow.style.display = 'none';
    }
  } else if (studyEngine.mode === 'new_lesson_pipeline' && progress.pipelineStep === 4) {
    // STEP 4: BATCH GRADUATION
    previewSec.classList.add('hidden');
    mcContainer.classList.add('hidden');
    typingInputs.classList.add('hidden');

    document.getElementById('card-prompt-label').textContent = '🎉 BẠN ĐÃ TỐT NGHIỆP CỤM NÀY!';
    document.getElementById('card-prompt-text').textContent = `Hoàn thành 7 từ mới!`;
    document.getElementById('card-prompt-sub').textContent = `Các từ này đã được lưu vào hệ thống Ôn tập Spaced Repetition (SRS).`;
    
    document.getElementById('study-summary-actions').classList.remove('hidden');
  } else if ((studyEngine.mode === 'new_lesson_pipeline' && progress.pipelineStep === 2) ||
             studyEngine.mode === 'mc_jp_to_vn' || studyEngine.mode === 'mc_vn_to_jp') {
    // STEP 2 / MULTIPLE CHOICE
    previewSec.classList.add('hidden');
    mcContainer.classList.remove('hidden');
    typingInputs.classList.add('hidden');

    renderMultipleChoiceOptions(mcContainer);
  } else {
    // TYPING MODE (Step 3 or Free Typing)
    previewSec.classList.add('hidden');
    mcContainer.classList.add('hidden');
    typingInputs.classList.remove('hidden');

    const input = document.getElementById('study-answer-input');
    const badge = document.getElementById('study-ime-badge');
    input.value = '';

    const isVnToJp = (!prompt.isJpPrompt || studyEngine.mode === 'vn_to_jp');
    if (isVnToJp) {
      initImeBinding(input, badge);
      input.placeholder = 'Nhập câu trả lời bằng tiếng Nhật (Gõ Romaji)...';
    } else {
      unbindIme(input);
      if (badge) badge.textContent = 'Tiếng Việt 🇻🇳';
      input.placeholder = 'Nhập nghĩa tiếng Việt...';
    }

    input.focus();
  }
}

function renderConjugationCard() {
  const q = conjugationEngine.getCurrentQuestion();
  if (!q) {
    renderConjugationSummary();
    return;
  }

  const progressText = `Câu ${conjugationEngine.currentIndex + 1} / ${conjugationEngine.questions.length}`;
  document.getElementById('study-progress-text').textContent = progressText;
  document.getElementById('study-stage-text').textContent = `Thử thách chia động từ`;

  const pct = Math.round(((conjugationEngine.currentIndex) / conjugationEngine.questions.length) * 100);
  document.getElementById('progress-bar-fill').style.width = `${pct}%`;

  document.getElementById('pipeline-stepper').classList.add('hidden');

  const badgeClass = q.verb.group === 1 ? 'badge-v1' : (q.verb.group === 2 ? 'badge-v2' : 'badge-v3');

  document.getElementById('card-prompt-label').innerHTML = `CHIA ĐỘNG TỪ — <span class="${badgeClass}">NHÓM ${q.verb.group}</span>`;
  document.getElementById('card-prompt-text').textContent = q.prompt;
  document.getElementById('card-prompt-sub').textContent = `Động từ gốc: ${q.verb.kanji ? `${q.verb.kanji} (${q.verb.dictionary})` : q.verb.dictionary} — Nghĩa: ${q.verb.vietnamese}`;

  document.getElementById('preview-section').classList.add('hidden');
  const mcContainer = document.getElementById('mc-options-container');
  const typingInputs = document.getElementById('answer-section-inputs');

  const revealedBox = document.getElementById('revealed-answer-box');
  revealedBox.classList.remove('show');
  document.getElementById('revealed-main').textContent = '';
  document.getElementById('revealed-sub').textContent = '';

  if (q.isMultipleChoice) {
    mcContainer.classList.remove('hidden');
    typingInputs.classList.add('hidden');

    mcContainer.innerHTML = [1, 2, 3].map(g => `
      <button class="mc-option-btn" data-group="${g}">
        Nhóm ${g} ${g === 1 ? '(V1: cột う)' : (g === 2 ? '(V2: cột え/い + る)' : '(V3: くる/する)')}
      </button>
    `).join('');

    mcContainer.querySelectorAll('.mc-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedGroup = parseInt(btn.dataset.group);
        const result = conjugationEngine.checkAnswer(selectedGroup);

        mcContainer.querySelectorAll('.mc-option-btn').forEach(b => {
          b.disabled = true;
          if (parseInt(b.dataset.group) === q.verb.group) {
            b.classList.add('correct');
          }
        });

        if (result.isCorrect) {
          showFeedback('Chính xác! 🎉', true);
        } else {
          btn.classList.add('wrong');
          showFeedback('Chưa chính xác! 💡', false);
        }

        setTimeout(() => {
          handleNextWord();
        }, 1100);
      });
    });
  } else {
    mcContainer.classList.add('hidden');
    typingInputs.classList.remove('hidden');

    const input = document.getElementById('study-answer-input');
    const badge = document.getElementById('study-ime-badge');
    input.value = '';
    initImeBinding(input, badge);
    input.placeholder = `Gõ đáp án tiếng Nhật cho ${q.targetForm.name}...`;

    document.getElementById('btn-submit-answer').classList.remove('hidden');
    document.getElementById('btn-show-answer').classList.remove('hidden');
    document.getElementById('btn-next-word').classList.add('hidden');

    input.focus();
  }
}

function renderConjugationSummary() {
  document.getElementById('pipeline-stepper').classList.add('hidden');
  document.getElementById('preview-section').classList.add('hidden');
  document.getElementById('mc-options-container').classList.add('hidden');
  document.getElementById('answer-section-inputs').classList.add('hidden');
  document.getElementById('study-summary-actions').classList.remove('hidden');

  const total = conjugationEngine.questions.length;
  const score = conjugationEngine.score;
  const pct = Math.round((score / total) * 100);

  document.getElementById('card-prompt-label').textContent = 'KẾT QUẢ CHIA ĐỘNG TỪ 🏆';
  document.getElementById('card-prompt-text').textContent = `${score} / ${total} câu đúng`;
  document.getElementById('card-prompt-sub').textContent = `Tỷ lệ chính xác: ${pct}% — Bạn đã nắm vững các quy tắc biến đổi thể!`;
}

function renderMultipleChoiceOptions(container) {
  const options = studyEngine.getMultipleChoiceOptions(getAllGlobalWords());
  container.innerHTML = options.map((opt, idx) => `
    <button class="mc-option-btn" data-correct="${opt.isCorrect}">
      ${opt.text}
    </button>
  `).join('');

  container.querySelectorAll('.mc-option-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const isCorrect = btn.dataset.correct === 'true';
      container.querySelectorAll('.mc-option-btn').forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') {
          b.classList.add('correct');
        }
      });

      if (!isCorrect) {
        btn.classList.add('wrong');
        showFeedback('Chưa chính xác! 💡', false);
      } else {
        studyEngine.score++;
        showFeedback('Chính xác! 🎉', true);
      }

      // SRS Record
      if (studyEngine.mode === 'srs_review' || studyEngine.mode === 'weak_words') {
        srsEngine.recordReview(studyEngine.getCurrentWord(), studyEngine.getCurrentLessonId(), isCorrect);
      }

      setTimeout(() => {
        handleNextWord();
      }, 1100);
    });
  });
}

function handleAnswerSubmission() {
  if (isConjugationModeActive) {
    const input = document.getElementById('study-answer-input');
    if (!input) return;
    if (typeof convertRomajiSmart === 'function') {
      input.value = convertRomajiSmart(input.value, currentImeMode, true);
    }
    const userAns = input.value;
    if (!userAns.trim()) return;

    const result = conjugationEngine.checkAnswer(userAns);
    if (result.isCorrect) {
      showFeedback('Chính xác! 🎉', true);
      setTimeout(() => {
        handleNextWord();
      }, 900);
    } else {
      showFeedback('Chưa đúng! Thử lại hoặc nhấn "Xem đáp án" 💡', false);
    }
    return;
  }

  const input = document.getElementById('study-answer-input');
  if (!input) return;

  if (typeof convertRomajiSmart === 'function' && (studyEngine.mode === 'vn_to_jp' || studyEngine.pipelineStep === 3)) {
    input.value = convertRomajiSmart(input.value, currentImeMode, true);
  }

  const userAns = input.value;
  if (!userAns.trim()) return;

  const isCorrect = studyEngine.checkAnswer(userAns);
  if (isCorrect) {
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
  if (!feedbackEl) return;
  feedbackEl.textContent = msg;
  feedbackEl.style.color = isSuccess ? '#38ef7d' : '#ff4757';
  feedbackEl.style.fontWeight = 'bold';
  feedbackEl.classList.remove('hidden');
  setTimeout(() => {
    feedbackEl.classList.add('hidden');
  }, 1500);
}

function handleShowAnswer() {
  if (isConjugationModeActive) {
    const q = conjugationEngine.getCurrentQuestion();
    if (!q) return;

    conjugationEngine.isAnswerRevealed = true;

    document.getElementById('revealed-main').textContent = q.expectedAnswer;
    document.getElementById('revealed-sub').innerHTML = `<div class="rule-explanation-box">${q.explanation}</div>`;
    document.getElementById('revealed-answer-box').classList.add('show');

    if (q.expectedAnswer) {
      speakJapanese(q.expectedAnswer);
    }

    document.getElementById('btn-submit-answer').classList.add('hidden');
    document.getElementById('btn-show-answer').classList.add('hidden');
    document.getElementById('btn-next-word').classList.remove('hidden');
    return;
  }

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
  if (isConjugationModeActive) {
    const hasMore = conjugationEngine.nextQuestion();
    if (hasMore) {
      renderCurrentCard();
    } else {
      renderConjugationSummary();
    }
    return;
  }
  const hasMore = studyEngine.nextWord();
  if (hasMore) {
    renderCurrentCard();
  } else {
    renderStudySummary();
  }
}

function renderStudySummary() {
  const progress = studyEngine.getProgress();

  document.getElementById('pipeline-stepper').classList.add('hidden');
  document.getElementById('preview-section').classList.add('hidden');
  document.getElementById('mc-options-container').classList.add('hidden');
  document.getElementById('answer-section-inputs').classList.add('hidden');
  document.getElementById('study-summary-actions').classList.remove('hidden');

  document.getElementById('card-prompt-label').textContent = 'KẾT QUẢ HOÀN THÀNH 🏆';
  document.getElementById('card-prompt-text').textContent = `${progress.score} / ${progress.total} câu đúng`;
  document.getElementById('card-prompt-sub').textContent = `Tỷ lệ chính xác: ${Math.round((progress.score / progress.total) * 100)}%`;

  updateSrsHeaderBadges();
}

function exitStudySession() {
  isConjugationModeActive = false;
  document.getElementById('study-view').classList.add('hidden');
  document.getElementById('lesson-picker-view').classList.remove('hidden');
  document.getElementById('answer-section-inputs').classList.remove('hidden');
  document.getElementById('study-summary-actions').classList.add('hidden');
  
  const input = document.getElementById('study-answer-input');
  unbindIme(input);
  updateSrsHeaderBadges();
}

