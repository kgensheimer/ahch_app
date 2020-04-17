let mongoose = require('mongoose');

// Counties Schema
let countiesSchema = mongoose.Schema({
    CountyID: {
        type: Number
    },
    CountyCode: {
        type: String
    },
    CountyDesc: {
        type: String
    },
    StateCode: {
        type: String
    },
    Order: {
        type: Number
    }

});

let Counties = module.exports = mongoose.model('Counties', countiesSchema);