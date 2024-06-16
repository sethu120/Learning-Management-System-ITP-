const router = require('express').Router();
let teacher_bank_Account_model = require('../../model/payment/teacher_bank_Account');
const timestamp = require('time-stamp');
//router to the teacher bank payments 
router.route('/addBankAccount').post((req,res) => {
    
    const teacherId = req.body.teacherId;
    const accountNumber = req.body.accountNumber;
    const accountHolder = req.body.accountHolder;
    const bankName = req.body.bankName;
    const branch = req.body.branch;
    const timeStamp = timestamp('YYYY/MM/DD:mm:ss')

    const newBankAccount = new teacher_bank_Account_model({teacherId, accountNumber, accountHolder, bankName,branch,  timeStamp});

    newBankAccount.save()
        .then(() => res.json('Bank Account Adding Success!'))
        .catch(err => res.status(400).json('Error: '+err));
});
  //get teacher id from database for the teacher_bank_acount_list to show the bank accounts
router.route("/allBankAccount/:teacherID").get((req,res) => {
    
    const teacherID = req.params.teacherID;
    teacher_bank_Account_model.find({teacherId : teacherID}).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});   
//route for the delete the bank account
router.route("/deleteBankAccount/:ID").delete(async (req, res) => {
    var ID = req.params.ID; 
    teacher_bank_Account_model.findByIdAndDelete(ID)
    .then(() => {
        res.status(200).send({status :"Bank Account Deleted"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with Deleting Data",error: err.message});
    });
});
//route for the edit the bank account
router.route("/editBankAccount/:id").put(async (req, res) => {
 
    const editBankAccount = {
        accountNumber: req.body.accountNumber,
        accountHolder: req.body.accountHolder,
        bankName: req.body.bankName,
        branch: req.body.branch
    }

    teacher_bank_Account_model.findByIdAndUpdate(req.params.id,editBankAccount)
    .then(() => {
        res.status(200).send({status :"Bank Account Edit"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with Edit Data",error: err.message});
    });
});

module.exports = router;
