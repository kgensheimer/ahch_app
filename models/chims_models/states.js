let mongoose = require('mongoose');

// States Schema
let statesSchema = mongoose.Schema({
    StateID: {
        type: Number
    },
    StateCode: {
        type: String
    },
    StateDesc: {
        type: String
    },
    Country: {
        type: String
    }


});

let States = module.exports = mongoose.model('States', statesSchema);