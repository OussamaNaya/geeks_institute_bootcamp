const Student = require('../models/Student');

// Create student
exports.createStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
};

// Update student
exports.updateStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  student.name = req.body.name || student.name;

  // IMPORTANT → déclenche pre('save')
  await student.save();

  res.json(student);
};