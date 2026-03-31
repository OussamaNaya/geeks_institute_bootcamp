const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  updatedAt: Date
});

// Middleware PRE-SAVE
studentSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Student', studentSchema);