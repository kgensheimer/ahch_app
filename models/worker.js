let mongoose = require('mongoose');

// Worker Schema
let workerSchema = mongoose.Schema({
    workerID: {
        type: Number
    },
    service: {
        type: String
    },
    workerTypeID: {
        type: Number
    },
    firstName: {
        type: String
    },
    middleInitial: {
        type: String
    },
    lastName: {
        type: String
    },
    agency: {
        type: String
    },
    address: {
        type: String
    },
    address2: {
        type: String
    },
    city: {
        type: String
    },
    stateID: {
        type: Number
    },
    countyID: {
        type: Number
    },
    zipCode: {
        type: String
    },
    countryID: {
        type: Number
    },
    phone: {
        type: String
    },
    ext: {
        type: String
    },
    createdDate: {
        type: Date
    },
    modifiedDate: {
        type: Date
    },
    organizationID: {
        type: Number
    }

});

let Worker = module.exports = mongoose.model('Worker', workerSchema);