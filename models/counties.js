let mongoose = require('mongoose');

// Counties Schema
let countiesSchema = mongoose.Schema({
    countyID: {
        type: Number
    },
    countyCode: {
        type: String
    },
    countyDesc: {
        type: String
    },
    stateCode: {
        type: String
    },
    order: {
        type: Number
    }

});

let Counties = module.exports = mongoose.model('Counties', countiesSchema);