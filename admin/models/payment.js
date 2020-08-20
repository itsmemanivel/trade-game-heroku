"use strict"

const mongoose = require('mongoose');


//Record Schema

const PaymentSchema = mongoose.Schema ({

    amount:{
        type: Number,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    createdtime: {
        type: String,
        required: true
    }
});

const Payment = module.exports = mongoose.model('payments', PaymentSchema);



module.exports.getPaymentById = function(userID, callback){

    const query = {userID: userID}
    Payment.findOne(query, callback);
}

module.exports.addPayment = function(addPayment, callback){

    addPayment.save(callback);
  
}

module.exports.updatePayment = function(userID, amount ,callback){

    
    Payment.updateOne({userID:userID },{$set: {amount: amount}}, callback);

}