let mongoose = require('mongoose');

// Case Suspect Schema
let caseSuspectSchema = mongoose.Schema({
    caseID: {
        type: Number,
        required: true
    },
    suspectID: {
        type: Number,
        required: true
    }

});

let CaseSuspect = module.exports = mongoose.model('CaseSuspect', caseSuspectSchema);