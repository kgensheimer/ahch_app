let mongoose = require('mongoose');

// Worker Type Schema
let workerTypeSchema = mongoose.Schema({
    WorkerTypeID: {
        type: Number
    },
    TypeName: {
        type: String
    },
    Description: {
        type: String
    }

});

let WorkerType = module.exports = mongoose.model('WorkerType', workerTypeSchema);