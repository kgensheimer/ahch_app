let mongoose = require('mongoose');

// Languages Schema
let languagesSchema = mongoose.Schema({
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

let Languages = module.exports = mongoose.model('Languages', languagesSchema);