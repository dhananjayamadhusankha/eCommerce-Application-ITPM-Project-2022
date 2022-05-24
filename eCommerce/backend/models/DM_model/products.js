const mongoose = require('mongoose');

const productSchema = new mongoose.Schema ({
    
    productName:{
        type: String,
        required: true,
    }, 

    topic:{
        type:String,
        required:true
    },

    quantity: {
        type: Number,
        required: true,
    },
   
    description:{
        type:String,
        required:true
    },

    productCategory:{
        type:String,
        required:true
    },

    availability:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:false
    }
    
});

module.exports = mongoose.model('Product', productSchema);