let mongoose = require('mongoose');

// Recommendation Schema
let recommendationSchema = mongoose.Schema({
    RecommendationID: {
        type: Number
    },
    CaseID: {
        type: Number
    },
    PatientID: {
        type: Number
    },
    CreatedDate: {
        type: Date
    },
    TypeName: {
        type: String
    },
    EvaluationDate: {
        type: Date
    },
    ReferralReason: {
        type: String
    },
    FindingComments: {
        type: String
    },
    RiskFactors: {
        type: String
    },
    RecommendationComments: {
        type: String
    },
    Comments: {
        type: String
    }


});

let Recommendation = module.exports = mongoose.model('Recommendation', recommendationSchema);