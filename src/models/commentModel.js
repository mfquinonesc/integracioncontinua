const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false
    },
    text: {
        type: String,
        required: false
    }
});

const commentModel = mongoose.model('comment', commentSchema);
module.exports = commentModel;