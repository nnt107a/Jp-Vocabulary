// IME module powered by WanaKana library with Smart Trailing 'n' protection, Space protection & Small Kana support

let currentImeMode = 'hiragana'; // 'hiragana' or 'katakana'
let activeInput = null;
let imeActive = false;
let lastInputVal = '';

const telexVowelMap = {
  // Acute (s)
  'á': { base: 'a', key: 's' }, 'é': { base: 'e', key: 's' }, 'í': { base: 'i', key: 's' }, 'ó': { base: 'o', key: 's' }, 'ú': { base: 'u', key: 's' }, 'ý': { base: 'y', key: 's' },
  // Grave (f)
  'à': { base: 'a', key: 'f' }, 'è': { base: 'e', key: 'f' }, 'ì': { base: 'i', key: 'f' }, 'ò': { base: 'o', key: 'f' }, 'ù': { base: 'u', key: 'f' }, 'ỳ': { base: 'y', key: 'f' },
  // Hook (r)
  'ả': { base: 'a', key: 'r' }, 'ẻ': { base: 'e', key: 'r' }, 'ỉ': { base: 'i', key: 'r' }, 'ỏ': { base: 'o', key: 'r' }, 'ủ': { base: 'u', key: 'r' }, 'ỷ': { base: 'y', key: 'r' },
  // Tilde (x)
  'ã': { base: 'a', key: 'x' }, 'ẽ': { base: 'e', key: 'x' }, 'ĩ': { base: 'i', key: 'x' }, 'õ': { base: 'o', key: 'x' }, 'ũ': { base: 'u', key: 'x' }, 'ỹ': { base: 'y', key: 'x' },
  // Dot (j)
  'ạ': { base: 'a', key: 'j' }, 'ẹ': { base: 'e', key: 'j' }, 'ị': { base: 'i', key: 'j' }, 'ọ': { base: 'o', key: 'j' }, 'ụ': { base: 'u', key: 'j' }, 'ỵ': { base: 'y', key: 'j' },
  // Circumflex (a, e, o)
  'â': { base: 'a', key: 'a' }, 'ê': { base: 'e', key: 'e' }, 'ô': { base: 'o', key: 'o' },
  'ấ': { base: 'a', key: 'as' }, 'ầ': { base: 'a', key: 'af' }, 'ẩ': { base: 'a', key: 'ar' }, 'ẫ': { base: 'a', key: 'ax' }, 'ậ': { base: 'a', key: 'aj' },
  'ế': { base: 'e', key: 'es' }, 'ề': { base: 'e', key: 'ef' }, 'ể': { base: 'e', key: 'er' }, 'ễ': { base: 'e', key: 'ex' }, 'ệ': { base: 'e', key: 'ej' },
  'ố': { base: 'o', key: 'os' }, 'ồ': { base: 'o', key: 'of' }, 'ổ': { base: 'o', key: 'or' }, 'ỗ': { base: 'o', key: 'ox' }, 'ộ': { base: 'o', key: 'oj' },
  // Horn/Breve (w)
  'ă': { base: 'a', key: 'w' }, 'ơ': { base: 'o', key: 'w' }, 'ư': { base: 'u', key: 'w' },
  'ắ': { base: 'a', key: 'ws' }, 'ằ': { base: 'a', key: 'wf' }, 'ẳ': { base: 'a', key: 'wr' }, 'ẵ': { base: 'a', key: 'wx' }, 'ặ': { base: 'a', key: 'wj' },
  'ớ': { base: 'o', key: 'ws' }, 'ờ': { base: 'o', key: 'wf' }, 'ở': { base: 'o', key: 'wr' }, 'ỡ': { base: 'o', key: 'wx' }, 'ợ': { base: 'o', key: 'wj' },
  'ứ': { base: 'u', key: 'ws' }, 'ừ': { base: 'u', key: 'wf' }, 'ử': { base: 'u', key: 'wr' }, 'ữ': { base: 'u', key: 'wx' }, 'ự': { base: 'u', key: 'wj' },
  // Stroked d
  'đ': { base: 'd', key: 'd' }
};

function demangleTelex(str, previousVal = '') {
  if (!str) return str;
  let res = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (telexVowelMap[char]) {
      const { base, key } = telexVowelMap[char];
      // If UniKey backspaced previous Kana (e.g. て -> é), restore previous Kana + key
      if (i === 0 && previousVal) {
        res += previousVal + key;
      } else {
        res += base + key;
      }
    } else {
      res += char;
    }
  }
  return res.replace(/\s+/g, '');
}

function initImeBinding(inputElement, modeBadgeElement) {
  if (!inputElement) return;

  activeInput = inputElement;
  imeActive = true;
  lastInputVal = inputElement.value || '';

  // Set input attributes to disable mobile autocorrect & Vietnamese Telex prediction
  inputElement.setAttribute('lang', 'ja');
  inputElement.setAttribute('autocorrect', 'off');
  inputElement.setAttribute('autocapitalize', 'none');
  inputElement.setAttribute('spellcheck', 'false');
  inputElement.setAttribute('autocomplete', 'off');

  // Unbind native wanakana to avoid event conflicts & DOM desync with UniKey
  if (typeof wanakana !== 'undefined') {
    try {
      wanakana.unbind(inputElement);
    } catch (err) {}
  }

  // Bind clean custom listeners
  inputElement.removeEventListener('input', handleImeInput);
  inputElement.addEventListener('input', handleImeInput);

  inputElement.removeEventListener('keydown', handleImeKeydown);
  inputElement.addEventListener('keydown', handleImeKeydown);

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

  inputElement.removeAttribute('lang');
  inputElement.removeAttribute('autocorrect');
  inputElement.removeAttribute('autocapitalize');
  inputElement.setAttribute('spellcheck', 'true');

  inputElement.removeEventListener('input', handleImeInput);
  inputElement.removeEventListener('keydown', handleImeKeydown);
  inputElement.removeEventListener('blur', handleImeBlur);

  if (activeInput === inputElement) {
    activeInput = null;
  }
}

function convertRomajiSmart(text, mode = 'hiragana', finalize = false, previousVal = '') {
  if (!text || typeof wanakana === 'undefined') return text;

  // Demangle any accidental spaces or UniKey Telex accents
  let cleanText = demangleTelex(text, previousVal);
  const converter = mode === 'katakana' ? wanakana.toKatakana : wanakana.toHiragana;

  if (finalize) {
    return converter(cleanText);
  }

  // If text ends with a single trailing 'n' or 'N' (and not 'nn' or "n'"), keep the 'n' pending
  const endsWithSingleN = /[a-zA-Z]?[nN]$/.test(cleanText) && !/[nN]{2}$/.test(cleanText) && !/[nN]'$/.test(cleanText);

  if (endsWithSingleN) {
    const mainPart = cleanText.slice(0, -1);
    const lastChar = cleanText.slice(-1);
    return converter(mainPart) + lastChar;
  } else {
    return converter(cleanText);
  }
}

function handleImeInput(e) {
  if (!imeActive || typeof wanakana === 'undefined') return;

  const input = e.target;
  const val = input.value;
  if (!val) {
    lastInputVal = '';
    return;
  }

  const converted = convertRomajiSmart(val, currentImeMode, false, lastInputVal);

  if (converted !== val) {
    input.value = converted;
    input.setSelectionRange(input.value.length, input.value.length);
  }
  lastInputVal = input.value;
}

function handleImeBlur(e) {
  if (!imeActive || typeof wanakana === 'undefined') return;
  const input = e.target;
  if (input && input.value) {
    input.value = convertRomajiSmart(input.value, currentImeMode, true, lastInputVal);
    lastInputVal = input.value;
  }
}

function handleImeKeydown(e) {
  if (!imeActive) return;

  // Space handling: Disable space completely & transform trailing 'n' into ん / ン
  if (e.key === ' ' || e.code === 'Space') {
    e.preventDefault();
    const input = e.target;
    if (input && input.value) {
      input.value = convertRomajiSmart(input.value, currentImeMode, true, lastInputVal);
      lastInputVal = input.value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
    return;
  }

  // Shift + T / Y / U / O shortcuts for small Kana (っ/ゃ/ゅ/ょ/ー)
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
  lastInputVal = input.value;
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
