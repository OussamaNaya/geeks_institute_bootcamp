const mongoose = require('mongoose');

// The Connection Handshake
const connect = () => mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log('✅ Connection Successful! Node.js is talking to MongoDB.'))
  .catch(err => console.error('❌ Connection Failed:', err));


module.exports = connect;