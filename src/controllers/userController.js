const userService = require('../services/userService');

module.exports.createUser = async (req, res) => {
    const response = await userService.createUser(req.body);
    res.send(response);
};

module.exports.getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await userService.getUserById(id);
    return res.send(response);
};

module.exports.getUserByEmail = async (req, res) => {
    let email = req.params.email;
    email = email.replace('%40', '@');
    const response = await userService.getUserByEmail(email);
    return res.send(response);
};

module.exports.getAllUsers = async (req, res) => {
    const response = await userService.getAllUsers();
    return res.send(response);
};

module.exports.deleteUserById = async (req, res) => {
    const id = req.params.id;
    const response = await userService.deleteUserById(id);
    return res.send(response);
};

module.exports.updateUserById = async (req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const response = await userService.updateUserById(id, body);
    return res.send(response);
};

module.exports.patchUserById = async (req,res) =>{
    const id = req.params.id;
    const body = req.body;
    const response = await userService.patchUserById(id, body);
    return res.send(response);
};