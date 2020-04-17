let mongoose = require('mongoose');

// Activites Schema
let activitesSchema = mongoose.Schema({
    activityID: {
        type: Number
    },
    activity: {
        type: String
    },
    category: {
        type: String
    },
    order: {
        type: Number
    }

});

let Activites = module.exports = mongoose.model('Activites', activitesSchema);