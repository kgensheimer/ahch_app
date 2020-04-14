let mongoose = require('mongoose');

// Risk Factor Schema
let riskFactorSchema = mongoose.Schema({
    riskFactorID: {
        type: Number
    },
    name: {
        type: String
    },
    description: {
        type: String
    }

});

let RiskFactor = module.exports = mongoose.model('RiskFactor', riskFactorSchema);