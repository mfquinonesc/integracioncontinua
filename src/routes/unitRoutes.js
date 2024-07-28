const router = require('express').Router();
const unitController = require('../controllers/unitController');

router.post('/',unitController.createUnit);

router.get('/:id',unitController.getUnitById);

router.get('/',unitController.getAllUnits);

router.delete('/:id',unitController.deleteUnitById);

router.put('/:id',unitController.updateUnitById);

module.exports = router;