const express = require('express');
const router = express.Router()
const Answer = require('../model/answer')

router.get('/', async (req, res) => {
   try{
       const answers = await Answer.find()
       res.json(answers);
   }catch(err){
       res.send('Error', + err)
   }
   
})

router.post("/", async (req, res) => {
    const answer = new Answer({
      answer: req.body.answer
    });
  
    try {
      const a1 = await answer.save();
      res.json(a1);
    } catch (err) {
      res.send("Error");
    }
  });




module.exports = router;