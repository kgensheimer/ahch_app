let mongoose = require('mongoose');

// Service Schedule History Schema
let serviceScheduleHistorySchema = mongoose.Schema({
    historyID: {
        type: Number
    },
    serviceScheduleID: {
        type: Number
    },
    submittedDate: {
        type: Date
    },
    statusID: {
        type: Number
    },
    scheduleDate: {
        type: Date
    },
    statusChangeDate: {
        type: Date
    }


});

let ServiceScheduleHistory = module.exports = mongoose.model('ServiceScheduleHistory', serviceScheduleHistorySchema);