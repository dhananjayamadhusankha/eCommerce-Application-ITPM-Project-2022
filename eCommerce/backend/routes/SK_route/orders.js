const express = require ('express');
const orders = require ('../../models/SK_model/orders');

const router = express.Router();

//save orders 
router.route('orders/save').post((req, res) => {
    
    let newOrders = new carts(req.body);
    newOrders.save((err) => {
        
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

//get orders
router.route('orders/displayOrders').get((req, res) => {
    orders.find().exec((err, carts) => {

        if(err){
            return res.status(400),json({
                error:err
            });
        }
        
        return res.status(200).json({
            success:true,
            existingProducts:orders
        });
    });
});

//get a specific carts
router.route('carts/:orderID').get((req,res)=>{
    let orderID = req.params.orderID;

    orders.findById(orderID,(err,orders)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            orders
        });
    });
 });

 
//update orders
router.route('orders/update/:oredrID').put((req,res)=>{
    orders.findByIdAndUpdate(
        req.params.orderID,{
            $set:req.body
        },
        (err,order)=>{
            
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success: "Update Successfully"
            });
        });
    });


//Delete orders
router.route('orders/delete/:orderID').delete((req,res)=>{
    orders.findByIdAndRemove(req.params.orderID).exec((err,deleteOrder)=>{
        
        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully",err
        });
       
        return res.json({
            message: "Delete Successfull",deleteOrder
        });
    });
 });

module.exports = router;