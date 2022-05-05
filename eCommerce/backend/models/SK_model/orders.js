const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema ({
    


    oderId:{
        type: String,
        required: true,
    }, 
    productId:{
        type: String,
        required: true,
    }, 
    productName:{
        type: String,
        required: true,
    }, 
    quantity: {
        type: Number,
        required: true,
    },
    
    productPrice:{
        type: Number,
        required: false,
    },
       
});

module.exports = mongoose.model('Order', orderSchema);