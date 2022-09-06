const router = require('express').Router();
const authRoute = require('./auth.route');
const postRoute = require('./post.route');
const commentRoute = require('./comment.route');
router.use('/auth', authRoute)
router.use('/post', postRoute)
router.use('/comment', commentRoute)
module.exports = router;