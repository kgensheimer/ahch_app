let mongoose = require('mongoose');

// Service Schema
let serviceSchema = mongoose.Schema({
    serviceID: {
        type: Number
    },
    caseID: {
        type: Number
    },
    service: {
        type: String
    },
    providerType: {
        type: String
    },
    serviceTypeID: {
        type: Number
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
    zipCode: {
        type: String
    },
    countryID: {
        type: Number
    },
    countyID: {
        type: Number
    },
    phone: {
        type: String
    },
    phone2: {
        type: String
    },
    mobile: {
        type: String
    },
    email: {
        type: String
    }

});

let Service = module.exports = mongoose.model('Service', serviceSchema);