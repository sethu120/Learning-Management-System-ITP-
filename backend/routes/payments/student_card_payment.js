const router = require('express').Router();
let cardPayment_model = require('../../model/payment/cardPayment');
const timestamp = require('time-stamp');
//route to add card payments to the database
router.route('/addCardPayment').post((req,res) => {
    
    const cardName = req.body.cardName;
    const cardNumber = req.body.cardNumber;
    const class_id = req.body.class_id;
    const Holder = req.body.Holder;
    const cvv = req.body.cvv;
    const amount = req.body.amount;
    const expireDate = req.body.expireDate;
    const studentID = req.body.studentID;
    const timeStamp = timestamp('YYYY/MM/DD:mm:ss')

    const payment_saving = new cardPayment_model({cardName, cardNumber, class_id,studentID, Holder, cvv, expireDate, timeStamp,amount});

    payment_saving.save()
        .then(() => res.json('Payment Done!'))
        .catch(err => res.status(400).json('Error: '+err));
});
  //get student id from database for visacard payments table
router.route("/allVisaPayment/:studentID").get((req,res) => {
    
    const studentID = req.params.studentID;
    cardPayment_model.find({studentID : studentID , cardName : 'Visa' }).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});   
//route to get the student id from databse for master card table
router.route("/allMasterPayment/:studentID").get((req,res) => {
    
    const studentID = req.params.studentID;
    cardPayment_model.find({studentID : studentID , cardName : 'Master' }).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});   


module.exports = router;
