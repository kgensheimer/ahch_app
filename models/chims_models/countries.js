let mongoose = require('mongoose');

// Countries Schema
let countriesSchema = mongoose.Schema({
    countryID: {
        type: Number
    },
    countryCode: {
        type: String
    },
    countryDesc: {
        type: String
    }

});

let Countries = module.exports = mongoose.model('Countries', countriesSchema);