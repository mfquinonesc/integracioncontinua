const userModel = require('../models/userModel');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const response = require('../utilities/response');

dotenv.config();

const SECRETEWORD = process.env.SECRETEWORD || 'development';
const HEADER_NAME = process.env.HEADER_NAME || 'jwt';

module.exports.signUp = async (body) => {
    try {        
        const { firstName, lastName, birthDate, email, password, rol } = body;
        const user = await userModel.create({ firstName, lastName, birthDate, email, password, rol });      
        if (user) {
            const token = jwt.sign(user.id, SECRETEWORD);
            return response.getSuccess(token);
        } else {
            return response.getError();
        }
    }
    catch (err) {       
        return response.getError('Este correo ya se encuentra registrado!');
    }
};

module.exports.signIn = async (body) => {
    try {
        const { email, password } = body;
        const user = await userModel.findOne({ email: email }).exec();
        if (user) {
            const isLogIn = await bcrypt.compare(password, user.password);
            if (isLogIn) {
                const token = jwt.sign(user.id, SECRETEWORD);
                const json = {
                    'email': user.email,
                    'id': user.id,
                    'rol': user.rol,
                    'token': token
                };
                return response.getSuccess(json);
            } else {
                return response.getException('¡La contraseña es incorrecta!');
            }
        } else {
            return response.getException('¡Esta cuenta no existe!');
        }
    } catch (err) {
        return response.getError(err);
    }
};

module.exports.verify = async (headers) => {
    try {
        const token = headers[HEADER_NAME];
        const decoded = await jwt.verify(token, SECRETEWORD);
        if (decoded) {
            return response.getSuccess(true);
        } else {
            return response.getException(false);
        }
    } catch (error) {
        return response.getError(false);
    }
};

module.exports.signOut = () => {
    const token = jwt.sign('signout', Date.now().toString());
    return response.getSuccess(token);
};