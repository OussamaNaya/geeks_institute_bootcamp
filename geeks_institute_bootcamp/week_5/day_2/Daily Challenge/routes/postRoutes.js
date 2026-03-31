const express = require('express');
const router = express.Router();

const {
  getFullFeed,
  addComment
} = require('../controllers/postController');

router.get('/', getFullFeed);
router.post('/:id/comments', addComment);

module.exports = router;