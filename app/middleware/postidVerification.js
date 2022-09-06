const Services = require("../services");
const postService = Services.post;

exports.verifyAuthority = async (req, res, next) => {
  if (!req.userId) {
    return res.status(403).send({
      message: "error!",
    });
  }
  postService.verifyAuthority(req.params.postID).then((post) => {
    if (!post) {
      return res.status(403).send({
        message: "no post found with this id",
      });
    }
    if (post.userID == req.userId) {
      next();
    } else {
      return res.status(403).send({
        message: "you are not able to delete or update someone else post",
      });
    }
  });
};
