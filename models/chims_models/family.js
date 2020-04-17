let mongoose = require('mongoose');

// Family Schema
let familySchema = mongoose.Schema({
    FamilyID: {
        type: Number
    },
    FirstName: {
        type: String
    },
    MI: {
        type: String
    },
    LastName: {
        type: String
    },
    RelationshipID: {
        type: Number
    },
    SSN: {
        type: String
    },
    DOB: {
        type: Date
    },
    Gender: {
        type: String
    },
    LegalStatus: {
        type: String
    },
    PrimaryLanguageID: {
        type: Number
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
    CountyID: {
        type: Number
    },
    CountryID: {
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
    },
    SpecialNeeds: {
        type: String
    }

});

let Family = module.exports = mongoose.model('Family', familySchema);