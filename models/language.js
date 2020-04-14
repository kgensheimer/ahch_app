let mongoose = require('mongoose');

// Language Schema
let languageSchema = mongoose.Schema({
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

let Language = module.exports = mongoose.model('Language', languageSchema);