let mongoose = require('mongoose');

// Referral Schema
let referralSchema = mongoose.Schema({
    ReferralID: {
        type: Number
    },
    CaseID: {
        type: Number
    },
    Reason: {
        type: String
    },
    Questions: {
        type: String
    },
    Disclosure: {
        type: String
    },
    DisclosureDesc: {
        type: String
    },
    Circumstances: {
        type: String
    },
    Interview: {
        type: String
    },
    InterviewDesc: {
        type: String
    },
    Statements: {
        type: String
    },
    StatementDate: {
        type: Date
    }


});

let Referral = module.exports = mongoose.model('Referral', referralSchema);