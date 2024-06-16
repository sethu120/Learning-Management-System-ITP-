const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userModel = new Schema({

    id : {
        type : String,
        required : true
    },
       
    Name : {
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
    
    type : {
        type : String,
        required : true
    },
})
    
    
    
    
    
    
    
    
    
    
    
    // podu ewa dann oni
// id name type