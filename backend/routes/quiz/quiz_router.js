const express = require('express');
const router = express.Router()
const Quiz = require('../../model/quiz/quiz')

router.get('/', async (req, res) => {
   try{
       const quizes = await Quiz.find()
       res.json(quizes);
   }catch(err){
       res.send('Error', + err)
   }
   
})

router.post("/", async (req, res) => {
    const quiz = new Quiz({
        quizNo: req.body.quizNo,
        quiz: req.body.quiz
    });
  
    try {
      const q1 = await quiz.save();
      res.json(q1);
    } catch (err) {
      res.send("Error");
    }
  });




module.exports = router;
