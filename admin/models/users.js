"use strict"

const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');


//User Schema

const UserSchema = mongoose.Schema ({

    email:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    referralcode: {
        type: String,
        required: true
    },
    referringcode: {
        type: String,
        required: true
    },
    createdtime: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('users', UserSchema);


module.exports.getUserById = function(username, callback){

    const query = {username: username}
  User.findOne(query, callback);
}

module.exports.getUsers = function( callback){

    User.find( callback);
}

module.exports.addUser = function(newUser, callback){

    // bcrypt.genSalt(10, (err, salt) =>{
    //     bcrypt.hash(newUser.password, salt, (err, hash) =>{
    //         if(err) throw err;
            // newUser.password = hash;
            newUser.referringcode = "r3efi4t";
            newUser.save(callback);
    //     });
    // });
}