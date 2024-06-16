const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stdSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    age:{
        type: Number,
        required:true
    },
    gender:{
        type: String,
        required:true
    }

})
//send data to the database routes
const Std = mongoose.model("Std",StdSchema);

module.exports = Std;