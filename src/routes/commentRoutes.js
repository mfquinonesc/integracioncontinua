const router = require('express').Router();
const commentController = require('../controllers/commentController');

router.post('/',commentController.createComment);

router.get('/',commentController.getAllComments);

router.get('/:id',commentController.getCommentById);

router.delete('/:id',commentController.deleteCommentById);

router.put('/:id',commentController.updateCommentById);

module.exports = router;