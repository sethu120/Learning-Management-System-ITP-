const router = require('express').Router();
let bankPayment_model = require('../../model/payment/bank_payment');
const timestamp = require('time-stamp');
//route for student bank payment
router.route('/addBankPayment').post((req,res) => {
    
    const name = req.body.name;
    const imageName = req.body.imageName;
    const accountNumber = req.body.accountNumber;
    const class_id = req.body.class_id;
    const amount = req.body.amount;
    const studentID = req.body.studentID;
    const timeStamp = timestamp('YYYY/MM/DD:mm:ss')

    const payment_saving = new bankPayment_model({accountNumber, name, class_id,studentID, amount, imageName, timeStamp});

    payment_saving.save()
        .then(() => res.json('Payment Done!'))
        .catch(err => res.status(400).json('Error: '+err));
});
  //route to get the student id from database to the bank payments table
router.route("/allBankPayment/:studentID").get((req,res) => {
    
    const studentID = req.params.studentID;
    bankPayment_model.find({studentID : studentID }).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});   

module.exports = router;
