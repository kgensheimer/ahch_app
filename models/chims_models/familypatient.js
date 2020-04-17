let mongoose = require('mongoose');

// Family Patient Schema
let familyPatientSchema = mongoose.Schema({
    PatientID: {
        type: Number
    },
    FamilyID: {
        type: Number
    }

});

let FamilyPatient = module.exports = mongoose.model('FamilyPatient', familyPatientSchema);