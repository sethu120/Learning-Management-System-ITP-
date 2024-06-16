const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  studentID: {
    type: String,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("Student", studentSchema);
