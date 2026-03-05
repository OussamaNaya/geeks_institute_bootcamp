const express = require("express")

const app = express();

const mongoose = require('mongoose');

// The Connection Handshake
mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log('✅ Connection Successful! Node.js is talking to MongoDB.'))
  .catch(err => console.error('❌ Connection Failed:', err));


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`sever is runing in the port ${PORT}!`);
})