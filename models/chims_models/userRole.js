let mongoose = require('mongoose');

// User Role Schema
let userRoleSchema = mongoose.Schema({
    roleID: {
        type: Number
    },
    role: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    order: {
        type: Number
    }


});

let UserRole = module.exports = mongoose.model('UserRole', userRoleSchema);