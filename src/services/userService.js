const userModel = require('../models/userModel');
const response = require('../utilities/response');

module.exports.createUser = async (body) => {
    try {
        const { firstName, lastName, birthDate, email, password, rol } = body;
        const user = await userModel.create({ firstName, lastName, birthDate, email, password, rol });
        if (user) {
            return response.getSuccess(user.id);
        } else {
            return response.getUnknownException();
        }
    }
    catch (err) {
        return response.getError(err);
    }
};

module.exports.getUserById = async (id) => {
    try {
        const user = await userModel.findById(id);
        if (user) {
            user.password = '';
            return response.getSuccess(user);
        } else {
            return response.getException('This id does not exit!');
        }
    } catch (err) {
        return response.getError(err);
    }
};

module.exports.getUserByEmail = async (email) => {
    try {
        const user = await userModel.findOne({ email: email });
        if (user) {
            user.password = '';
            return response.getSuccess(user);
        } else {
            return response.getException('Este correo no está registrado!');
        }
    } catch (err) {
        return response.getError(err);
    }
};

module.exports.getAllUsers = async () => {
    try {
        const users = await userModel.find({});
        users.forEach((u) => { u.password = ''; });
        return users ? response.getSuccess(users) : response.getUnknownException();
    } catch (err) {
        return response.getError(err);
    }
};

module.exports.deleteUserById = async (id) => {
    try {
        await userModel.findByIdAndDelete(id);
        return response.getSuccess(id);
    } catch (err) {
        return response.getError(err);
    }
};

module.exports.updateUserById = async (id, body) => {
    try {
        const { firstName, lastName, birthDate, phone, email, password, description, hobbies, rol, avatar } = body;
        const uuser = await userModel.findByIdAndUpdate(id, { firstName, lastName, birthDate, phone, email, password, description, hobbies, rol, avatar }, { returnDocument: 'after' });
        return response.getSuccess(uuser.id);
    } catch (err) {
        return response.getError(err);
    }
};

module.exports.patchUserById = async (id, body) => {
    try {
        const { firstName, lastName, birthDate, phone, description, hobbies, avatar } = body;
        const uuser = await userModel.findByIdAndUpdate(id, { firstName, lastName, birthDate, phone, description, hobbies, avatar }, { returnDocument: 'after' });
        return response.getSuccess(uuser.id);
    } catch (err) {
        return response.getError(err);
    }
};