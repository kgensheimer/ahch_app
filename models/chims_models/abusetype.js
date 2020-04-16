let mongoose = require('mongoose');

// Abuse Type Schema
let abuseTypeSchema = mongoose.Schema({
    abuseTypeID: {
        type: Number,
        required: true
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    columnName: {
        type: String
    },
    typeName: {
        type: String
    }

});

let AbuseType = module.exports = mongoose.model('AbuseType', abuseTypeSchema);