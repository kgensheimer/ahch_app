let mongoose = require('mongoose');

// Recommendation Factor Key Schema
let recommendationFactorKeySchema = mongoose.Schema({
    FactorTypeID: {
        type: Number
    },
    FactorType: {
        type: String
    },
    Description: {
        type: String
    }


});

let RecommendationFactorKey = module.exports = mongoose.model('RecommendationFactorKey', recommendationFactorKeySchema);