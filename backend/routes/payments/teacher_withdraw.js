const router = require('express').Router();
let teacher_withdraw_model = require('../../model/payment/teacher_withdraw');
const timestamp = require('time-stamp');

//route to add all the add withdrwals
router.route('/addWithdraw').post((req,res) => {
    
    const teacherId = req.body.teacherId;
    const accountNumber = req.body.accountNumber;
    const bankName = req.body.bankName;
    const branch = req.body.branch;
    const amount = req.body.amount;
    const timeStamp = timestamp('YYYY/MM/DD:mm:ss')

    const newWithdraw = new teacher_withdraw_model({teacherId, accountNumber, bankName, branch, amount, timeStamp});

    newWithdraw.save()
        .then(() => res.json('Withdrawing Success!'))
        .catch(err => res.status(400).json('Error: '+err));
});
//route to show all the teacher withdrawals
router.route("/viewAllWidrawal/:teacherID").get((req,res) => {
    
    const teacherID = req.params.teacherID;
    teacher_withdraw_model.find({teacherId : teacherID}).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
}); 

module.exports = router;
