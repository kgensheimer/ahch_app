let mongoose = require('mongoose');

// Users Schema
let usersSchema = mongoose.Schema({
    UserID: {
        type: Number
    },
    Username: {
        type: String
    },
    FirstName: {
        type: String
    },
    MI: {
        type: String
    },
    LastName: {
        type: String
    },
    Password: {
        type: String
    },
    AuthType: {
        type: String
    },
    UserGUID: {
        type: String
    },
    OrganizationID: {
        type: Number
    },
    Notes: {
        type: String
    },
    Role: {
        type: String
    }


});

let Users = module.exports = mongoose.model('Users', usersSchema);