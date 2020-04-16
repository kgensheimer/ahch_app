let mongoose = require('mongoose');

// Relationship Schema
let relationshipSchema = mongoose.Schema({
    relationshipID: {
        type: Number
    },
    relationshipType: {
        type: String
    }

});

let Relationship = module.exports = mongoose.model('Relationship', relationshipSchema);