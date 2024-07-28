const unitModel = require('../models/unitModel');
const response = require('../utilities/response');

module.exports.createUnit = async (body) => {
    try {
        const { managerFirstName, managerLastName, managerEmail, managerPhoneNumber, price, period, city, unitDescription } = body;
        const unit = await unitModel.create({ managerFirstName, managerLastName, managerEmail, managerPhoneNumber, price, period, city, unitDescription });
        if (unit) {
            return response.getSuccess(unit.id);
        } else {
            return response.getUnknownException();
        }
    }
    catch (err) {
        return response.getError(err);
    }
};

module.exports.getUnitById = async (id) => {
    try {
        const unit = await unitModel.findId(id);
        if (unit) {
            return response.getSuccess(unit);
        } else {
            return response.getException('This id does not exist!');
        }
    } catch (err) {
        return response.getError(err);
    }
};

module.exports.getAllUnits = async () => {
    try {
        const unit = await unitModel.find({});
        return unit ? response.getSuccess(unit) : response.getUnknownException();
    } catch (err) {
        return response.getError(err);
    }
};

module.exports.deleteUnitById = async (id) => {
    try {
        await unitModel.findByIdAndDelete(id);
        return response.getSuccess(id);
    } catch (err) {
        return response.getError(err);
    }
};

module.exports.updateUnitById = async (id, body) => {
    try {
        const { managerFirstName, managerLastName, managerEmail, managerPhoneNumber, price, period, city, unitDescription, features, lat, long, image } = body;
        const uunit = await unitModel.findByIdAndUpdate(id, { managerFirstName, managerLastName, managerEmail, managerPhoneNumber, price, period, city, unitDescription, features, lat, long, image }, { returnDocument: 'after' });
        return response.getSuccess(uunit.id);
    } catch (err) {
        return response.getError(err);
    }
};