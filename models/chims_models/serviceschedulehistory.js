let mongoose = require('mongoose');

// Service Schedule History Schema
let serviceScheduleHistorySchema = mongoose.Schema({
    HistoryID: {
        type: Number
    },
    ServiceScheduleID: {
        type: Number
    },
    SubmittedDate: {
        type: Date
    },
    StatusID: {
        type: Number
    },
    ScheduleDate: {
        type: Date
    },
    StatusChangeDate: {
        type: Date
    }


});

let ServiceScheduleHistory = module.exports = mongoose.model('ServiceScheduleHistory', serviceScheduleHistorySchema);