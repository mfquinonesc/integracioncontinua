const postModel = require('../models/postModel');
const response = require('../utilities/response');

module.exports.createPost = async (body) => {
    try {
        let { userId, date, imageUrl, price, text, labels, likes, dislikes } = body;
        date = date || new Date();        
        const post = await postModel.create({ userId, date , imageUrl, price, text, labels, likes, dislikes });
        return post ? response.getSuccess(post) : response.getUnknownException();
    }
    catch (err) {
        return response.getError(err);
    }
};

module.exports.getPostById = async (id) => {
    try {
        const post = await postModel.findById(id);
        return post ? response.getSuccess(post) : response.getUnknownException();
    }
    catch (err) {
        return response.getError(err);
    }
};

module.exports.getAllPosts = async () => {
    try {
        const posts = await postModel.find({});
        return response.getSuccess(posts);
    } catch (err) {
        return response.getError(err);
    }
};

module.exports.getAllPostsById = async (id) => {
    try {
        const posts = await postModel.find({ userId: id });
        return response.getSuccess(posts);
    } catch (err) {
        return response.getError(err);
    }
};

module.exports.deletePostById = async (id) => {
    try {
        await postModel.findByIdAndDelete(id);
        return response.getSuccess(id);
    }
    catch (err) {
        return response.getError(err);
    }
};

module.exports.updatePostById = async (id, body) => {
    try {
        let { userId, date, imageUrl, price, text, labels, likes, dislikes } = body;
        date = date || new Date();
        const upost = await postModel.findByIdAndUpdate(id, { userId, date, imageUrl, price, text, labels, likes, dislikes }, { returnDocument: 'after' });
        return response.getSuccess(upost);
    } catch (err) {
        return response.getError(err);
    }
};