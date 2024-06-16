const express = require("express");
const router = express.Router();
const Student = require("../model/student");

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.send("Error", +err);
  }
  
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (err) {
    res.send("Error", +err);
  }
});

router.post("/", async (req, res) => {
  const student = new Student({
    studentName: req.body.studentName,
    studentID: req.body.studentID,
    subjectName: req.body.subjectName,
  });

  try {
    const s1 = await student.save();
    res.json(s1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
