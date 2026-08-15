/**
 * Verb Conjugation Engine & Helper Logic
 * Handles dynamic question generation, rule breakdown explanations, and verb group quizzes.
 */

class ConjugationEngine {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.isAnswerRevealed = false;
  }

  /**
   * Start a conjugation training session.
   * @param {Array} verbList Filtered verb list or all verbs from VERB_CONJUGATION_DATA
   * @param {String} formFilter Optional form ID filter (e.g. 'nai', 'te', 'ta', 'masu', or 'all')
   */
  startSession(verbList = VERB_CONJUGATION_DATA.verbs, formFilter = 'all') {
    if (!verbList || verbList.length === 0) {
      verbList = VERB_CONJUGATION_DATA.verbs;
    }

    const availableForms = VERB_CONJUGATION_DATA.forms.filter(f => f.id !== 'dictionary');
    this.questions = [];

    // Shuffle verbs
    const shuffledVerbs = [...verbList].sort(() => Math.random() - 0.5);

    shuffledVerbs.forEach(verb => {
      let targetForms = availableForms;
      if (formFilter && formFilter !== 'all') {
        targetForms = availableForms.filter(f => f.id === formFilter);
      } else {
        // Exclude group identification when practicing all conjugation forms
        targetForms = availableForms.filter(f => f.id !== 'group');
      }

      // Generate questions for ALL target forms to cover every single case
      targetForms.forEach(form => {
        let expectedAnswer = "";
        let promptText = "";
        let ruleExplanation = "";

        if (form.id === 'group') {
          expectedAnswer = `Nhóm ${verb.group}`;
          promptText = `Nhóm Động Từ của "${verb.dictionary}" (${verb.vietnamese})`;
          ruleExplanation = this.getGroupExplanation(verb);
        } else {
          expectedAnswer = verb.forms[form.id] || "";
          promptText = `Chia động từ "${verb.dictionary}" (${verb.vietnamese}) sang ${form.name}`;
          ruleExplanation = this.getConjugationRuleExplanation(verb, form.id);
        }

        if (expectedAnswer) {
          this.questions.push({
            verb: verb,
            targetForm: form,
            prompt: promptText,
            expectedAnswer: expectedAnswer,
            explanation: ruleExplanation,
            isMultipleChoice: form.id === 'group'
          });
        }
      });
    });

    // Shuffle all questions
    this.questions.sort(() => Math.random() - 0.5);
    this.currentIndex = 0;
    this.score = 0;
    this.isAnswerRevealed = false;
    return this.questions.length > 0;
  }

  getCurrentQuestion() {
    if (this.currentIndex >= this.questions.length) return null;
    return this.questions[this.currentIndex];
  }

  checkAnswer(userAnswer) {
    const q = this.getCurrentQuestion();
    if (!q) return { isCorrect: false, question: null };

    let isCorrect = false;
    if (q.targetForm.id === 'group') {
      const normUser = userAnswer.toString().trim();
      isCorrect = normUser.includes(q.verb.group.toString()) || normUser === `Nhóm ${q.verb.group}`;
    } else {
      const normUser = normalizeJapanese(userAnswer);
      const normExpected = normalizeJapanese(q.expectedAnswer);
      isCorrect = (normUser === normExpected);
    }

    if (isCorrect && !this.isAnswerRevealed) {
      this.score++;
    }
    this.isAnswerRevealed = true;

    return {
      isCorrect: isCorrect,
      question: q,
      score: this.score,
      total: this.questions.length
    };
  }

  nextQuestion() {
    this.currentIndex++;
    this.isAnswerRevealed = false;
    return this.currentIndex < this.questions.length;
  }

  getGroupExplanation(verb) {
    if (verb.group === 1) {
      return `💡 **Nhóm 1 (V1)**: Các động từ có đuôi thuộc cột う (う, く, ぐ, す, つ, ぬ, ぶ, む, る). Ví dụ: ${verb.dictionary}.`;
    } else if (verb.group === 2) {
      return `💡 **Nhóm 2 (V2)**: Các động từ tận cùng bằng る, trước る là âm thuộc cột い hoặc え (e.g. たべる, ねる, みる, おきる).`;
    } else {
      return `💡 **Nhóm 3 (V3)**: Động từ bất quy tắc chỉ gồm **くる** (Đến) và **する** (Làm).`;
    }
  }

  getConjugationRuleExplanation(verb, formId) {
    const g = verb.group;
    const base = verb.dictionary;

    if (verb.note) {
      return `💡 **Lưu ý đặc biệt**: ${verb.note}`;
    }

    switch (formId) {
      case 'nai':
        if (g === 1) {
          if (base.endsWith('う')) return `💡 **Nhóm 1 (đuôi う)**: Đổi う thành **わ** + ない ➔ **${verb.forms.nai}**.`;
          const lastChar = base.slice(-1);
          return `💡 **Nhóm 1**: Đổi âm đuôi thuộc cột う (${lastChar}) sang cột あ + ない ➔ **${verb.forms.nai}**.`;
        } else if (g === 2) {
          return `💡 **Nhóm 2**: Bỏ る + ない ➔ **${verb.forms.nai}**.`;
        } else {
          return `💡 **Nhóm 3**: くる ➔ **こない**, する ➔ **しない**.`;
        }

      case 'masu':
        if (g === 1) {
          return `💡 **Nhóm 1**: Đổi âm đuôi cột う sang cột い + ます ➔ **${verb.forms.masu}**.`;
        } else if (g === 2) {
          return `💡 **Nhóm 2**: Bỏ る + ます ➔ **${verb.forms.masu}**.`;
        } else {
          return `💡 **Nhóm 3**: くる ➔ **きます**, する ➔ **します**.`;
        }

      case 'te':
      case 'ta':
        const ending = formId === 'te' ? 'て/で' : 'た/だ';
        if (g === 1) {
          if (base === 'いく') return `💡 **Ngoại lệ Nhóm 1**: いく chia thể て/た là **いって / いった**.`;
          if (base.endsWith('く')) return `💡 **Nhóm 1 (く)**: く ➔ **い${formId === 'te' ? 'て' : 'た'}** (e.g. ${verb.forms[formId]}).`;
          if (base.endsWith('ぐ')) return `💡 **Nhóm 1 (ぐ)**: ぐ ➔ **い${formId === 'te' ? 'で' : 'だ'}** (e.g. ${verb.forms[formId]}).`;
          if (base.endsWith('す')) return `💡 **Nhóm 1 (す)**: す ➔ **し${formId === 'te' ? 'て' : 'た'}** (e.g. ${verb.forms[formId]}).`;
          if (/[うつる]$/.test(base)) return `💡 **Nhóm 1 (う/つ/る)**: Đổi đuôi thành **っ${formId === 'te' ? 'て' : 'た'}** (e.g. ${verb.forms[formId]}).`;
          if (/[むぶぬ]$/.test(base)) return `💡 **Nhóm 1 (む/ぶ/ぬ)**: Đổi đuôi thành **ん${formId === 'te' ? 'で' : 'だ'}** (e.g. ${verb.forms[formId]}).`;
        } else if (g === 2) {
          return `💡 **Nhóm 2**: Bỏ る + ${ending} ➔ **${verb.forms[formId]}**.`;
        } else {
          return `💡 **Nhóm 3**: くる ➔ **${formId === 'te' ? 'きて' : 'きた'}**, する ➔ **${formId === 'te' ? 'して' : 'した'}**.`;
        }

      default:
        return `💡 Quy tắc biến đổi động từ Nhóm ${g} cho thể ${formId}.`;
    }
  }
}

const conjugationEngine = new ConjugationEngine();
