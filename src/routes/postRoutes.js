const router = require('express').Router();
const postController = require('../controllers/postController');

router.post('/', postController.createPost);

router.get('/', postController.getAllPosts);

router.get('/user/:id', postController.getAllPostsById);

router.get('/:id', postController.getPostById);

router.delete('/:id', postController.deletePostById);

router.put('/:id', postController.updatePostById);

module.exports = router;