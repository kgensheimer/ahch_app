let mongoose = require('mongoose');

// Behavior Schema
let behaviorSchema = mongoose.Schema({
    behaviorID: {
        type: Number,
        required: true
    },
    behavior: {
        type: String,
    }

});

let Behavior = module.exports = mongoose.model('Behavior', behaviorSchema);