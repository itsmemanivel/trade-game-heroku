"use  strict"

const express = require('express');
const router = express.Router();
var countdown = require('countdown');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 24 * 60 });
const Record = require('../admin/models/records');








router.post('/post', (req, res, next) =>{


    let newRecord = new Record ({
  
        period: req.body.period,
        number: req.body.number,
        result: req.body.result,
        createdtime: new Date().toISOString()
    });

    Record.addRecord(newRecord, (err, record) =>{

        if(err){
            console.log(err);
        }else{
            res.json({ success: true, data: record })
        }
    })


});

router.get('/get',(req, res, next) =>{

    Record.getRecords( (err, record) =>{

        if(err){
            console.log(err);
        }else{
            res.json({ success: true, data: record })
        } 
    })
})




module.exports = router;