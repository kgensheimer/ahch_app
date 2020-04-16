let mongoose = require('mongoose');

// Follow Up Schema
let followUpSchema = mongoose.Schema({
    followUpID: {
        type: Number
    },
    range: {
        type: String
    }

});

let FollowUp = module.exports = mongoose.model('FollowUp', followUpSchema);