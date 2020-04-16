let mongoose = require('mongoose');

// Site Services Schema
let siteServiceSchema = mongoose.Schema({
    serviceID: {
        type: Number
    },
    typeID: {
        type: Number
    },
    performedDate: {
        type: Date
    },
    unit: {
        type: Number
    }


});

let SiteService = module.exports = mongoose.model('SiteService', siteServiceSchema);