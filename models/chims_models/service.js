let mongoose = require('mongoose');

// Service Schema
let serviceSchema = mongoose.Schema({
    ServiceID: {
        type: Number
    },
    CaseID: {
        type: Number
    },
    Service: {
        type: String
    },
    ProviderType: {
        type: String
    },
    ServiceTypeID: {
        type: Number
    },
    Agency: {
        type: String
    },
    Address: {
        type: String
    },
    Address2: {
        type: String
    },
    City: {
        type: String
    },
    StateID: {
        type: Number
    },
    ZipCode: {
        type: String
    },
    CountryID: {
        type: Number
    },
    CountyID: {
        type: Number
    },
    Phone: {
        type: String
    },
    Phone2: {
        type: String
    },
    Mobile: {
        type: String
    },
    Email: {
        type: String
    }

});

let Service = module.exports = mongoose.model('Service', serviceSchema);