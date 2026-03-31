const express = require('express');
const router = express.Router();

const {
  createStudent,
  updateStudent
} = require('../controllers/studentController');

router.post('/', createStudent);
router.put('/:id', updateStudent);

module.exports = router;