let mongoose = require('mongoose');

// Case Schema
let caseSchema = mongoose.Schema({
    caseID: {
        type: Number,
        required: true
    },
    createdDate: {
        type: Date,
    },
    createdBy: {
        type: String
    },
    statusChangeDate: {
        type: Date
    },
    caseGUID: {
        type: String,
        required: true
    },
    DYFSID: {
        type: String
    },
    prosecutorID: {
        type: String
    },
    medicaidID: {
        type: String
    },
    familyName: {
        type: String
    },
    caseManagerID: {
        type: Number
    },
    statusID: {
        type: Number
    },
    intakeSubmittedDate: {
        type: Date
    },
    caseTypeID: {
        type: Number
    }

});

let Case = module.exports = mongoose.model('Case', caseSchema);