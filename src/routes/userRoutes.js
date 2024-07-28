const router = require('express').Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);

router.get('/:id', userController.getUserById);

router.get('/:email', userController.getUserByEmail);

router.get('/', userController.getAllUsers);

router.delete('/:id', userController.deleteUserById);

router.put('/:id', userController.updateUserById);

router.patch('/:id', userController.patchUserById);

module.exports = router;