const authService = require('../services/authService');

module.exports.signUp = async (req, res) => {   
    const response = await authService.signUp(req.body);
    return res.send(response);
};

module.exports.signIn = async (req, res) => {
    const response = await authService.signIn(req.body);
    return res.send(response);
};

module.exports.verify = async (req, res) => {
    const response = await authService.verify(req.headers);
    return res.send(response);
};

// eslint-disable-next-line no-unused-vars
module.exports.signOut = async (req, res) => {
    return authService.signOut();
};