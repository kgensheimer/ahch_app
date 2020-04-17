let mongoose = require('mongoose');

// Findings Schema
let findingsSchema = mongoose.Schema({
    FindingID: {
        type: Number
    },
    Category: {
        type: String
    },

    Finding: {
        type: String
    },
    Gender: {
        type: String
    },
    Order: {
        type: Number
    }

});

let Findings = module.exports = mongoose.model('Findings', findingsSchema);