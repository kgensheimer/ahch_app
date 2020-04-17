let mongoose = require('mongoose');

// Site Service Category Schema
let siteServiceCategorySchema = mongoose.Schema({
    CategoryID: {
        type: Number
    },
    Category: {
        type: String
    },
    CategoryDesc: {
        type: String
    },
    Order: {
        type: Number
    }


});

let SiteServiceCategory = module.exports = mongoose.model('SiteServiceCategory', siteServiceCategorySchema);