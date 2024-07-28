const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    managerFirstName: {
        type: String,
        required: true,
        uppercase: true
    },
    managerLastName: {
        type: String,
        required: true,
        uppercase: true
    },
    managerEmail: {
        type: String,
        required: true,
        lowercase: true
    },
    managerPhoneNumber: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    features: {
        type: [String],
        required: true
    },
    unitDescription: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: false
    },
    long: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    }
});

const unitModel = mongoose.model('unit', unitSchema);
module.exports = unitModel;