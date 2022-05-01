const express = require ('express');
const products = require ('../../models/DM_model/products');

const router = express.Router();

//save products 
router.route('/save').post((req, res) => {
    
    let newProducts = new products(req.body);
    newProducts.save((err) => {
        
        if (err) {
            return res.status(400).json({
                error: err
            });
        }

        return res.status (200).json({
            success: "Product save successfully"
        });
    });
});

//get products
router.route('/display').get((req, res) => {
    products.find().exec((err, products) => {

        if(err){
            return res.status(400),json({
                error:err
            });
        }
        
        return res.status(200).json({
            success:true,
            existingProducts:products
        });
    });
});

//get a specific products
router.route('/display/:id').get((req,res)=>{
    let productID = req.params.id;

    products.findById(productID,(err,products)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            products
        });
    });
 });

 
//update products
router.route('/update/:id').put((req,res)=>{
    products.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,products)=>{
            
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success: "Update Successfully"
            });
        });
    });


//Delete products
router.route('/delete/:id').delete((req,res)=>{
    products.findByIdAndRemove(req.params.productID).exec((err,deleteProduct)=>{
        
        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully",err
        });
       
        return res.json({
            message: "Delete Successfull",deleteProduct
        });
    });
 });

module.exports = router;