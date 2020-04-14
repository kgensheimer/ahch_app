let mongoose = require('mongoose');

// Patient Schema
let patientSchema = mongoose.Schema({
    patientID: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
    },
    middleInitial: {
        type: String
    },
    lastName: {
        type: String
    },
    guardianID: {
        type: Number
    },
    guardianStaffID: {
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
    languageID: {
        type: Number
    },
    legalStatus: {
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
    countryID: {
        type: Number
    },
    zipcode: {
        type: String
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
    },
    DYFSHistory: {
        type: String
    },
    patientCode: {
        type: String
    },
    createdDate: {
        type: Date
    },
    lastModified: {
        type: Date
    },
    inSchool: {
        type: String
    },
    educationLevel: {
        type: String
    },
    school: {
        type: String
    },
    schoolContact: {
        type: String
    },
    schoolPhone: {
        type: String
    },
    countFamilyMembers: {
        type: Number
    },
    countFamilyInHousehold: {
        type: Number
    },
    countChildren: {
        type: Number
    },
    firstAbuse: {
        type: String
    },
    countIncident: {
        type: Number
    },
    abuseStart: {
        type: Date
    },
    lastContact: {
        type: Date
    },
    referral97: {
        type: String
    },
    referralDate97: {
        type: Date
    }

});

let Patient = module.exports = mongoose.model('Patient', patientSchema);