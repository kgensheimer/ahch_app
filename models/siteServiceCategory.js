let mongoose = require('mongoose');

// Site Service Category Schema
let siteServiceCategorySchema = mongoose.Schema({
    categoryID: {
        type: Number
    },
    category: {
        type: String
    },
    categoryDesc: {
        type: String
    },
    order: {
        type: Number
    }


});

let SiteServiceCategory = module.exports = mongoose.model('SiteServiceCategory', siteServiceCategorySchema);