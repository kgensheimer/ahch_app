let mongoose = require('mongoose');

// Relationship Schema
let relationshipSchema = mongoose.Schema({
    RelationshipID: {
        type: Number
    },
    RelationshipType: {
        type: String
    }

});

let Relationship = module.exports = mongoose.model('Relationship', relationshipSchema);