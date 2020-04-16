let mongoose = require('mongoose');

// User Schema
let userSchema = mongoose.Schema({
    userID: {
        type: Number
    },
    username: {
        type: String
    },
    firstName: {
        type: String
    },
    middleInitial: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String
    },
    authType: {
        type: String
    },
    userGUID: {
        type: String
    },
    organizationID: {
        type: Number
    },
    notes: {
        type: String
    },
    role: {
        type: String
    }


});

let User = module.exports = mongoose.model('User', userSchema);