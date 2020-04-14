let mongoose = require('mongoose');

// Family Schema
let familySchema = mongoose.Schema({
    familyID: {
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
    relationshipID: {
        type: Number
    },
    SSN: {
        type: String
    },
    DOB: {
        type: Date
    },
    gender: {
        type: String
    },
    legalStatus: {
        type: String
    },
    primaryLanguageID: {
        type: Number
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
    countyID: {
        type: Number
    },
    countryID: {
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
    },
    specialNeeds: {
        type: String
    }

});

let Family = module.exports = mongoose.model('Family', familySchema);