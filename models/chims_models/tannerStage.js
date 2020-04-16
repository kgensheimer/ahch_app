let mongoose = require('mongoose');

// Tanner Stage Schema
let tannerStageSchema = mongoose.Schema({
    tannerStageID: {
        type: Number
    },
    tannerStage: {
        type: String
    }


});

let TannerStage = module.exports = mongoose.model('TannerStage', tannerStageSchema);