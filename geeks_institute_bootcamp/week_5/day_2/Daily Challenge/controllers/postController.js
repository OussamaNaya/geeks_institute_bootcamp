const Post = require('../models/Post');

// 🧠 Deep Populate
exports.getFullFeed = async (req, res) => {
  const posts = await Post.find()
    .populate('author', 'username')
    .populate('comments.author', 'username');

  res.json(posts);
};

// ➕ Ajouter commentaire
exports.addComment = async (req, res) => {
  const { text, userId } = req.body;

  const post = await Post.findById(req.params.id);

  post.comments.push({
    text,
    author: userId
  });

  await post.save();

  res.json(post);
};