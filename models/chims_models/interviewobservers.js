let mongoose = require('mongoose');

// Interview Observers Schema
let interviewObserversSchema = mongoose.Schema({
    InterviewID: {
        type: Number
    },
    WorkerID: {
        type: Number
    }

});

let InterviewObservers = module.exports = mongoose.model('InterviewObservers', interviewObserversSchema);