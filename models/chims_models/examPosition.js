let mongoose = require('mongoose');

// Exam Position Schema
let examPositionSchema = mongoose.Schema({
    examPositionID: {
        type: Number
    },
    examPosition: {
        type: String
    }

});

let ExamPosition = module.exports = mongoose.model('Exam Position', examPositionSchema);