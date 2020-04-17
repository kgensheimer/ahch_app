let mongoose = require('mongoose');

// Follow Up Schema
let followUpSchema = mongoose.Schema({
    FollowUpID: {
        type: Number
    },
    Range: {
        type: String
    }

});

let FollowUp = module.exports = mongoose.model('FollowUp', followUpSchema);