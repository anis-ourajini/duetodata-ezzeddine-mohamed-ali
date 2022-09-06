const services = {};
services.auth = require('./auth.service');
services.post = require('./post.service');
services.comment = require('./comment.service');
services.commentreact = require('./comment_react.service');
services.postreact = require('./post_react.service');
module.exports = services;