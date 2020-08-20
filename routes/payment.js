"use  strict"

const express = require('express');
const router = express.Router();
var countdown = require('countdown');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 24 * 60 });
const Payment = require('../admin/models/payment');




router.post('/add', (req, res, next) =>{


    let newPayment = new Payment ({
  
        amount: req.body.amount,
        userID: req.body.userID,
        createdtime: new Date().toISOString()

    });

    Payment.addPayment(newPayment, (err, balance) =>{


        if(err){
            console.log(err);
        }else{
            res.json({ success: true, data: balance })
        }
    })


});

router.post('/getbyID/:id',(req, res, next) =>{

    var userID = req.params.id
    // console.log(userID);

    Payment.getPaymentById(userID, (err, balance) =>{

        if(err){
            console.log(err);
        }else{
            res.json({ success: true, data: balance })
        } 
    })
})


router.post('/update/',(req, res, next) =>{


    var userID = req.body.userID;
    var amount = req.body.amount;
    console.log(userID);
    console.log(amount);

    Payment.updatePayment (userID, amount,(err, balance) =>{

        if(err){
            console.log(err);
        }else{
            res.json({ success: true, data: balance })
        } 
    })
})




module.exports = router;