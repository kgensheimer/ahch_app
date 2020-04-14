let mongoose = require('mongoose');

// Test Schema
let testSchema = mongoose.Schema({
    testID: {
        type: Number
    },
    category: {
        type: String
    },
    test: {
        type: String
    }


});

let Test = module.exports = mongoose.model('Test', testSchema);