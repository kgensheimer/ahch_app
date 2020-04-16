let mongoose = require('mongoose');

// Service Schedule Patient Schema
let serviceSchedulePatientSchema = mongoose.Schema({
    serviceScheduleID: {
        type: Number
    },
    patientID: {
        type: Number
    }


});

let ServiceSchedulePatient = module.exports = mongoose.model('ServiceSchedulePatient', serviceSchedulePatientSchema);