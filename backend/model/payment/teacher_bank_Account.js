const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacher_bank_AccountSchema = new Schema({

    teacherId: {
        type: String,
        required: true,
    },

    accountNumber: {
        type: String,
        required: true,
    },

    accountHolder:{
        type: String,
        required: true,
    },

    bankName:{
        type: String,
        required: true
    },

    branch:{
        type: String,
        required: true
    },

    timeStamp:{
        type: String,
        required: true,
    },
});
const teacher_bank_Account_Schema = mongoose.model('teacher_bank_Account', teacher_bank_AccountSchema);
module.exports = teacher_bank_Account_Schema;