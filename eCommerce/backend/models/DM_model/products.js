const mongoose = require('mongoose');

const productSchema = new mongoose.Schema ({
    
    productName:{
        type: String,
        required: true,
    }, 
    quantity: {
        type: Number,
        required: true,
    },
    
    originalTitle:{
        type: String,
        required: true,
    }
    
    // productPrice:{
    //     type: Number,
    //     required: false,
    // },
    
    // marketPrice:{
    //     type: Number,
    //     required: false,
    // },
    
    // brandName: {
    //     type: String,
    //     required: false,
    // },
    
    // warrantYear: {
    //     type: String,
    //     required: false,
    // },
    
    // version: {
    //     type: String,
    //     required: false,
    // } ,
    
    // description:{
    //     type: String,
    //     required: false,
    // },
    
    // coverImage: {
    //     type: String,
    //     required: false,
    // },
    
    // availability:{
    //     type: String,
    //     required: false,
    // },
    
    // averageRating: {   
    //  type: Number,
    //  required: false,  
    // },
    
    // offerPrice :{
    //    type: Number,
    //    required: false,
    //    default : 0
    
    // }
    
});

module.exports = mongoose.model('Product', productSchema);