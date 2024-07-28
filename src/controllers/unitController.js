const unitService = require('../services/unitService');

module.exports.createUnit = async (req, res)=>{
    const response = await unitService.createUnit(req.body);
    res.send(response);
};

module.exports.getUnitById = async (req,res)=>{
    const id = req.params.id;
    const response = await unitService.getUnitById(id);
    return res.send(response);
};

module.exports.getAllUnits = async (req, res) =>{
    const response = await unitService.getAllUnits();
    return res.send(response);
};

module.exports.deleteUnitById = async (req,res) =>{
    const id = req.params.id;
    const response = await unitService.deleteUnitById(id);
    return res.send(response);
};

module.exports.updateUnitById = async (req,res) =>{
    const id = req.params.id;
    const body = req.body;
    const response = await unitService.updateUnitById(id,body);
    return res.send(response);
};