let mongoose = require('mongoose');

// Service Schedule Patient Schema
let serviceSchedulePatientSchema = mongoose.Schema({
    ServiceScheduleID: {
        type: Number
    },
    PatientID: {
        type: Number
    }


});

let ServiceSchedulePatient = module.exports = mongoose.model('ServiceSchedulePatient', serviceSchedulePatientSchema);