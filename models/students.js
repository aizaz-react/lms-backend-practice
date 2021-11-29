const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  enrollmentNumber: {
    type: Number,
    min: 1,
    max: 100,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
