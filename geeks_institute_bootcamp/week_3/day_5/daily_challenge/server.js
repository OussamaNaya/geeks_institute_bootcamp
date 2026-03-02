const crypto = require('crypto');
const path = require('path');
const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.json());

// Serve the game UI
app.use(express.static(path.join(__dirname, 'public')));

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🚀', name: 'Rocket' },
  { emoji: '🍕', name: 'Pizza' },
  { emoji: '🎧', name: 'Headphones' },
  { emoji: '📚', name: 'Books' },
  { emoji: '⚽', name: 'Soccer' },
  { emoji: '🌧️', name: 'Rain' },
  { emoji: '🔥', name: 'Fire' },
  { emoji: '❤️', name: 'Heart' },
  { emoji: '🎮', name: 'Game' }
];

function parseCookies(cookieHeader = '') {
  return cookieHeader
    .split(';')
    .map(v => v.trim())
    .filter(Boolean)
    .reduce((acc, pair) => {
      const idx = pair.indexOf('=');
      if (idx === -1) return acc;
      const key = decodeURIComponent(pair.slice(0, idx).trim());
      const val = decodeURIComponent(pair.slice(idx + 1).trim());
      acc[key] = val;
      return acc;
    }, {});
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateQuestion() {
  const correct = emojis[randomInt(emojis.length)];
  const distractors = shuffle(emojis.filter(e => e.name !== correct.name))
    .slice(0, 3)
    .map(e => e.name);
  const options = shuffle([correct.name, ...distractors]);

  return {
    emoji: correct.emoji,
    correctName: correct.name,
    options
  };
}

// In-memory "state"
// playerId -> { name, score, currentQuestion: { id, correctName } }
const players = new Map();
// leaderboardName -> bestScore
const leaderboard = new Map();

function getOrCreatePlayer(req, res) {
  const cookies = parseCookies(req.headers.cookie || '');
  let playerId = cookies.playerId;

  if (!playerId) {
    playerId = crypto.randomUUID();
    res.setHeader('Set-Cookie', `playerId=${encodeURIComponent(playerId)}; Path=/; SameSite=Lax`);
  }

  if (!players.has(playerId)) {
    players.set(playerId, { name: 'Player', score: 0, currentQuestion: null });
  }

  return { playerId, player: players.get(playerId) };
}

app.get('/api/me', (req, res) => {
  const { playerId, player } = getOrCreatePlayer(req, res);
  res.json({ playerId, name: player.name, score: player.score });
});

app.post('/api/me/name', (req, res) => {
  const { player } = getOrCreatePlayer(req, res);
  const name = String(req.body?.name ?? '').trim();

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  player.name = name.slice(0, 20);
  res.json({ name: player.name, score: player.score });
});

app.get('/api/question', (req, res) => {
  const { player } = getOrCreatePlayer(req, res);
  const q = generateQuestion();
  const questionId = crypto.randomUUID();

  player.currentQuestion = { id: questionId, correctName: q.correctName };

  console.log('New question generated and sent.');
  res.json({
    questionId,
    emoji: q.emoji,
    options: q.options,
    score: player.score
  });
});

app.post('/api/guess', (req, res) => {
  const { player } = getOrCreatePlayer(req, res);
  const questionId = String(req.body?.questionId ?? '');
  const guess = String(req.body?.guess ?? '');

  if (!player.currentQuestion || player.currentQuestion.id !== questionId) {
    return res.status(400).json({ error: 'Invalid or expired question' });
  }

  const correctName = player.currentQuestion.correctName;
  const correct = guess === correctName;

  if (correct) player.score += 1;

  // Save best score to leaderboard under the player's name
  const currentBest = leaderboard.get(player.name) ?? 0;
  if (player.score > currentBest) leaderboard.set(player.name, player.score);

  player.currentQuestion = null;

  res.json({
    correct,
    correctName,
    score: player.score
  });
});

app.get('/api/leaderboard', (req, res) => {
  const top = [...leaderboard.entries()]
    .map(([name, score]) => ({ name, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  res.json(top);
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Emoji Guessing Game running on http://localhost:${PORT}`);
});

