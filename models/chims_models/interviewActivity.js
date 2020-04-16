let mongoose = require('mongoose');

// Interview Activity Schema
let interviewActivitySchema = mongoose.Schema({
    rowID: {
        type: Number
    },
    interviewID: {
        type: Number
    },
    activityID: {
        type: Number
    }

});

let InterviewActivity = module.exports = mongoose.model('InterviewActivity', interviewActivitySchema);