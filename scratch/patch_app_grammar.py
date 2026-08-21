# -*- coding: utf-8 -*-
with open(r"d:\CODE\Random\Jp-Vocabulary\js\app.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add isGrammarModeActive and grammarEngine variable definition
old_vars = """let isConjugationModeActive = false;
let jlptEngine = typeof JLPTTestEngine !== 'undefined' ? new JLPTTestEngine() : null;
let isJLPTModeActive = false;
let jlptTimerInterval = null;
let jlptArrangementState = { slots: [], placedChips: [] };"""

new_vars = """let isConjugationModeActive = false;
let jlptEngine = typeof JLPTTestEngine !== 'undefined' ? new JLPTTestEngine() : null;
let isJLPTModeActive = false;
let isGrammarModeActive = false;
let jlptTimerInterval = null;
let jlptArrangementState = { slots: [], placedChips: [] };"""

content = content.replace(old_vars, new_vars)

# 2. Add event listeners for Grammar modal inside setupEventListeners()
old_event_listeners = """  // JLPT Modal Controls
  document.getElementById('btn-open-jlpt-modal')?.addEventListener('click', openJlptModal);
  document.getElementById('jlpt-modal-close')?.addEventListener('click', closeJlptModal);
  document.getElementById('jlpt-modal-done')?.addEventListener('click', closeJlptModal);"""

new_event_listeners = """  // Grammar Modal Controls
  document.getElementById('btn-open-grammar-modal')?.addEventListener('click', openGrammarModal);
  document.getElementById('grammar-modal-close')?.addEventListener('click', closeGrammarModal);
  document.getElementById('grammar-modal-done')?.addEventListener('click', closeGrammarModal);

  document.querySelectorAll('.grammar-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.grammar-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.grammar-tab-content').forEach(c => c.classList.add('hidden'));

      btn.classList.add('active');
      const targetTabId = btn.dataset.tab;
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) targetContent.classList.remove('hidden');

      if (targetTabId === 'tab-grammar-particles') {
        renderGrammarParticlesTab();
      } else if (targetTabId === 'tab-grammar-interrogatives') {
        renderGrammarInterrogativesTab();
      }
    });
  });

  document.querySelectorAll('.pdf-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pdf-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const pdfFile = btn.dataset.pdf;
      const iframe = document.getElementById('grammar-pdf-iframe');
      if (iframe && pdfFile) {
        iframe.src = `public/Grammar/${pdfFile}`;
      }
    });
  });

  document.querySelectorAll('.btn-quick-grammar, [data-grammar-mode]').forEach(card => {
    card.addEventListener('click', (e) => {
      const mode = card.dataset.grammarMode || card.querySelector('.btn-quick-grammar')?.dataset.grammarMode;
      if (mode) {
        closeGrammarModal();
        const modeSelect = document.getElementById('study-mode-select');
        if (modeSelect) modeSelect.value = mode;
        startStudySession();
      }
    });
  });

  // JLPT Modal Controls
  document.getElementById('btn-open-jlpt-modal')?.addEventListener('click', openJlptModal);
  document.getElementById('jlpt-modal-close')?.addEventListener('click', closeJlptModal);
  document.getElementById('jlpt-modal-done')?.addEventListener('click', closeJlptModal);"""

content = content.replace(old_event_listeners, new_event_listeners)

# 3. Add Grammar Mode handling in startStudySession()
old_study_start = """function startStudySession(isRestart = false) {
  const studyModeSelect = document.getElementById('study-mode-select');
  const studyMode = studyModeSelect ? studyModeSelect.value : 'new_lesson_pipeline';

  // JLPT Modes"""

new_study_start = """function startStudySession(isRestart = false) {
  const studyModeSelect = document.getElementById('study-mode-select');
  const studyMode = studyModeSelect ? studyModeSelect.value : 'new_lesson_pipeline';

  // Grammar Practice Modes
  if (studyMode.startsWith('grammar_')) {
    isGrammarModeActive = true;
    isJLPTModeActive = false;
    isConjugationModeActive = false;
    stopJlptTimer();

    const count = (studyMode === 'grammar_mixed_test') ? 25 : 20;
    if (typeof grammarEngine !== 'undefined') {
      grammarEngine.startSession(studyMode, { count });
    }

    launchStudyView(studyMode);
    return;
  }
  isGrammarModeActive = false;

  // JLPT Modes"""

content = content.replace(old_study_start, new_study_start)

# 4. In renderCurrentCard(), add check for isGrammarModeActive
old_render_card = """function renderCurrentCard() {
  if (isJLPTModeActive) {
    renderJLPTCard();
    return;
  }"""

new_render_card = """function renderCurrentCard() {
  if (isGrammarModeActive) {
    renderGrammarCard();
    return;
  }
  if (isJLPTModeActive) {
    renderJLPTCard();
    return;
  }"""

content = content.replace(old_render_card, new_render_card)

# 5. In handleShowAnswer(), add check for isGrammarModeActive
old_show_ans = """function handleShowAnswer() {
  if (isJLPTModeActive) {"""

new_show_ans = """function handleShowAnswer() {
  if (isGrammarModeActive) {
    const q = grammarEngine.getCurrentQuestion();
    if (!q) return;
    grammarEngine.isAnswerRevealed = true;

    const explBox = document.getElementById('jlpt-explanation-container');
    if (explBox) {
      explBox.innerHTML = `<strong>💡 Giải thích chi tiết:</strong><br>${q.explanation}`;
      explBox.classList.remove('hidden');
    }

    const container = document.getElementById('mc-options-container');
    if (container && q.shuffled) {
      container.querySelectorAll('.mc-option-btn').forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.shuffled.correctIndex) {
          btn.classList.add('correct');
        }
      });
    }

    document.getElementById('btn-submit-answer').classList.add('hidden');
    document.getElementById('btn-show-answer').classList.add('hidden');
    document.getElementById('btn-next-word').classList.remove('hidden');
    return;
  }
  if (isJLPTModeActive) {"""

content = content.replace(old_show_ans, new_show_ans)

# 6. In handleNextWord(), add check for isGrammarModeActive
old_next_word = """function handleNextWord() {
  if (isJLPTModeActive) {"""

new_next_word = """function handleNextWord() {
  if (isGrammarModeActive) {
    grammarEngine.nextQuestion();
    if (!grammarEngine.isFinished()) {
      renderCurrentCard();
    } else {
      renderGrammarSummary();
    }
    return;
  }
  if (isJLPTModeActive) {"""

content = content.replace(old_next_word, new_next_word)

# 7. In exitStudySession(), add isGrammarModeActive = false
old_exit = """function exitStudySession() {
  isJLPTModeActive = false;
  isConjugationModeActive = false;"""

new_exit = """function exitStudySession() {
  isGrammarModeActive = false;
  isJLPTModeActive = false;
  isConjugationModeActive = false;"""

content = content.replace(old_exit, new_exit)

# 8. Append Grammar Modal functions, card renderers, and summary renderers to end of app.js
grammar_functions = """

/* ====================================================
   GRAMMAR HANDBOOK & STUDY FUNCTIONS
   ==================================================== */
function openGrammarModal() {
  const modal = document.getElementById('grammar-modal');
  if (modal) {
    modal.classList.add('active');
    renderGrammarParticlesTab();
  }
}

function closeGrammarModal() {
  const modal = document.getElementById('grammar-modal');
  if (modal) modal.classList.remove('active');
}

function renderGrammarParticlesTab() {
  const container = document.getElementById('particles-list-container');
  if (!container || typeof GRAMMAR_DATA === 'undefined') return;

  container.innerHTML = GRAMMAR_DATA.particles.map(p => {
    const usagesHtml = p.usages.map(u => {
      const examplesHtml = u.examples.map(ex => `
        <div class="grammar-example-item">
          <div>
            <span class="jp-text" style="font-weight: 500; font-size: 0.95rem;">${ex.jp}</span>
            <span style="color: var(--text-muted); font-size: 0.85rem; margin-left: 0.5rem;">― ${ex.vn}</span>
          </div>
          <button class="grammar-audio-btn" onclick="speakJapanese('${ex.jp.replace(/'/g, "\\\\'")}')">🔊</button>
        </div>
      `).join('');

      return `
        <div class="grammar-usage-box">
          <div class="grammar-usage-title">${u.label}</div>
          <div class="grammar-formula-badge">${u.formula}</div>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem; line-height: 1.5;">${u.explanation}</div>
          <div>${examplesHtml}</div>
        </div>
      `;
    }).join('');

    const pdfBadges = p.pdfSource.map(pdf => `<span class="jlpt-badge" style="font-size: 0.75rem;">📄 ${pdf}</span>`).join(' ');

    return `
      <div class="grammar-card">
        <div class="grammar-card-header">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div class="grammar-particle-pill" style="background: ${p.color};">${p.particle}</div>
            <div>
              <div style="font-size: 1.1rem; font-weight: 700; color: #fff;">${p.name}</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Phiên âm: <strong>${p.reading || p.particle}</strong> (${p.romaji})</div>
            </div>
          </div>
          <div style="display: flex; gap: 0.35rem; align-items: center;">
            ${pdfBadges}
          </div>
        </div>
        <div>${usagesHtml}</div>
      </div>
    `;
  }).join('');
}

function renderGrammarInterrogativesTab() {
  const container = document.getElementById('interrogatives-list-container');
  if (!container || typeof GRAMMAR_DATA === 'undefined') return;

  container.innerHTML = GRAMMAR_DATA.interrogatives.map(item => {
    const combosHtml = item.combos.map(c => `
      <div class="grammar-usage-box" style="border-left-color: #c084fc;">
        <div class="grammar-usage-title" style="color: #c084fc;">${c.pattern}</div>
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Ý nghĩa: <strong>${c.meaning}</strong></div>
        <div class="grammar-example-item">
          <div>
            <span class="jp-text" style="font-weight: 500;">Q: ${c.exampleQ}</span><br>
            <span class="jp-text" style="color: #38bdf8;">A: ${c.exampleA}</span>
          </div>
          <button class="grammar-audio-btn" onclick="speakJapanese('${c.exampleQ.replace(/'/g, "\\\\'")}')">🔊</button>
        </div>
      </div>
    `).join('');

    const pdfBadges = item.pdfSource && item.pdfSource.length > 0 
      ? item.pdfSource.map(pdf => `<span class="jlpt-badge" style="font-size: 0.75rem;">📄 ${pdf}</span>`).join(' ')
      : '';

    return `
      <div class="grammar-card">
        <div class="grammar-card-header">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div class="grammar-particle-pill" style="background: linear-gradient(135deg, #a855f7, #ec4899); font-size: 1.15rem;">${item.word}</div>
            <div>
              <div style="font-size: 1.1rem; font-weight: 700; color: #fff;">${item.meaningVn}</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Romaji: <strong>${item.romaji}</strong></div>
            </div>
          </div>
          <div>${pdfBadges}</div>
        </div>
        <div>${combosHtml}</div>
      </div>
    `;
  }).join('');
}

function renderGrammarCard() {
  const q = grammarEngine.getCurrentQuestion();
  if (!q) {
    renderGrammarSummary();
    return;
  }

  const progress = grammarEngine.getProgress();
  document.getElementById('study-progress-text').textContent = `Câu ${progress.current} / ${progress.total}`;
  document.getElementById('progress-bar-fill').style.width = `${progress.percentage}%`;

  let badgeLabel = 'Luyện Trợ Từ';
  let badgeClass = 'jlpt-badge-grammar';
  let stageTitle = 'Chọn trợ từ hoặc từ để hỏi thích hợp';
  let promptText = q.sentence || '';
  let promptSub = 'Chọn đáp án chính xác nhất';

  if (q.type === 'particle_fill') {
    badgeLabel = '📝 Điền Trợ Từ';
    badgeClass = 'jlpt-badge-grammar';
    stageTitle = 'Chọn trợ từ thích hợp điền vào chỗ trống （　　）';
    promptText = q.sentence.replace('（　　）', '<span class="grammar-highlight">（　　）</span>');
  } else if (q.type === 'interrogative_fill') {
    badgeLabel = '❓ Nghi Vấn Từ';
    badgeClass = 'jlpt-badge-order';
    stageTitle = 'Chọn từ để hỏi phù hợp với câu trả lời';
    promptText = q.sentence.replace('（　　）', '<span class="grammar-highlight">（　　）</span>');
  } else if (q.type === 'sentence_translation') {
    badgeLabel = '🔄 Dịch Câu Chuẩn Ngữ Pháp';
    badgeClass = 'jlpt-badge-paraphrase';
    stageTitle = 'Chọn câu tiếng Nhật có trợ từ và cấu trúc đúng nhất';
    promptText = q.vietnamese;
    promptSub = 'Dịch câu trên sang tiếng Nhật chuẩn xác';
  } else if (q.type === 'error_correction') {
    badgeLabel = '🔍 Tìm & Sửa Lỗi Trợ Từ';
    badgeClass = 'jlpt-badge-vocab';
    stageTitle = 'Tìm trợ từ dùng sai trong câu và chọn trợ từ đúng';
    promptText = q.sentence;
    promptSub = 'Chọn trợ từ đúng để thay thế lỗi sai';
  }

  document.getElementById('study-stage-text').textContent = stageTitle;
  document.getElementById('card-prompt-label').innerHTML = `<span class="jlpt-badge ${badgeClass}">${badgeLabel}</span>`;
  document.getElementById('card-prompt-text').innerHTML = promptText;
  document.getElementById('card-prompt-sub').textContent = promptSub;

  const previewSec = document.getElementById('preview-section');
  const mcContainer = document.getElementById('mc-options-container');
  const typingInputs = document.getElementById('answer-section-inputs');
  const arrangementSec = document.getElementById('jlpt-arrangement-section');
  const explBox = document.getElementById('jlpt-explanation-container');

  previewSec.classList.add('hidden');
  arrangementSec.classList.add('hidden');
  typingInputs.classList.add('hidden');
  mcContainer.classList.remove('hidden');

  explBox.classList.add('hidden');
  explBox.innerHTML = '';

  const revealedBox = document.getElementById('revealed-answer-box');
  revealedBox.classList.remove('show');

  document.getElementById('btn-submit-answer').classList.add('hidden');
  document.getElementById('btn-show-answer').classList.remove('hidden');
  document.getElementById('btn-next-word').classList.add('hidden');

  // Render Multiple Choice Options
  const opts = q.shuffled ? q.shuffled.options : q.options;
  const correctIdx = q.shuffled ? q.shuffled.correctIndex : q.correct;

  mcContainer.innerHTML = opts.map((opt, idx) => `
    <button class="mc-option-btn" data-index="${idx}">
      <span style="display:inline-block; width:22px; height:22px; line-height:22px; text-align:center; border-radius:50%; background:rgba(255,255,255,0.1); margin-right:8px; font-size:0.85rem;">${idx + 1}</span>
      <span class="jp-text">${opt}</span>
    </button>
  `).join('');

  mcContainer.querySelectorAll('.mc-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const chosenIdx = parseInt(btn.dataset.index);
      const isCorrect = (chosenIdx === correctIdx);

      mcContainer.querySelectorAll('.mc-option-btn').forEach(b => {
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

      grammarEngine.submitAnswer(chosenIdx);

      if (explBox && q.explanation) {
        explBox.innerHTML = `<strong>💡 Giải thích ngữ pháp:</strong><br>${q.explanation}`;
        explBox.classList.remove('hidden');
      }

      document.getElementById('btn-show-answer').classList.add('hidden');
      document.getElementById('btn-next-word').classList.remove('hidden');

      setTimeout(() => {
        if (isCorrect) {
          handleNextWord();
        }
      }, 1300);
    });
  });
}

function renderGrammarSummary() {
  document.getElementById('pipeline-stepper').classList.add('hidden');
  document.getElementById('preview-section').classList.add('hidden');
  document.getElementById('mc-options-container').classList.add('hidden');
  document.getElementById('answer-section-inputs').classList.add('hidden');
  document.getElementById('jlpt-arrangement-section').classList.add('hidden');
  document.getElementById('jlpt-explanation-container').classList.add('hidden');
  document.getElementById('study-summary-actions').classList.remove('hidden');

  const summary = grammarEngine.getSummary();

  document.getElementById('card-prompt-label').innerHTML = `<span class="jlpt-badge">KẾT QUẢ LUYỆN NGỮ PHÁP</span>`;
  document.getElementById('card-prompt-text').innerHTML = `
    <div class="jlpt-score-summary-card">
      <div class="jlpt-rank-badge rank-${summary.grade}">${summary.grade}</div>
      <div style="font-size: 1.8rem; font-weight: 700; margin-bottom: 0.5rem;">${summary.correct} / ${summary.total} Câu Đúng (${summary.percentage}%)</div>
      <div style="font-size: 1.05rem; color: var(--accent-cyan);">${summary.feedback}</div>
    </div>
  `;
  document.getElementById('card-prompt-sub').textContent = `Chúc mừng bạn đã hoàn thành bài luyện tập Trợ từ & Nghi vấn từ!`;
}
"""

content += grammar_functions

with open(r"d:\CODE\Random\Jp-Vocabulary\js\app.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully updated js/app.js with complete grammar features!")
