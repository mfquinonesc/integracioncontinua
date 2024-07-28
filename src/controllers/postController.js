const postService = require('../services/postService');

module.exports.createPost = async (req, res) => {
    const response = await postService.createPost(req.body);
    return res.send(response);
};

module.exports.getPostById = async (req, res) => {
    const id = res.params.id;
    const response = await postService.getPostById(id);
    return res.send(response);
};

module.exports.getAllPosts = async (req, res) => {
    const response = await postService.getAllPosts();
    return res.send(response);
};

module.exports.getAllPostsById = async (req, res) => {
    const id = req.params.id;
    const response = await postService.getAllPostsById(id);
    return res.send(response);
};

module.exports.deletePostById = async (req, res) => {
    const id = req.params.id;
    const response = await postService.deletePostById(id);
    return res.send(response);
};

module.exports.updatePostById = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const response = await postService.updatePostById(id, body);
    return res.send(response);
};