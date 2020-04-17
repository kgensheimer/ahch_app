let mongoose = require('mongoose');

// Tanner Stage Schema
let tannerStageSchema = mongoose.Schema({
    TannerStageID: {
        type: Number
    },
    TannerStage: {
        type: String
    }


});

let TannerStage = module.exports = mongoose.model('TannerStage', tannerStageSchema);