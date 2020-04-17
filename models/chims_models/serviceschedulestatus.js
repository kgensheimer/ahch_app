let mongoose = require('mongoose');

// Service Schedule Status Schema
let serviceScheduleStatusSchema = mongoose.Schema({
    ServiceScheduleStatusID: {
        type: Number
    },
    Status: {
        type: String
    }


});

let ServiceScheduleStatus = module.exports = mongoose.model('ServiceScheduleStatus', serviceScheduleStatusSchema);