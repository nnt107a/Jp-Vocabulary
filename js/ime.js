// IME module powered by WanaKana library with Smart Trailing 'n' protection, Space protection & Small Kana support

let currentImeMode = 'hiragana'; // 'hiragana' or 'katakana'
let activeInput = null;
let imeActive = false;
let lastInputVal = '';

function initImeBinding(inputElement, modeBadgeElement) {
  if (!inputElement) return;

  activeInput = inputElement;
  imeActive = true;
  lastInputVal = inputElement.value || '';

  // Set input attributes to disable mobile autocorrect & prediction
  inputElement.setAttribute('lang', 'ja');
  inputElement.setAttribute('autocorrect', 'off');
  inputElement.setAttribute('autocapitalize', 'none');
  inputElement.setAttribute('spellcheck', 'false');
  inputElement.setAttribute('autocomplete', 'off');

  // Unbind native wanakana to avoid event conflicts & DOM desync
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

  inputElement.removeEventListener('keyup', handleImeKeyup);
  inputElement.addEventListener('keyup', handleImeKeyup);

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
  inputElement.removeEventListener('keyup', handleImeKeyup);
  inputElement.removeEventListener('blur', handleImeBlur);

  if (activeInput === inputElement) {
    activeInput = null;
  }
}

function stripVietnameseAccents(str) {
  if (!str) return str;
  let s = str.normalize('NFC');

  // 1. Kana + UniKey Tone Mark:
  // Since Kana (あ,い,う,え,お) ALREADY includes the vowel, the tone mark represents ONLY the consonant!
  s = s.replace(/([\u3040-\u30ff])[áấắ]/g, '$1s').replace(/([\u3040-\u30ff])[ảẩẳ]/g, '$1r').replace(/([\u3040-\u30ff])[àầằ]/g, '$1f').replace(/([\u3040-\u30ff])[ãẫẵ]/g, '$1x').replace(/([\u3040-\u30ff])[ạậặ]/g, '$1j');
  s = s.replace(/([\u3040-\u30ff])[éế]/g, '$1s').replace(/([\u3040-\u30ff])[ẻể]/g, '$1r').replace(/([\u3040-\u30ff])[èề]/g, '$1f').replace(/([\u3040-\u30ff])[ẽễ]/g, '$1x').replace(/([\u3040-\u30ff])[ẹệ]/g, '$1j');
  s = s.replace(/([\u3040-\u30ff])í/g, '$1s').replace(/([\u3040-\u30ff])ỉ/g, '$1r').replace(/([\u3040-\u30ff])ì/g, '$1f').replace(/([\u3040-\u30ff])ĩ/g, '$1x').replace(/([\u3040-\u30ff])ị/g, '$1j');
  s = s.replace(/([\u3040-\u30ff])[óốớ]/g, '$1s').replace(/([\u3040-\u30ff])[ỏổở]/g, '$1r').replace(/([\u3040-\u30ff])[òồờ]/g, '$1f').replace(/([\u3040-\u30ff])[õỗỡ]/g, '$1x').replace(/([\u3040-\u30ff])[ọộợ]/g, '$1j');
  s = s.replace(/([\u3040-\u30ff])[úứ]/g, '$1s').replace(/([\u3040-\u30ff])[ủử]/g, '$1r').replace(/([\u3040-\u30ff])[ùừ]/g, '$1f').replace(/([\u3040-\u30ff])[ũữ]/g, '$1x').replace(/([\u3040-\u30ff])[ụự]/g, '$1j');

  // 2. Standalone Latin Tone Marks Decoding (when typed without preceding Kana):
  s = s.replace(/ả/g, 'ar').replace(/ẻ/g, 'er').replace(/ỉ/g, 'ir').replace(/ỏ/g, 'or').replace(/ủ/g, 'ur').replace(/ỷ/g, 'yr');
  s = s.replace(/á/g, 'as').replace(/é/g, 'es').replace(/í/g, 'is').replace(/ó/g, 'os').replace(/ú/g, 'us').replace(/ý/g, 'ys');
  s = s.replace(/à/g, 'af').replace(/è/g, 'ef').replace(/ì/g, 'if').replace(/ò/g, 'of').replace(/ù/g, 'uf').replace(/ỳ/g, 'yf');
  s = s.replace(/ã/g, 'ax').replace(/ẽ/g, 'ex').replace(/ĩ/g, 'ix').replace(/õ/g, 'ox').replace(/ũ/g, 'ux').replace(/ỹ/g, 'yx');
  s = s.replace(/ạ/g, 'aj').replace(/ẹ/g, 'ej').replace(/ị/g, 'ij').replace(/ọ/g, 'oj').replace(/ụ/g, 'uj').replace(/ỵ/g, 'yj');

  // 3. If UniKey Telex consumes trailing vowel across a consonant (ata -> ât, oto -> ôt, ete -> êt),
  // restore the trailing vowel if not already followed by one:
  s = s.replace(/â([bcdfghjklmnpqrstvwxyz])(?![aeiouyâêôơưăáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])/gi, 'a$1a');
  s = s.replace(/ô([bcdfghjklmnpqrstvwxyz])(?![aeiouyâêôơưăáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])/gi, 'o$1o');
  s = s.replace(/ê([bcdfghjklmnpqrstvwxyz])(?![aeiouyâêôơưăáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ])/gi, 'e$1e');

  // 4. Fallback NFD decomposition for any remaining accents
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/đ/g, 'd').replace(/Đ/g, 'D')
          .replace(/â/g, 'a').replace(/ê/g, 'e').replace(/ô/g, 'o')
          .replace(/ă/g, 'a').replace(/ơ/g, 'o').replace(/ư/g, 'u');
}

function convertRomajiSmart(text, mode = 'hiragana', finalize = false) {
  if (!text || typeof wanakana === 'undefined') return text;

  // Clean spaces and demangle Telex
  const cleanText = stripVietnameseAccents(text);

  // Collapse terminal 'nn' into "n'" for WanaKana's explicit ん marker
  // (avoids WanaKana producing んん from double-n at end of string)
  const processedText = cleanText.replace(/nn$/i, "n'");
  const converter = mode === 'katakana' ? wanakana.toKatakana : wanakana.toHiragana;

  if (finalize) {
    return converter(processedText);
  }

  // If text ends with a single trailing 'n' or 'N' (and not 'nn' or "n'"), keep the 'n' pending
  const endsWithSingleN = /[a-zA-Z]?[nN]$/.test(processedText) && !/[nN]{2}$/.test(processedText) && !/[nN]'$/.test(processedText);

  let result = '';
  if (endsWithSingleN) {
    const mainPart = processedText.slice(0, -1);
    const lastChar = processedText.slice(-1);
    result = converter(mainPart) + lastChar;
  } else {
    result = converter(processedText);
  }

  return result;
}

function handleImeInput(e) {
  if (!imeActive || typeof wanakana === 'undefined') return;

  const input = e.target;
  const val = input.value;
  if (!val) {
    lastInputVal = '';
    return;
  }

  const converted = convertRomajiSmart(val, currentImeMode, false);

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
    input.value = convertRomajiSmart(input.value, currentImeMode, true);
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
      input.value = convertRomajiSmart(input.value, currentImeMode, true);
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
      return;
    }
  }
}

function handleImeKeyup(e) {
  if (!imeActive || typeof wanakana === 'undefined') return;
  const input = e.target;
  if (!input || !input.value) return;

  const key = (e.key || '').toLowerCase();
  const vowelMap = { 'a': 'a', 'i': 'i', 'u': 'u', 'e': 'e', 'o': 'o' };
  const releasedVowel = vowelMap[key];

  if (releasedVowel) {
    const val = input.value;
    const clean = val.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // If DOM value currently ends with an unconverted Latin consonant
    if (/[bcdfghjklmnpqrstvwxyz]$/i.test(clean)) {
      const appended = val + releasedVowel;
      const converted = convertRomajiSmart(appended, currentImeMode, false);
      if (converted !== val) {
        input.value = converted;
        input.setSelectionRange(input.value.length, input.value.length);
        lastInputVal = input.value;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
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
