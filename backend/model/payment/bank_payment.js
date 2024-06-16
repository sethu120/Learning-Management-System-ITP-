const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bank_payment_student = new Schema({
    accountNumber: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    class_id: {
        type: String,
        required: true,
    },

    
    studentID: {
        type: String,
        required: true,
    },

    amount:{
        type: String,
        required: true,
    },

    imageName:{
        type: String,
        required: true
    },

    timeStamp:{
        type: String,
        required: true,
    },
});
const bank_payment_studentSchema = mongoose.model('bank_payment_student', bank_payment_student);
module.exports = bank_payment_studentSchema;