let mongoose = require('mongoose');

// Site Services Schema
let siteServicesSchema = mongoose.Schema({
    ServiceID: {
        type: Number
    },
    TypeID: {
        type: Number
    },
    PerformedDate: {
        type: Date
    },
    Unit: {
        type: Number
    }


});

let SiteServices = module.exports = mongoose.model('SiteServices', siteServicesSchema);