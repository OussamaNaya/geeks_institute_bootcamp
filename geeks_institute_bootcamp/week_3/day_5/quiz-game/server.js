const path = require('path');
const express = require('express');

const app = express();
const PORT = 5001;

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`Quiz game running on http://localhost:${PORT}`);
});

