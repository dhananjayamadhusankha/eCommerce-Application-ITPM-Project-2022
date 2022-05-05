const express = require ('express');
const carts = require ('../../models/SK_model/orders');

const router = express.Router();

//save carts 
router.route('orders/save').post((req, res) => {
    
    let newCarts = new carts(req.body);
    newCarts.save((err) => {
        
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

//get carts
router.route('carts/displayProducts').get((req, res) => {
    carts.find().exec((err, carts) => {

        if(err){
            return res.status(400),json({
                error:err
            });
        }
        
        return res.status(200).json({
            success:true,
            existingProducts:carts
        });
    });
});

//get a specific carts
router.route('carts/:id').get((req,res)=>{
    let id = req.params.id;

    carts.findById(productID,(err,carts)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            carts
        });
    });
 });

 
//update carts
router.route('carts/update/:productID').put((req,res)=>{
    carts.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,product)=>{
            
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success: "Update Successfully"
            });
        });
    });


//Delete carts
router.route('/delete/:productID').delete((req,res)=>{
    carts.findByIdAndRemove(req.params.productID).exec((err,deleteCart)=>{
        
        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully",err
        });
       
        return res.json({
            message: "Delete Successfull",deleteProduct
        });
    });
 });

module.exports = router;