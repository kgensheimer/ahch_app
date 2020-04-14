let mongoose = require('mongoose');

// Patient Lives With Schema
let patientLivesWithSchema = mongoose.Schema({
    rowID: {
        type: Number,
        required: true
    },
    patientID: {
        type: Number,
        required: true
    },
    relationshipID: {
        type: Number,
        required: true
    }

});

let PatientLivesWith = module.exports = mongoose.model('PatientLivesWith', patientLivesWithSchema);