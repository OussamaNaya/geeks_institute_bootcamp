const axios = require('axios');

const JSONPLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchPosts() {
  const response = await axios.get(JSONPLACEHOLDER_URL);
  return response.data;
}

module.exports = {
  fetchPosts
};

