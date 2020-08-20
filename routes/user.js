"use  strict"

const express = require('express');
const router = express.Router();
var countdown = require('countdown');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 24 * 60 });
const User = require('../admin/models/users');




router.post('/post', (req, res, next) =>{


    let newUser = new User ({
  
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        referralcode: req.body.referralcode,
        createdtime: new Date().toISOString()

    });

    User.addUser(newUser, (err, user) =>{


        if(err){
            console.log(err);
        }else{
            res.json({ success: true, data: user })
        }
    })


});

router.post('/getbyID/',(req, res, next) =>{

    var username = req.body.username
    console.log(username);

    User.getUserById(username, (err, user) =>{

        if(err){
            console.log(err);
        }else{
            res.json({ success: true, data: user })
        } 
    })
})


router.get('/getall',(req, res, next) =>{


    User.getUsers((err, user) =>{

        if(err){
            console.log(err);
        }else{
            res.json({ success: true, data: user })
        } 
    })
})




module.exports = router;