let mongoose = require('mongoose');

// Abuse Schema
let abuseSchema = mongoose.Schema({
    abuseID: {
        type: Number,
        required: true
    },
    caseID: {
        type: Number
    },
    patientID: {
        type: Number
    },
    abuseTypeID: {
        type: String
    }

});

let Abuse = module.exports = mongoose.model('Abuse', abuseSchema);