let mongoose = require('mongoose');

// Interview Observer Schema
let interviewObserverSchema = mongoose.Schema({
    interviewID: {
        type: Number
    },
    workerID: {
        type: Number
    }

});

let InterviewObserver = module.exports = mongoose.model('InterviewObserver', interviewObserverSchema);