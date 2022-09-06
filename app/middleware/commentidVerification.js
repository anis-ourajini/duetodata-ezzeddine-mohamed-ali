const Services = require("../services");
const commentService = Services.comment;

exports.verifyAuthority = async (req, res, next) => {
  if (!req.userId) {
    return res.status(403).send({
      message: "error!",
    });
  }
  commentService.verifyAuthority(req.params.commentID).then((comment) => {
    if (!comment) {
      return res.status(403).send({
        message: "no comment found with this id",
      });
    }
    if (comment.author == req.userId) {
      next();
    } else {
      return res.status(403).send({
        message: "you are not able to delete or update someone else comment",
      });
    }
  });
};
