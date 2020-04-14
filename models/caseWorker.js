let mongoose = require('mongoose');

// Case Worker Schema
let caseWorkerSchema = mongoose.Schema({
    caseID: {
        type: Number,
        required: true
    },
    workerID: {
        type: Number,
        required: true
    },
    referer: {
        type: String
    }

});

let CaseWorker = module.exports = mongoose.model('CaseWorker', caseWorkerSchema);