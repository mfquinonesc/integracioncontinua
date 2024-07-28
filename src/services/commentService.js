const commentModel = require('../models/commentModel');
const response = require('../utilities/response');

module.exports.createComment = async (body) => {
    try {
        let { userId, date, text } = body;
        date = date || new Date();
        const comment = await commentModel.create({ userId, date, text });
        return comment ? response.getSuccess(comment) : response.getUnknownException();
    }
    catch (err) {
        return response.getError(err);
    }
};

module.exports.getCommentById = async (id) => {
    try {
        const comment = await commentModel.findById(id);
        return comment ? response.getSuccess(comment) : response.getException('This id doen not exist!');
    } catch (err) {
        return response.getError(err);
    }
};

module.exports.getAllComments = async () => {
    try {
        const comments = await commentModel.find({});
        return comments ? response.getSuccess(comments) : response.getUnknownException();
    } catch (err) {
        return response.getError(err);
    }
};

module.exports.deleteCommentById = async (id) => {
    try {
        await commentModel.findByIdAndDelete(id);
        return response.getSuccess(id);
    } catch (err) {
        return response.getError(err);
    }
};

module.exports.updateCommentById = async (id, body) => {
    try {
        let { userId, date, text } = body;
        date = date || new Date();
        const ucomment = await commentModel.findByIdAndUpdate(id, { userId, date, text }, { returnDocument: 'after' });
        return response.getSuccess(ucomment);
    } catch (err) {
        return response.getError(err);
    }
};