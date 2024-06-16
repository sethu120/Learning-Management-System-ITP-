const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacher_withdrawSchema = new Schema({

    teacherId: {
        type: String,
        required: true,
    },

    accountNumber: {
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

    amount:{
        type: String,
        required: true
    },

    timeStamp:{
        type: String,
        required: true,
    },
});
const teacher_withdraw_Schema = mongoose.model('teacher_withdraw', teacher_withdrawSchema);
module.exports = teacher_withdraw_Schema;