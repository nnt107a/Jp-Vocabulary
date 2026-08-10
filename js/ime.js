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

function stripVietnameseAccents(str) {
  if (!str) return str;
  let s = str.normalize('NFC').replace(/\s+/g, '');

  // 1. Tone vowel + same vowel (UniKey outputs áa for asa, ảa for ara, ỏo for oro, óo for oso, etc.)
  s = s.replace(/áa/g, 'asa').replace(/ée/g, 'ese').replace(/íi/g, 'isi').replace(/óo/g, 'oso').replace(/úu/g, 'usu');
  s = s.replace(/àa/g, 'afa').replace(/èe/g, 'efe').replace(/ìi/g, 'ifi').replace(/òo/g, 'ofo').replace(/ùu/g, 'ufu');
  s = s.replace(/ảa/g, 'ara').replace(/ẻe/g, 'ere').replace(/ỉi/g, 'iri').replace(/ỏo/g, 'oro').replace(/ủu/g, 'uru');
  s = s.replace(/ãa/g, 'axa').replace(/ẽe/g, 'exe').replace(/ĩi/g, 'ixi').replace(/õo/g, 'oxo').replace(/ũu/g, 'uxu');
  s = s.replace(/ạa/g, 'aja').replace(/ẹe/g, 'eje').replace(/ịi/g, 'iji').replace(/ọo/g, 'ojo').replace(/ụu/g, 'uju');

  // 2. Residual Kana + UniKey Telex duplicates (e.g. あá -> as, おôt -> oto, おô -> oo)
  s = s.replace(/あá/g, 'as').replace(/あà/g, 'af').replace(/あả/g, 'ar').replace(/あã/g, 'ax').replace(/あạ/g, 'aj');
  s = s.replace(/えé/g, 'es').replace(/えè/g, 'ef').replace(/えẻ/g, 'er').replace(/えẽ/g, 'ex').replace(/えẹ/g, 'ej');
  s = s.replace(/いí/g, 'is').replace(/いì/g, 'if').replace(/いỉ/g, 'ir').replace(/いĩ/g, 'ix').replace(/いị/g, 'ij');
  s = s.replace(/おó/g, 'os').replace(/おò/g, 'of').replace(/おỏ/g, 'or').replace(/おõ/g, 'ox').replace(/おọ/g, 'oj');
  s = s.replace(/うú/g, 'us').replace(/うù/g, 'uf').replace(/うủ/g, 'ur').replace(/うũ/g, 'ux').replace(/うụ/g, 'uj');

  // Kana + circumflex/shifted word
  s = s.replace(/お(?:ô|oô|oo)t/gi, 'oto');
  s = s.replace(/あ(?:â|aâ|aa)t/gi, 'ata');
  s = s.replace(/え(?:ê|eê|ee)t/gi, 'ete');

  s = s.replace(/お[ôốồổỗộ]/gi, 'oo');
  s = s.replace(/あ[âấầẩẫậ]/gi, 'aa');
  s = s.replace(/え[êếềểễệ]/gi, 'ee');

  // 3. Standard UniKey Telex shifts without preceding Kana
  s = s.replace(/(?:oô|oo)t/gi, 'oto');
  s = s.replace(/(?:aâ|aa)t/gi, 'ata');
  s = s.replace(/(?:eê|ee)t/gi, 'ete');
  s = s.replace(/ô([bcdfghjklmnpqrstvwxyz])/gi, 'o$1o');
  s = s.replace(/â([bcdfghjklmnpqrstvwxyz])/gi, 'a$1a');
  s = s.replace(/ê([bcdfghjklmnpqrstvwxyz])/gi, 'e$1e');

  // 4. Tone mark mappings (single characters)
  s = s.replace(/ấ/g, 'aas').replace(/ầ/g, 'aaf').replace(/ẩ/g, 'aar').replace(/ẫ/g, 'aax').replace(/ậ/g, 'aaj');
  s = s.replace(/ế/g, 'ees').replace(/ề/g, 'eef').replace(/ể/g, 'eer').replace(/ễ/g, 'eex').replace(/ệ/g, 'eej');
  s = s.replace(/ố/g, 'oos').replace(/ồ/g, 'oof').replace(/ổ/g, 'oor').replace(/ỗ/g, 'oox').replace(/ộ/g, 'ooj');

  s = s.replace(/ắ/g, 'aws').replace(/ằ/g, 'awf').replace(/ẳ/g, 'awr').replace(/ẵ/g, 'awx').replace(/ặ/g, 'awj');
  s = s.replace(/ớ/g, 'ows').replace(/ờ/g, 'owf').replace(/ở/g, 'owr').replace(/ỡ/g, 'owx').replace(/ợ/g, 'owj');
  s = s.replace(/ứ/g, 'uws').replace(/ừ/g, 'uwf').replace(/ử/g, 'uwr').replace(/ữ/g, 'uwx').replace(/ự/g, 'uwj');

  s = s.replace(/á/g, 'as').replace(/à/g, 'af').replace(/ả/g, 'ar').replace(/ã/g, 'ax').replace(/ạ/g, 'aj');
  s = s.replace(/é/g, 'es').replace(/è/g, 'ef').replace(/ẻ/g, 'er').replace(/ẽ/g, 'ex').replace(/ẹ/g, 'ej');
  s = s.replace(/í/g, 'is').replace(/ì/g, 'if').replace(/ỉ/g, 'ir').replace(/ĩ/g, 'ix').replace(/ị/g, 'ij');
  s = s.replace(/ó/g, 'os').replace(/ò/g, 'of').replace(/ỏ/g, 'or').replace(/õ/g, 'ox').replace(/ọ/g, 'oj');
  s = s.replace(/ú/g, 'us').replace(/ù/g, 'uf').replace(/ủ/g, 'ur').replace(/ũ/g, 'ux').replace(/ũ/g, 'uj');
  s = s.replace(/ý/g, 'ys').replace(/ỳ/g, 'yf').replace(/ỷ/g, 'yr').replace(/ỹ/g, 'yx').replace(/ỵ/g, 'yj');

  // 5. Standalone circumflex, horn, breve, stroke
  s = s.replace(/ô/g, 'oo').replace(/â/g, 'aa').replace(/ê/g, 'ee');
  s = s.replace(/ơ/g, 'o').replace(/ư/g, 'u').replace(/ă/g, 'a');
  s = s.replace(/đ/g, 'd').replace(/Đ/g, 'D');

  // 6. Strip any residual unhandled diacritics
  s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return s;
}

function convertRomajiSmart(text, mode = 'hiragana', finalize = false) {
  if (!text || typeof wanakana === 'undefined') return text;

  // Clean spaces and demangle Telex
  const cleanText = stripVietnameseAccents(text);
  const converter = mode === 'katakana' ? wanakana.toKatakana : wanakana.toHiragana;

  if (finalize) {
    return converter(cleanText);
  }

  // If text ends with a single trailing 'n' or 'N' (and not 'nn' or "n'"), keep the 'n' pending
  const endsWithSingleN = /[a-zA-Z]?[nN]$/.test(cleanText) && !/[nN]{2}$/.test(cleanText) && !/[nN]'$/.test(cleanText);

  let result = '';
  if (endsWithSingleN) {
    const mainPart = cleanText.slice(0, -1);
    const lastChar = cleanText.slice(-1);
    result = converter(mainPart) + lastChar;
  } else {
    result = converter(cleanText);
  }

  // Auto-append a space ' ' after any pending Romaji consonant (e.g. s, t, k, g, r, p, b, d, z, h, f, n)
  // so UniKey immediately commits & resets its internal OS Telex state buffer.
  const endsWithPendingConsonant = /[bcdfghjklmnpqrstvwxyz]$/i.test(result);
  if (endsWithPendingConsonant) {
    return result + ' ';
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
