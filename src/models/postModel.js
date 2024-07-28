const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    text: {
        type: String,
        required: false
    },
    labels: {
        type: [String],
        required: false,
        uppercase: true,
    },
    likes: {
        type: Number,
        required: false,
    },
    dislikes: {
        type: Number,
        required: false,
    }
});

const postModel = mongoose.model('post', postSchema);
module.exports = postModel;