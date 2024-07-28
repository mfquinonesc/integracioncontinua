const commentService = require('../services/commentService');

module.exports.createComment = async (req, res) => {
    const response = await commentService.createComment(req.body);
    return res.send(response);
};

module.exports.getCommentById = async (req, res) => {
    const id = res.params.id;
    const response = await commentService.getCommentById(id);
    return res.send(response);
};

module.exports.getAllComments = async (req, res) => {
    const response = await commentService.getAllComments();
    return res.send(response);
};

module.exports.deleteCommentById = async (req, res) => {
    const id = req.params.id;
    const response = await commentService.deleteCommentById(id);
    return res.send(response);
};

module.exports.updateCommentById = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const response = await commentService.updateCommentById(id, body);
    return res.send(response);
};