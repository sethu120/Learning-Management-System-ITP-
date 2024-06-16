const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userprofile = new Schema({

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

    type:{
        type : String,
        required : true
    },

})
//send data to the database//routes
const profileSchema = mongoose.model("userprofile",userprofile);

module.exports = profileSchema;