const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Advertise = new Schema({
  teacherId: {type: String, required: true},
  subject: {type: String, required: true},
  contactNo: {type: String, required: true},
  email: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  visibleDays: {type: String, required: true},
  postTime: {type: Date, required: true},
  image: {type: String, required: true},
});

const newAdvertise = mongoose.model("advertise", Advertise);
module.exports = newAdvertise;
