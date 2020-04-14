let mongoose = require('mongoose');

// Evaluation Schema
let evaluationSchema = mongoose.Schema({
    evaluationID: {
        type: Number
    },
    caseID: {
        type: Number
    },
    patientID: {
        type: Number
    },
    evalType: {
        type: String
    },
    evalDate: {
        type: Date
    },
    firstName: {
        type: String
    },
    middleInitial: {
        type: String
    },
    lastName: {
        type: String
    }

});

let Evaluation = module.exports = mongoose.model('Evaluation', evaluationSchema);