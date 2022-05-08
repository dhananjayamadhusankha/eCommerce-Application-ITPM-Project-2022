const express = require('express');
const Cart = require('../../models/Cart_Model/cartModel')

const router = express.Router();

//@url           /cart/add
//@description   save items,add items to the cart

// router.route('/cart/add').post((req, res) => {

//     // let cartItem = new Cart(req.body);
//     productId = req.body.productId;
//     productName = req.body.productName;
//     productPrice = req.body.productPrice;
//     quantity = req.body.quantity;

//     const newItems = new Cart({
//         productId,
//         productName,
//         productPrice,
//         quantity
//     });

//     newItems.save().then(() => {

//         res.json("Items Added To Cart");

//     }).catch((err) => {

//         console.log(err);

//     })

// });

router.post('/cart/add', (req, res) => {

    let cartItem = new Cart(req.body);

    cartItem.save((err => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Items Added To Cart"
        });
    }));
});




//@url              /cart/display
//@description      get items,retrieve cart

router.get('/cart/display', (req, res) => {
    Cart.find().exec((err, cartItems) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingcartItems: cartItems
        });
    });
});






//@url              /cart/display
//@description      get specific items,retrieve specific cart items

router.get('/cart/display/:id', (req, res) => {
    let cartId = req.params.id;

    Cart.findById(cartId, (err, cartItem) => {
        if (err) {
            return res.status(400).json({ success: false, err })
        }
        return res.status(200).json({
            success: true,
            cartItem
        });
    });
});










//@url            /cart/update/:id
//@description    update quantity

router.put('/cart/update/:id', (req, res) => {
    Cart.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, cartItems) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            return res.status(200).json({
                success: "Updated Succesfully"
            })
        }

    );
});

//@url            /cart/delete/:id
//@discription    delete items from cart

router.delete('/cart/delete/:id', (req, res) => {
    Cart.findByIdAndDelete(req.params.id).exec((err, deletedItem) => {
        if (err) return res.status(400).json({
            message: "Delete unsuccesful", err
        });
        return res.json({
            message: "Delete Succesfull", deletedItem
        });

    });
});


module.exports = router;