require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const User = require('./models/User');
const Post = require('./models/Post');

const seedData = async () => {
  await connectDB();

  await User.deleteMany();
  await Post.deleteMany();

  const lina = await User.create({
    username: 'LinaDev',
    email: 'lina@test.com'
  });

  const adam = await User.create({
    username: 'AdamCode',
    email: 'adam@test.com'
  });

  await Post.create({
    title: "MongoDB Relationships",
    content: "Today we learned about population...",
    author: lina._id,
    comments: [
      { text: "Great post!", author: adam._id }
    ]
  });

  console.log('Data seeded 🌱');
  process.exit();
};

seedData();