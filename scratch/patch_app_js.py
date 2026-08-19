# -*- coding: utf-8 -*-
import re

with open('js/app.js', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Add global jlptEngine and state
if 'let jlptEngine = new JLPTTestEngine();' not in code:
    code = code.replace(
        "let isConjugationModeActive = false;",
        "let isConjugationModeActive = false;\nlet jlptEngine = typeof JLPTTestEngine !== 'undefined' ? new JLPTTestEngine() : null;\nlet isJLPTModeActive = false;\nlet jlptTimerInterval = null;\nlet jlptArrangementState = { slots: [], placedChips: [] };"
    )

# 2. Add event listeners for JLPT modal in initApp / DOMContentLoaded
jlpt_listeners = """
  // JLPT Modal Controls
  document.getElementById('btn-open-jlpt-modal')?.addEventListener('click', openJlptModal);
  document.getElementById('jlpt-modal-close')?.addEventListener('click', closeJlptModal);
  document.getElementById('jlpt-modal-done')?.addEventListener('click', closeJlptModal);

  document.querySelectorAll('.btn-quick-jlpt, .jlpt-mode-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const mode = card.dataset.mode || card.querySelector('.btn-quick-jlpt')?.dataset.mode;
      if (mode) {
        closeJlptModal();
        const modeSelect = document.getElementById('study-mode-select');
        if (modeSelect) modeSelect.value = mode;
        startStudySession();
      }
    });
  });

  document.getElementById('btn-reset-arrangement')?.addEventListener('click', resetSentenceArrangement);
"""

if "btn-open-jlpt-modal" not in code:
    code = code.replace(
        "document.getElementById('btn-open-conjugation-guide')?.addEventListener('click', openConjugationGuideModal);",
        jlpt_listeners + "\n  document.getElementById('btn-open-conjugation-guide')?.addEventListener('click', openConjugationGuideModal);"
    )

# 3. Update startStudySession
start_session_replacement = """/* Study Session Controller */
function startStudySession(isRestart = false) {
  const studyModeSelect = document.getElementById('study-mode-select');
  const studyMode = studyModeSelect ? studyModeSelect.value : 'new_lesson_pipeline';

  // JLPT Modes
  if (studyMode.startsWith('jlpt_')) {
    isJLPTModeActive = true;
    isConjugationModeActive = false;
    
    let jlptMode = 'grammar_fill';
    if (studyMode === 'jlpt_mock') jlptMode = 'mock_test';
    else if (studyMode === 'jlpt_grammar_fill') jlptMode = 'grammar_fill';
    else if (studyMode === 'jlpt_sentence_arrangement') jlptMode = 'sentence_arrangement';
    else if (studyMode === 'jlpt_paraphrase') jlptMode = 'paraphrase';
    else if (studyMode === 'jlpt_contextual_vocab') jlptMode = 'contextual_vocab';
    else if (studyMode === 'jlpt_kanji_reading') jlptMode = 'kanji_reading';
    else if (studyMode === 'jlpt_kanji_writing') jlptMode = 'kanji_writing';

    if (!jlptEngine) jlptEngine = new JLPTTestEngine();
    jlptEngine.startSession(jlptMode);

    startJlptTimer();
    launchStudyView(studyMode);
    return;
  }
  isJLPTModeActive = false;
  stopJlptTimer();

  if (studyMode === 'verb_conjugation' || studyMode === 'verb_group_id') {"""

code = code.replace(
    """/* Study Session Controller */
function startStudySession(isRestart = false) {
  const studyModeSelect = document.getElementById('study-mode-select');
  const studyMode = studyModeSelect ? studyModeSelect.value : 'new_lesson_pipeline';

  if (studyMode === 'verb_conjugation' || studyMode === 'verb_group_id') {""",
    start_session_replacement
)

# 4. In renderCurrentCard(), add if (isJLPTModeActive) { renderJLPTCard(); return; }
code = code.replace(
    """function renderCurrentCard() {
  if (isConjugationModeActive) {
    renderConjugationCard();
    return;
  }""",
    """function renderCurrentCard() {
  if (isJLPTModeActive) {
    renderJLPTCard();
    return;
  }
  if (isConjugationModeActive) {
    renderConjugationCard();
    return;
  }"""
)

# 5. In exitStudySession(), stop JLPT timer
code = code.replace(
    """function exitStudySession() {
  isConjugationModeActive = false;""",
    """function exitStudySession() {
  isJLPTModeActive = false;
  isConjugationModeActive = false;
  stopJlptTimer();"""
)

# 6. In handleShowAnswer(), handle JLPT mode
code = code.replace(
    """function handleShowAnswer() {
  if (isConjugationModeActive) {""",
    """function handleShowAnswer() {
  if (isJLPTModeActive) {
    const q = jlptEngine.getCurrentQuestion();
    if (!q) return;
    jlptEngine.isAnswerRevealed = true;
    const explBox = document.getElementById('jlpt-explanation-container');
    if (explBox) {
      explBox.innerHTML = `<strong>💡 Giải thích chi tiết:</strong><br>${q.explanation}`;
      explBox.classList.remove('hidden');
    }
    document.getElementById('btn-submit-answer').classList.add('hidden');
    document.getElementById('btn-show-answer').classList.add('hidden');
    document.getElementById('btn-next-word').classList.remove('hidden');
    return;
  }
  if (isConjugationModeActive) {"""
)

# 7. In handleNextWord(), handle JLPT mode
code = code.replace(
    """function handleNextWord() {
  if (isConjugationModeActive) {""",
    """function handleNextWord() {
  if (isJLPTModeActive) {
    const hasMore = jlptEngine.nextQuestion();
    if (hasMore) {
      renderCurrentCard();
    } else {
      renderJLPTSummary();
    }
    return;
  }
  if (isConjugationModeActive) {"""
)

# 8. Add full JLPT helper functions to the end of app.js
jlpt_full_code = """
/* JLPT Test Modal & Session Functions */
function openJlptModal() {
  const modal = document.getElementById('jlpt-test-modal');
  if (modal) modal.classList.add('active');
}

function closeJlptModal() {
  const modal = document.getElementById('jlpt-test-modal');
  if (modal) modal.classList.remove('active');
}

function startJlptTimer() {
  stopJlptTimer();
  const timerBadge = document.getElementById('jlpt-timer-badge');
  const timerDisplay = document.getElementById('jlpt-timer-display');
  
  if (!jlptEngine || jlptEngine.timeRemaining <= 0) {
    if (timerBadge) timerBadge.classList.add('hidden');
    return;
  }

  if (timerBadge) {
    timerBadge.classList.remove('hidden');
    timerBadge.classList.remove('urgent');
  }

  updateJlptTimerDisplay();

  jlptTimerInterval = setInterval(() => {
    if (!jlptEngine) return;
    jlptEngine.timeRemaining--;
    updateJlptTimerDisplay();

    if (jlptEngine.timeRemaining <= 180 && timerBadge) {
      timerBadge.classList.add('urgent');
    }

    if (jlptEngine.timeRemaining <= 0) {
      stopJlptTimer();
      alert('⏰ Đã hết thời gian làm bài thi thử JLPT!');
      renderJLPTSummary();
    }
  }, 1000);
}

function stopJlptTimer() {
  if (jlptTimerInterval) {
    clearInterval(jlptTimerInterval);
    jlptTimerInterval = null;
  }
  const timerBadge = document.getElementById('jlpt-timer-badge');
  if (timerBadge) timerBadge.classList.add('hidden');
}

function updateJlptTimerDisplay() {
  const timerDisplay = document.getElementById('jlpt-timer-display');
  if (!timerDisplay || !jlptEngine) return;

  const mins = Math.floor(jlptEngine.timeRemaining / 60);
  const secs = jlptEngine.timeRemaining % 60;
  timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function renderJLPTCard() {
  const q = jlptEngine.getCurrentQuestion();
  if (!q) {
    renderJLPTSummary();
    return;
  }

  const progress = jlptEngine.getProgress();
  document.getElementById('study-progress-text').textContent = `Câu ${progress.current} / ${progress.total}`;
  document.getElementById('progress-bar-fill').style.width = `${progress.percentage}%`;

  let badgeLabel = 'JLPT N5';
  let badgeClass = 'jlpt-badge-grammar';
  let stageTitle = 'Luyện thi JLPT N5';

  if (q.type === 'grammar_fill') {
    badgeLabel = '文法 — Điền Từ / Trợ Từ';
    badgeClass = 'jlpt-badge-grammar';
    stageTitle = 'Chọn trợ từ hoặc dạng chia phù hợp';
  } else if (q.type === 'sentence_arrangement') {
    badgeLabel = '文の組み立て — Sắp Xếp Câu ★';
    badgeClass = 'jlpt-badge-order';
    stageTitle = 'Xếp từ & tìm từ ở vị trí sao ★';
  } else if (q.type === 'paraphrase') {
    badgeLabel = '言い換え — Chọn Câu Đồng Nghĩa';
    badgeClass = 'jlpt-badge-paraphrase';
    stageTitle = 'Tìm câu có nghĩa tương đương';
  } else if (q.type === 'contextual_vocab') {
    badgeLabel = '文脈語彙 — Chọn Từ Ngữ Cảnh';
    badgeClass = 'jlpt-badge-vocab';
    stageTitle = 'Chọn từ phù hợp tình huống';
  } else if (q.type === 'kanji_reading') {
    badgeLabel = '漢字の読み方 — Đọc Chữ Hán';
    badgeClass = 'jlpt-badge-kanji';
    stageTitle = 'Chọn cách đọc Hiragana đúng';
  } else if (q.type === 'kanji_writing') {
    badgeLabel = '漢字の書き方 — Chọn Chữ Hán';
    badgeClass = 'jlpt-badge-kanji';
    stageTitle = 'Chọn chữ Hán tương ứng';
  }

  document.getElementById('study-stage-text').textContent = stageTitle;
  document.getElementById('card-prompt-label').innerHTML = `<span class="jlpt-badge ${badgeClass}">${badgeLabel}</span>`;
  document.getElementById('card-prompt-sub').textContent = 'Chọn đáp án chính xác nhất';

  const previewSec = document.getElementById('preview-section');
  const mcContainer = document.getElementById('mc-options-container');
  const typingInputs = document.getElementById('answer-section-inputs');
  const arrangementSec = document.getElementById('jlpt-arrangement-section');
  const explBox = document.getElementById('jlpt-explanation-container');

  previewSec.classList.add('hidden');
  explBox.classList.add('hidden');
  explBox.innerHTML = '';

  const revealedBox = document.getElementById('revealed-answer-box');
  revealedBox.classList.remove('show');
  document.getElementById('revealed-main').textContent = '';
  document.getElementById('revealed-sub').textContent = '';

  document.getElementById('btn-submit-answer').classList.add('hidden');
  document.getElementById('btn-show-answer').classList.remove('hidden');
  document.getElementById('btn-next-word').classList.add('hidden');

  if (q.type === 'sentence_arrangement') {
    // SENTENCE ARRANGEMENT INTERACTIVE UI
    mcContainer.classList.add('hidden');
    typingInputs.classList.add('hidden');
    arrangementSec.classList.remove('hidden');

    document.getElementById('card-prompt-text').textContent = 'Hãy xếp các cụm từ theo đúng thứ tự:';

    renderSentenceArrangementUI(q);
  } else {
    // MULTIPLE CHOICE MODES
    arrangementSec.classList.add('hidden');
    typingInputs.classList.add('hidden');
    mcContainer.classList.remove('hidden');

    // Handle Paraphrase Underline formatting
    if (q.type === 'paraphrase' && q.underlined) {
      const formattedSentence = q.sentence.replace(
        `<u>${q.underlined}</u>`,
        `<span class="jlpt-underlined">${q.underlined}</span>`
      );
      document.getElementById('card-prompt-text').innerHTML = formattedSentence;
    } else {
      document.getElementById('card-prompt-text').textContent = q.sentence;
    }

    renderJlptMultipleChoice(q, mcContainer);
  }
}

function renderJlptMultipleChoice(q, container) {
  const opts = q.shuffledOptions.options;
  const correctIdx = q.shuffledOptions.correct;

  container.innerHTML = opts.map((opt, idx) => `
    <button class="mc-option-btn" data-index="${idx}">
      <span style="display:inline-block; width:22px; height:22px; line-height:22px; text-align:center; border-radius:50%; background:rgba(255,255,255,0.1); margin-right:8px; font-size:0.85rem;">${idx + 1}</span>
      ${opt}
    </button>
  `).join('');

  container.querySelectorAll('.mc-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const chosenIdx = parseInt(btn.dataset.index);
      const isCorrect = (chosenIdx === correctIdx);

      container.querySelectorAll('.mc-option-btn').forEach(b => {
        b.disabled = true;
        if (parseInt(b.dataset.index) === correctIdx) {
          b.classList.add('correct');
        }
      });

      if (!isCorrect) {
        btn.classList.add('wrong');
        showFeedback('Chưa chính xác! 💡', false);
      } else {
        showFeedback('Chính xác! 🎉', true);
      }

      jlptEngine.checkAnswer(chosenIdx);

      const explBox = document.getElementById('jlpt-explanation-container');
      if (explBox) {
        explBox.innerHTML = `<strong>💡 Giải thích chi tiết:</strong><br>${q.explanation}`;
        explBox.classList.remove('hidden');
      }

      document.getElementById('btn-show-answer').classList.add('hidden');
      document.getElementById('btn-next-word').classList.remove('hidden');

      setTimeout(() => {
        if (isCorrect) {
          handleNextWord();
        }
      }, 1400);
    });
  });
}

function renderSentenceArrangementUI(q) {
  const previewBox = document.getElementById('arrangement-preview-sentence');
  const chipsBox = document.getElementById('arrangement-chips-container');
  if (!previewBox || !chipsBox) return;

  jlptArrangementState = {
    slots: [null, null, null, null],
    segments: q.segments.map((seg, idx) => ({ text: seg, originalIdx: idx, isUsed: false })),
    starIdx: q.star_index
  };

  updateArrangementView(q);
}

function updateArrangementView(q) {
  const previewBox = document.getElementById('arrangement-preview-sentence');
  const chipsBox = document.getElementById('arrangement-chips-container');
  if (!previewBox || !chipsBox) return;

  const leadText = q.lead ? `<span>${q.lead} </span>` : '';
  const tailText = q.tail ? `<span> ${q.tail}</span>` : '';

  let slotsHtml = `
    <div class="arrangement-slots">
      ${[0, 1, 2, 3].map(slotIdx => {
        const item = jlptArrangementState.slots[slotIdx];
        const isStar = (slotIdx === jlptArrangementState.starIdx);
        const starClass = isStar ? 'star-slot' : '';
        const filledClass = item ? 'filled' : '';
        const displayText = item ? item.text : (isStar ? '★' : '___');
        return `
          <div class="sentence-slot ${starClass} ${filledClass}" data-slot-idx="${slotIdx}" title="${item ? 'Nhấn để gỡ ra' : 'Vị trí trống'}">
            ${displayText}
          </div>
        `;
      }).join('')}
    </div>
  `;

  previewBox.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5rem; flex-wrap:wrap;">
      ${leadText}
      ${slotsHtml}
      ${tailText}
    </div>
  `;

  // Render clickable chips
  chipsBox.innerHTML = jlptArrangementState.segments.map((seg, segIdx) => `
    <button class="word-chip ${seg.isUsed ? 'used' : ''}" data-seg-idx="${segIdx}" ${seg.isUsed ? 'disabled' : ''}>
      <span style="font-size:0.8rem; opacity:0.7;">[${segIdx + 1}]</span>
      ${seg.text}
    </button>
  `).join('');

  // Handle clicking on chips to fill into the first available slot
  chipsBox.querySelectorAll('.word-chip:not(.used)').forEach(chip => {
    chip.addEventListener('click', () => {
      const segIdx = parseInt(chip.dataset.segIdx);
      const emptySlotIdx = jlptArrangementState.slots.findIndex(s => s === null);
      if (emptySlotIdx !== -1) {
        jlptArrangementState.segments[segIdx].isUsed = true;
        jlptArrangementState.slots[emptySlotIdx] = jlptArrangementState.segments[segIdx];
        updateArrangementView(q);
        checkIfAllSlotsFilled(q);
      }
    });
  });

  // Handle clicking on slots to remove placed chips
  previewBox.querySelectorAll('.sentence-slot.filled').forEach(slot => {
    slot.addEventListener('click', () => {
      const slotIdx = parseInt(slot.dataset.slotIdx);
      const item = jlptArrangementState.slots[slotIdx];
      if (item) {
        item.isUsed = false;
        jlptArrangementState.slots[slotIdx] = null;
        updateArrangementView(q);
      }
    });
  });
}

function checkIfAllSlotsFilled(q) {
  const isFilled = jlptArrangementState.slots.every(s => s !== null);
  if (!isFilled) return;

  // Auto check answer once all 4 slots are placed
  const userOrder = jlptArrangementState.slots.map(s => s.originalIdx);
  const result = jlptEngine.checkAnswer(userOrder);

  const explBox = document.getElementById('jlpt-explanation-container');
  if (explBox) {
    explBox.innerHTML = `<strong>💡 Giải thích chi tiết:</strong><br>${q.explanation}`;
    explBox.classList.remove('hidden');
  }

  document.getElementById('btn-show-answer').classList.add('hidden');
  document.getElementById('btn-next-word').classList.remove('hidden');

  if (result.isCorrect) {
    showFeedback('Chính xác 100%! ⭐ 🎉', true);
    setTimeout(() => {
      handleNextWord();
    }, 1500);
  } else if (result.details && result.details.isStarCorrect) {
    showFeedback('Đúng vị trí sao ★! 🎉', true);
    setTimeout(() => {
      handleNextWord();
    }, 1500);
  } else {
    showFeedback('Chưa chính xác! Xem câu mẫu bên dưới 💡', false);
  }
}

function resetSentenceArrangement() {
  const q = jlptEngine.getCurrentQuestion();
  if (q && q.type === 'sentence_arrangement') {
    renderSentenceArrangementUI(q);
    const explBox = document.getElementById('jlpt-explanation-container');
    if (explBox) explBox.classList.add('hidden');
  }
}

function renderJLPTSummary() {
  stopJlptTimer();

  document.getElementById('pipeline-stepper').classList.add('hidden');
  document.getElementById('preview-section').classList.add('hidden');
  document.getElementById('mc-options-container').classList.add('hidden');
  document.getElementById('answer-section-inputs').classList.add('hidden');
  document.getElementById('jlpt-arrangement-section').classList.add('hidden');
  document.getElementById('jlpt-explanation-container').classList.add('hidden');
  document.getElementById('study-summary-actions').classList.remove('hidden');

  const results = jlptEngine.getResults();

  document.getElementById('card-prompt-label').innerHTML = `<span class="jlpt-badge">KẾT QUẢ THI JLPT N5</span>`;
  document.getElementById('card-prompt-text').innerHTML = `
    <div class="jlpt-score-summary-card">
      <div class="jlpt-rank-badge rank-${results.rank}">${results.rank}</div>
      <div style="font-size: 1.8rem; font-weight: 700; margin-bottom: 0.5rem;">${results.score} / ${results.total} Câu Đúng (${results.percentage}%)</div>
      <div style="font-size: 1.1rem; color: var(--accent-cyan);">${results.message}</div>
    </div>
  `;
  document.getElementById('card-prompt-sub').textContent = `Chúc mừng bạn đã hoàn thành bài luyện tập JLPT N5!`;
}
"""

with open('js/app.js', 'w', encoding='utf-8') as f:
    f.write(code + "\n" + jlpt_full_code)

print("Updated js/app.js with JLPT engine integration!")
