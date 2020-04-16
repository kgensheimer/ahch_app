let mongoose = require('mongoose');

// Findings Schema
let findingsSchema = mongoose.Schema({
    findingID: {
        type: Number
    },
    category: {
        type: String
    },
    finding: {
        type: String
    },
    gender: {
        type: String
    },
    order: {
        type: Number
    }

});

let Findings = module.exports = mongoose.model('Findings', findingsSchema);