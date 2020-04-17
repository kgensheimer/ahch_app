let mongoose = require('mongoose');

// Risk Factors Schema
let riskFactorsSchema = mongoose.Schema({
    RiskFactorID: {
        type: Number
    },
    Name: {
        type: String
    },
    Description: {
        type: String
    }

});

let RiskFactors = module.exports = mongoose.model('RiskFactors', riskFactorsSchema);