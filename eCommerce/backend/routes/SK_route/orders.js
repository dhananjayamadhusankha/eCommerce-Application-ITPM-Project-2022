const express = require ('express');
const orders = require ('../../models/SK_model/orders');
const Orders = require ('../../models/SK_model/orders');

const router = express.Router();

//save orders 
router.route('/order/save').post((req, res) => {
     let newOrder = new orders(req.body);

    newOrder.save((err) => {
        
        if (err) {
            return res.status(400).json({
                error: err
            });
        }

        return res.status (200).json({
            success: "Order save successfully"
        });
    });
});

//get orders
router.get('/orders',(req,res)=>{
    Orders.find().exec((err,orders) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingOrders:orders
        });
    });
});

//get a specific order
router.get("/order/:id",(req,res) =>{
    let orderId = req.params.id;

    orders.findById(orderId,(err,order)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            order
        });
    });
 });

 
//update orders
router.put('/order/update/:id',(req,res) =>{
    Orders.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,order)=>{
            
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success: "Updated Successfully"
            });
        

        });
    });


//Delete orders
router.delete('/order/delete/:id',(req,res)=>{
    Orders.findByIdAndRemove(req.params.id).exec((err,deletedOrder)=>{
        
        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully",err
        });
       
        return res.json({
            message: "Deleted Successfull",deletedOrder
        });
    });
 });

module.exports = router;