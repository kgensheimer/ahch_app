let mongoose = require('mongoose');

// Service Schedule Schema
let serviceScheduleSchema = mongoose.Schema({
    serviceScheduleID: {
        type: Number
    },
    caseID: {
        type: Number
    },
    serviceID: {
        type: Number
    },
    referralType: {
        type: String
    },
    scheduler: {
        type: String
    },
    notes: {
        type: String
    },
    providerID: {
        type: Number
    },
    reportSubmitted: {
        type: String
    },
    reportSubmittedDate: {
        type: Date
    },
    createdDate: {
        type: Date
    }

});

let ServiceSchedule = module.exports = mongoose.model('ServiceSchedule', serviceScheduleSchema);