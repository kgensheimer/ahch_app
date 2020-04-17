let mongoose = require('mongoose');

// Service Schedule Schema
let serviceScheduleSchema = mongoose.Schema({
    ServiceScheduleID: {
        type: Number
    },
    CaseID: {
        type: Number
    },
    ServiceID: {
        type: Number
    },
    ReferralType: {
        type: String
    },
    Scheduler: {
        type: String
    },
    Notes: {
        type: String
    },
    ProviderID: {
        type: Number
    },
    ReportSubmitted: {
        type: String
    },
    ReportSubmittedDate: {
        type: Date
    },
    CreatedDate: {
        type: Date
    }

});

let ServiceSchedule = module.exports = mongoose.model('ServiceSchedule', serviceScheduleSchema);