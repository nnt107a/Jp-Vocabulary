// IME module powered by WanaKana library with Smart Trailing 'n' protection & Small Kana support

let currentImeMode = 'hiragana'; // 'hiragana' or 'katakana'
let activeInput = null;
let imeActive = false;

function initImeBinding(inputElement, modeBadgeElement) {
  if (!inputElement) return;

  activeInput = inputElement;
  imeActive = true;

  // Try native WanaKana bind first
  if (typeof wanakana !== 'undefined') {
    try {
      wanakana.unbind(inputElement);
      wanakana.bind(inputElement, {
        IMEMode: true,
        toKatakana: currentImeMode === 'katakana'
      });
    } catch (err) {
      console.warn('Native WanaKana bind warning:', err);
    }
  }

  // Remove existing listeners if any
  inputElement.removeEventListener('input', handleImeInput);
  inputElement.addEventListener('input', handleImeInput);

  inputElement.removeEventListener('keydown', handleImeKeydown);
  inputElement.addEventListener('keydown', handleImeKeydown);

  // Blur event converts any leftover trailing 'n' to 'ん'
  inputElement.removeEventListener('blur', handleImeBlur);
  inputElement.addEventListener('blur', handleImeBlur);

  if (modeBadgeElement) {
    updateImeBadge(modeBadgeElement);
  }
}

function unbindIme(inputElement) {
  if (!inputElement) return;
  imeActive = false;
  
  if (typeof wanakana !== 'undefined') {
    try {
      wanakana.unbind(inputElement);
    } catch (err) {}
  }

  inputElement.removeEventListener('input', handleImeInput);
  inputElement.removeEventListener('keydown', handleImeKeydown);
  inputElement.removeEventListener('blur', handleImeBlur);

  if (activeInput === inputElement) {
    activeInput = null;
  }
}

function convertRomajiSmart(text, mode = 'hiragana', finalize = false) {
  if (!text || typeof wanakana === 'undefined') return text;

  const converter = mode === 'katakana' ? wanakana.toKatakana : wanakana.toHiragana;

  if (finalize) {
    return converter(text);
  }

  // If text ends with a single trailing 'n' or 'N' (and not 'nn' or "n'"), keep the 'n' pending
  const endsWithSingleN = /[a-zA-Z]?[nN]$/.test(text) && !/[nN]{2}$/.test(text) && !/[nN]'$/.test(text);

  if (endsWithSingleN) {
    const mainPart = text.slice(0, -1);
    const lastChar = text.slice(-1);
    return converter(mainPart) + lastChar;
  } else {
    return converter(text);
  }
}

function handleImeInput(e) {
  if (!imeActive || typeof wanakana === 'undefined') return;

  const input = e.target;
  const val = input.value;
  if (!val) return;

  const converted = convertRomajiSmart(val, currentImeMode, false);

  if (converted !== val) {
    const selPos = input.selectionStart;
    input.value = converted;
    input.setSelectionRange(input.value.length, input.value.length);
  }
}

function handleImeBlur(e) {
  if (!imeActive || typeof wanakana === 'undefined') return;
  const input = e.target;
  if (input && input.value) {
    input.value = convertRomajiSmart(input.value, currentImeMode, true);
  }
}

function handleImeKeydown(e) {
  if (!imeActive) return;

  // Finalize trailing 'n' if space or enter is pressed
  if (e.key === ' ' || e.key === 'Enter') {
    const input = e.target;
    if (input && input.value) {
      input.value = convertRomajiSmart(input.value, currentImeMode, true);
    }
  }

  // Shift + T / Y / U / O shortcuts for small Kana (っ/ゃ/ゅ/ょ)
  if (e.shiftKey) {
    const key = e.key.toLowerCase();
    let smallKana = '';
    
    if (key === 't') smallKana = currentImeMode === 'katakana' ? 'ッ' : 'っ';
    if (key === 'y') smallKana = currentImeMode === 'katakana' ? 'ャ' : 'ゃ';
    if (key === 'u') smallKana = currentImeMode === 'katakana' ? 'ュ' : 'ゅ';
    if (key === 'o') smallKana = currentImeMode === 'katakana' ? 'ョ' : 'ょ';

    if (smallKana) {
      e.preventDefault();
      insertTextAtCursor(e.target, smallKana);
    }
  }
}

function insertTextAtCursor(input, text) {
  const start = input.selectionStart || input.value.length;
  const end = input.selectionEnd || input.value.length;
  const val = input.value;
  input.value = val.substring(0, start) + text + val.substring(end);
  const newPos = start + text.length;
  input.setSelectionRange(newPos, newPos);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

function setImeMode(mode, inputElement, modeBadgeElement) {
  currentImeMode = mode;
  if (inputElement) {
    initImeBinding(inputElement, modeBadgeElement);
  }
  if (modeBadgeElement) {
    updateImeBadge(modeBadgeElement);
  }
}

function updateImeBadge(modeBadgeElement) {
  if (modeBadgeElement) {
    modeBadgeElement.textContent = currentImeMode === 'katakana' ? 'カ (Katakana)' : 'あ (Hiragana)';
  }
}
