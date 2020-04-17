let mongoose = require('mongoose');

// InterviewActivities Schema
let interviewActivitiesSchema = mongoose.Schema({
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

let InterviewActivities = module.exports = mongoose.model('InterviewActivities', interviewActivitiesSchema);