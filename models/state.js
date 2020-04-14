let mongoose = require('mongoose');

// States Schema
let stateSchema = mongoose.Schema({
    stateID: {
        type: Number
    },
    stateCode: {
        type: String
    },
    stateDesc: {
        type: String
    },
    country: {
        type: String
    }


});

let State = module.exports = mongoose.model('States', stateSchema);