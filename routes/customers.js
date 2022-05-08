const express = require('express');
const customers = require('../models/customers');
const Customers = require('../models/customers');

const router = express.Router();

//save customers
router.post('/customer/save',(req,res)=>{
    let newCustomer = new Customers(req.body);

    newCustomer.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Customers saved successfully"
        }); 
    });
});

//get customer method
router.get('/customers',(req,res)=>{
    Customers.find().exec((err,customers) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCustomers:customers
        });
    });
});


//get a specific customer
router.get("/customer/:id",(req,res) =>{
    let customerId = req.params.id;
    
    customers.findById(customerId,(err,customer) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            customer
        });
    });
});

//update customers
router.put('/customer/update/:id',(req,res) =>{
    Customers.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,customer)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

//detele customer
router.delete('/customer/delete/:id',(req,res)=>{
    Customers.findByIdAndRemove(req.params.id).exec((err,deletedCustomer) =>{
        if(err) return res.status(400).json({
            message:"Delete Unsuccesfully",err
        });

        return res.json({
            message:"Delete Succesfully",deletedCustomer
        });
    });
});


module.exports = router;
