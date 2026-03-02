const questions = [
  {
    text: 'Which HTTP method is typically used to create a new resource in a REST API?',
    options: ['GET', 'POST', 'PUT', 'DELETE'],
    correctIndex: 1
  },
  {
    text: 'Which method do you use to start an Express app?',
    options: ['app.start()', 'app.run()', 'app.listen()', 'app.init()'],
    correctIndex: 2
  },
  {
    text: 'In Express, which object represents the incoming HTTP request?',
    options: ['req', 'res', 'app', 'server'],
    correctIndex: 0
  },
  {
    text: 'What is the default port often used in development for Express apps?',
    options: ['80', '3000', '22', '8080'],
    correctIndex: 1
  },
  {
    text: 'Which middleware parses incoming JSON bodies in Express 4+?',
    options: ['express.json()', 'express.body()', 'bodyParser.json()', 'app.json()'],
    correctIndex: 0
  }
];

let currentIndex = 0;
let score = 0;
let answered = false;

const els = {
  score: document.getElementById('score'),
  questionText: document.getElementById('questionText'),
  answersForm: document.getElementById('answersForm'),
  submitBtn: document.getElementById('submitBtn'),
  feedback: document.getElementById('feedback'),
  quizCard: document.getElementById('quizCard'),
  resultCard: document.getElementById('resultCard'),
  finalScore: document.getElementById('finalScore'),
  restartBtn: document.getElementById('restartBtn')
};

function renderQuestion() {
  answered = false;
  const q = questions[currentIndex];

  els.questionText.textContent = `Question ${currentIndex + 1}/${questions.length}: ${q.text}`;
  els.answersForm.innerHTML = '';
  els.feedback.textContent = '';

  q.options.forEach((opt, idx) => {
    const id = `opt_${idx}`;
    const wrapper = document.createElement('label');
    wrapper.className = 'answer-option';
    wrapper.htmlFor = id;

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
    input.id = id;
    input.value = String(idx);
    if (idx === 0) input.checked = true;

    const span = document.createElement('span');
    span.textContent = opt;

    wrapper.appendChild(input);
    wrapper.appendChild(span);
    els.answersForm.appendChild(wrapper);
  });
}

function updateScore() {
  els.score.textContent = String(score);
}

function handleSubmit() {
  if (answered) {
    // If already answered, go to next question or finish
    currentIndex += 1;
    if (currentIndex >= questions.length) {
      showResult();
    } else {
      renderQuestion();
      els.submitBtn.textContent = 'Submit answer';
    }
    return;
  }

  const data = new FormData(els.answersForm);
  const selected = data.get('answer');
  if (selected === null) {
    els.feedback.textContent = 'Please choose an answer.';
    return;
  }

  const q = questions[currentIndex];
  const selectedIndex = Number(selected);

  if (selectedIndex === q.correctIndex) {
    els.feedback.textContent = 'Correct! 🎉';
    score += 1;
    updateScore();
  } else {
    els.feedback.textContent = `Wrong. Correct answer: "${q.options[q.correctIndex]}".`;
  }

  answered = true;
  els.submitBtn.textContent =
    currentIndex === questions.length - 1 ? 'See result' : 'Next question';
}

function showResult() {
  els.quizCard.classList.add('hidden');
  els.resultCard.classList.remove('hidden');
  els.finalScore.textContent = `You scored ${score} out of ${questions.length}.`;
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  updateScore();
  els.resultCard.classList.add('hidden');
  els.quizCard.classList.remove('hidden');
  els.submitBtn.textContent = 'Submit answer';
  renderQuestion();
}

els.submitBtn.addEventListener('click', handleSubmit);
els.restartBtn.addEventListener('click', restartQuiz);

// Init
updateScore();
renderQuestion();

