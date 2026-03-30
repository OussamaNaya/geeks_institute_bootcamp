const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const cors = require('cors');
app.use(cors());

// GET /api/hello
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello From Express' });
});

// POST /api/world
app.post('/api/world', (req, res) => {
  const body = req.body;
  console.log({ post: body.post });
  res.send(`I received your POST request. This is what you sent me: ${body.post}`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));