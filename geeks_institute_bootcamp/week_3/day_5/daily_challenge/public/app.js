let currentQuestionId = null;

const els = {
  score: document.getElementById('score'),
  emoji: document.getElementById('emoji'),
  options: document.getElementById('options'),
  feedback: document.getElementById('feedback'),
  guessForm: document.getElementById('guessForm'),
  nextBtn: document.getElementById('nextBtn'),
  leaderboard: document.getElementById('leaderboard'),
  refreshLeaderboardBtn: document.getElementById('refreshLeaderboardBtn'),
  playerName: document.getElementById('playerName'),
  saveNameBtn: document.getElementById('saveNameBtn'),
  nameStatus: document.getElementById('nameStatus')
};

function setFeedback(text, type = 'info') {
  els.feedback.textContent = text;
  if (type === 'good') els.feedback.style.color = 'rgba(110,231,255,.95)';
  else if (type === 'bad') els.feedback.style.color = 'rgba(248,113,113,.95)';
  else els.feedback.style.color = 'rgba(255,255,255,.7)';
}

function setScore(score) {
  els.score.textContent = String(score);
}

function renderOptions(options) {
  els.options.innerHTML = '';

  options.forEach((name, idx) => {
    const id = `opt_${idx}`;
    const label = document.createElement('label');
    label.className = 'option';
    label.htmlFor = id;

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'guess';
    input.value = name;
    input.id = id;
    if (idx === 0) input.checked = true;

    const span = document.createElement('span');
    span.textContent = name;

    label.appendChild(input);
    label.appendChild(span);
    els.options.appendChild(label);
  });
}

async function loadMe() {
  const res = await fetch('/api/me');
  const me = await res.json();
  setScore(me.score);
  els.playerName.value = me.name || '';
}

async function saveName() {
  const name = els.playerName.value.trim();
  if (!name) {
    els.nameStatus.textContent = 'Please enter a name first.';
    return;
  }

  const res = await fetch('/api/me/name', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });

  const data = await res.json();

  if (!res.ok) {
    els.nameStatus.textContent = data.error || 'Could not save name.';
    return;
  }

  els.nameStatus.textContent = `Saved as "${data.name}".`;
  setScore(data.score);
}

async function loadQuestion() {
  setFeedback('');
  const res = await fetch('/api/question');
  const data = await res.json();

  currentQuestionId = data.questionId;
  els.emoji.textContent = data.emoji;
  renderOptions(data.options);
  setScore(data.score);
}

async function submitGuess(guess) {
  const res = await fetch('/api/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ questionId: currentQuestionId, guess })
  });

  const data = await res.json();

  if (!res.ok) {
    setFeedback(data.error || 'Something went wrong.', 'bad');
    return;
  }

  setScore(data.score);
  if (data.correct) setFeedback('Correct! +1 point.', 'good');
  else setFeedback(`Wrong. Correct answer was "${data.correctName}".`, 'bad');
}

async function loadLeaderboard() {
  const res = await fetch('/api/leaderboard');
  const data = await res.json();

  els.leaderboard.innerHTML = '';
  data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} — ${item.score}`;
    els.leaderboard.appendChild(li);
  });
}

els.guessForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const fd = new FormData(els.guessForm);
  const guess = String(fd.get('guess') || '');
  await submitGuess(guess);
  await loadLeaderboard();
});

els.nextBtn.addEventListener('click', async () => {
  await loadQuestion();
});

els.refreshLeaderboardBtn.addEventListener('click', async () => {
  await loadLeaderboard();
});

els.saveNameBtn.addEventListener('click', async () => {
  await saveName();
  await loadLeaderboard();
});

(async function init() {
  await loadMe();
  await loadQuestion();
  await loadLeaderboard();
})();

