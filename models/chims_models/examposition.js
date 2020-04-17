let mongoose = require('mongoose');

// Exam Position Schema
let examPositionSchema = mongoose.Schema({
    ExamPositionID: {
        type: Number
    },
    ExamPosition: {
        type: String
    }

});

let ExamPosition = module.exports = mongoose.model('Exam Position', examPositionSchema);