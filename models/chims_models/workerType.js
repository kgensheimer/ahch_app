let mongoose = require('mongoose');

// Worker Type Schema
let workerTypeSchema = mongoose.Schema({
    workerTypeID: {
        type: Number
    },
    typeName: {
        type: String
    },
    description: {
        type: String
    }

});

let WorkerType = module.exports = mongoose.model('WorkerType', workerTypeSchema);