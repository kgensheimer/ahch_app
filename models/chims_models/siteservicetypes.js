let mongoose = require('mongoose');

// Site Service Types Schema
let siteServiceTypesSchema = mongoose.Schema({
    TypeID: {
        type: Number
    },
    TypeName: {
        type: String
    },
    TypeDesc: {
        type: String
    },
    Category: {
        type: String
    },
    Order: {
        type: Number
    }


});

let SiteServiceTypes = module.exports = mongoose.model('SiteServiceTypes', siteServiceTypesSchema);