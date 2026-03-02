const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();
const PORT = 5000;

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Posts successfully retrieved from JSONPlaceholder and sent to client.');
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error.message || error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.listen(PORT, () => {
  console.log(`CRUD API server running on http://localhost:${PORT}`);
});

