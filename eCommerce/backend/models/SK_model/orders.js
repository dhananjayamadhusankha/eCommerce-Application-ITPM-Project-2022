const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema ({
    
    productName:{
        type: String,
       
    }, 
    quantity: {
        type: Number,
        required: true,
    },
    
    productPrice:{
        type: Number,
       
    },
       
});

module.exports = mongoose.model('orders', orderSchema);