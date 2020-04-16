let mongoose = require('mongoose');

// Case Note Schema
let caseNoteSchema = mongoose.Schema({
    noteID: {
        type: Number,
        required: true
    },
    caseID: {
        type: Number
    },
    createdDate: {
        type: Date
    },
    username: {
        type: String
    },
    comments: {
        type: String
    }

});

let CaseNotes = module.exports = mongoose.model('CaseNotes', caseNoteSchema);