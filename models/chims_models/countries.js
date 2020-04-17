let mongoose = require('mongoose');

// Countries Schema
let countriesSchema = mongoose.Schema({
    CountryID: {
        type: Number
    },
    CountryCode: {
        type: String
    },
    CountryDesc: {
        type: String
    }

});

let Countries = module.exports = mongoose.model('Countries', countriesSchema);