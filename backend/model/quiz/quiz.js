const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  quizNo: {
    type: String,
    required: true,
  },
  quiz: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("Quiz", quizSchema);
