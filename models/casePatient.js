let mongoose = require('mongoose');

// Case Patient Schema
let casePatientSchema = mongoose.Schema({
    caseID: {
        type: Number,
        required: true
    },
    patientID: {
        type: Number,
        required: true
    },
    medicalRef: {
        type: String
    }

});

let CasePatient = module.exports = mongoose.model('CasePatient', casePatientSchema);