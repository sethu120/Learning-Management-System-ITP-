const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const students_register = new Schema({

    Name : {
        type : String,
        required : true
    },
       
    dateOfBirth : {
        type : String,
        required : true
    },

    gender : {
        type : String,
        required : true
    },
    
    nic : {
        type : String,
        required : true
    },
    
    address: {
        type : String,
        required : true
    },
    
    email : {
        type : String,
        required : true
    },
    
    privetNumber : {
        type : String,
        required : true
    },
    
    homeNumber: {
        type : String,
        required : true
    },
    
    userName : {
        type : String,
        required : true
    },
    
    password: {
        type : String,
        required : true
    },
    
    confirmPassword : {
        type : String,
        required : true
    },
    
    subject : {
        type : Array,
        required : true
    },

    grade : {
        type : String,
        required : true
    },
    
    school : {
        type : String,
        required : true
    },
        
    district: {
        type : String,
        required : true
    },
    
    additionalComment : {
        type : String,
        required : true
    },
    
    registerDate : {
        type : String,
        required : true
    },
    
    signature : {
        type : String,
        required : true
    }


})
//send data to the database routes
const students_registerSchema = mongoose.model("students_register",students_register);

module.exports = students_registerSchema;
