const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name:{
        type:String
      
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
    address:{
        type:String
    },
    NIC:{
        type:String,
        requried:true
    },
    email:{
        type:String
    }
});

module.exports = mongoose.model('customer',customerSchema);