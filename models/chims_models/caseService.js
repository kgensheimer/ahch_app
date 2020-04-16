let mongoose = require('mongoose');

// Case Service Schema
let caseServiceSchema = mongoose.Schema({
    caseID: {
        type: Number,
        required: true
    },
    serviceID: {
        type: Number,
        required: true
    }

});

let CaseService = module.exports = mongoose.model('CaseService', caseServiceSchema);