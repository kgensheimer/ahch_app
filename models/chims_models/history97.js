let mongoose = require('mongoose');

// History97 Schema
let history97Schema = mongoose.Schema({
    History97ID: {
        type: Number
    },
    HistoryID: {
        type: Number
    },
    EventDate: {
        type: Date
    }

});

let History97 = module.exports = mongoose.model('History97', history97Schema);