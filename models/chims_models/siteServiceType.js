let mongoose = require('mongoose');

// Site Service Type Schema
let siteServiceTypeSchema = mongoose.Schema({
    typeID: {
        type: Number
    },
    typeName: {
        type: String
    },
    typeDesc: {
        type: String
    },
    category: {
        type: String
    },
    order: {
        type: Number
    }


});

let SiteServiceType = module.exports = mongoose.model('SiteServiceType', siteServiceTypeSchema);