let mongoose = require('mongoose');

// Family Patient Schema
let familyPatientSchema = mongoose.Schema({
    patientID: {
        type: Number
    },
    familyID: {
        type: Number
    }

});

let FamilyPatient = module.exports = mongoose.model('FamilyPatient', familyPatientSchema);