const express = require("express")
const mongoose = require('mongoose');


const app = express();


// The Connection Handshake
mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log('✅ Connection Successful! Node.js is talking to MongoDB.'))
  .catch(err => console.error('❌ Connection Failed:', err));

const studentSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is mandatory'] 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  age: { 
    type: Number, 
    min: [18, 'Students must be at least 18 years old'] 
  }
});

const Student = mongoose.model('Student', studentSchema);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`sever is runing in the port ${PORT}!`);
})