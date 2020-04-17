let mongoose = require('mongoose');

// Tests Schema
let testsSchema = mongoose.Schema({
    TestID: {
        type: Number
    },
    Category: {
        type: String
    },
    Test: {
        type: String
    }


});

let Tests = module.exports = mongoose.model('Tests', testsSchema);