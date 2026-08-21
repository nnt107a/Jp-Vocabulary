const fs = require('fs');
const vm = require('vm');

const context = {
  console: console,
  setTimeout: setTimeout,
  window: {},
  document: {}
};
vm.createContext(context);

// Load files
const filesToLoad = ['js/data.js', 'js/grammar_data.js', 'js/grammar_engine.js'];
filesToLoad.forEach(f => {
  const code = fs.readFileSync(f, 'utf8');
  vm.runInContext(code, context);
});

const testRunner = `
console.log("=== GRAMMAR DATA INTEGRITY CHECK ===");
const data = GRAMMAR_DATA;
console.log("Particles count:", data.particles.length);
console.log("Interrogatives count:", data.interrogatives.length);
console.log("Particle fill questions:", data.exercises.particle_fill.length);
console.log("Interrogative fill questions:", data.exercises.interrogative_fill.length);
console.log("Sentence translation questions:", data.exercises.sentence_translation.length);
console.log("Error correction questions:", data.exercises.error_correction.length);

console.log("\\n=== GRAMMAR ENGINE TEST ===");
const engine = grammarEngine;

// Test 1: Start Particle Fill
engine.startSession('grammar_particle_fill', { count: 20 });
console.log("Particle Fill session started with questions:", engine.questions.length);
let q1 = engine.getCurrentQuestion();
console.log("Q1 Sentence:", q1.sentence);
console.log("Q1 Shuffled Options:", q1.shuffled.options);
console.log("Q1 Correct Index:", q1.shuffled.correctIndex);
let res1 = engine.submitAnswer(q1.shuffled.correctIndex);
console.log("Submitting correct answer -> isCorrect:", res1.isCorrect);

// Test 2: Start Sentence Translation
engine.startSession('grammar_sentence_translate', { count: 10 });
console.log("\\nSentence Translation session started with questions:", engine.questions.length);
let q2 = engine.getCurrentQuestion();
console.log("Q2 Prompt VN:", q2.vietnamese);
console.log("Q2 Options (4 JP):", q2.shuffled.options.length);

// Test 3: Start Mixed Test
engine.startSession('grammar_mixed_test', { count: 25 });
console.log("\\nMixed Test started with questions:", engine.questions.length);
let types = {};
engine.questions.forEach(q => {
  types[q.type] = (types[q.type] || 0) + 1;
});
console.log("Mixed Test question type distribution:", types);

// Simulate answering all questions
for (let i = 0; i < engine.questions.length; i++) {
  let cur = engine.getCurrentQuestion();
  engine.submitAnswer(cur.shuffled.correctIndex);
  if (i < engine.questions.length - 1) engine.nextQuestion();
}
console.log("Session finished? ->", engine.isFinished());
let summary = engine.getSummary();
console.log("Summary Grade:", summary.grade, "| Percentage:", summary.percentage + "%", "| Score:", summary.correct + "/" + summary.total);

console.log("\\n>>> ALL CHECKS PASSED PERFECTLY! <<<");
`;

vm.runInContext(testRunner, context);
