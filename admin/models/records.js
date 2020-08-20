"use strict"

const mongoose = require('mongoose');


//Record Schema

const RecordSchema = mongoose.Schema ({

    period:{
        type: Number,
        required: true
    },
    price: {
        type: String,
    },
    number: {
        type: Number,
        required: true
    },
    result: {
        type: String,
        required: true
    },
    createdtime: {
        type: String,
        required: true
    }
});

const Record = module.exports = mongoose.model('records', RecordSchema);


module.exports.getRecords = function(callback){

    Record.find( callback).sort({$natural: -1}).limit(10);
}

module.exports.addRecord = function(newRecord, callback){

    newRecord.save(callback);
  
}

module.exports.getLatestrecord = function (callback) {
 
    Record.find(callback).sort({$natural: -1}).limit(1);
}