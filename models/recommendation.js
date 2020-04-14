let mongoose = require('mongoose');

// Recommendation Schema
let recommendationSchema = mongoose.Schema({
    recommendationID: {
        type: Number
    },
    caseID: {
        type: Number
    },
    patientID: {
        type: Number
    },
    createdDate: {
        type: Date
    },
    typeName: {
        type: String
    },
    evaluationDate: {
        type: Date
    },
    referralReason: {
        type: String
    },
    findingComments: {
        type: String
    },
    riskFactors: {
        type: String
    },
    recommendationComments: {
        type: String
    },
    comments: {
        type: String
    }


});

let Recommendation = module.exports = mongoose.model('Recommendation', recommendationSchema);