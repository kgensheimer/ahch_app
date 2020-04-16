let mongoose = require('mongoose');

// Service Schedule Status Schema
let serviceScheduleStatusSchema = mongoose.Schema({
    serviceScheduleStatusID: {
        type: Number
    },
    status: {
        type: String
    }


});

let ServiceScheduleStatus = module.exports = mongoose.model('ServiceScheduleStatus', serviceScheduleStatusSchema);