const Services = require("../services");
const util = require("../utils/utils");
const commentService = Services.comment;
const commentReactService = Services.commentreact;

exports.createComment = async (req, res) => {
  let { text } = req.body;
  let { postID } = req.params;
  let author = req.userId;
  try {
    if (!text) {
      util.setError(400, "comment cannot be empty");
      return util.send(res);
    }
    await commentService.createComment(text, author, postID).then((comment) => {
      util.setSuccess(200, "comment created successfuly", comment);
      return util.send(res);
    });
  } catch (error) {
    util.setSuccess(400, "error", error);
    return util.send(res);
  }
};

exports.deleteComment = async (req, res) => {
  let { commentID } = req.params;
  try {
    if (!commentID) {
      util.setError(400, "comment ID is missing");
      return util.send(res);
    }
    await commentService.deleteComment(commentID).then((post) => {
      util.setSuccess(200, "comment deleted successfuly");
      return util.send(res);
    });
  } catch (error) {
    util.setError(400, "error");
    return util.send(res);
  }
};

exports.updateComment = async (req, res) => {
  let { commentID } = req.params;
  let update = req.body;
  try {
    await commentService
      .updateComment(commentID, update)
      .then((updatedComment) => {
        util.setSuccess(200, "post updated successfuly", updatedComment);
        return util.send(res);
      });
  } catch (error) {
    console.log(error);
    util.setError(400, "error");
    return util.send(res);
  }
};

exports.getCommentByPostID = async (req, res) => {
  let { page, size } = req.query;
  let { postID } = req.params;
  const comments = await commentService.getAllCommentsByPostId(
    postID,
    page - 1,
    size
  );
  util.setSuccess(200, "comments received successfuly", comments);
  return util.send(res);
};

exports.likeComment = async (req, res) => {
  let { commentID } = req.params;
  let userID = req.userId;
  await commentReactService.reactComment(commentID, userID, "like");
  util.setSuccess(200, "comments liked successfuly");
  return util.send(res);
};

exports.removeLike = async (req, res) => {
  let { commentID } = req.params;
  let userID = req.userId;
  try {
    await commentReactService.removeReact(commentID, userID, "like");
    util.setSuccess(200, "reaction removed successfuly");
    return util.send(res);
  } catch (error) {
    util.setError(400, "error");
    return util.send(res);
  }
};
exports.removeDisLike = async (req, res) => {
  let { commentID } = req.params;
  let userID = req.userId;
  try {
    await commentReactService.removeReact(commentID, userID, "dislike");
    util.setSuccess(200, "reaction removed successfuly");
    return util.send(res);
  } catch (error) {
    util.setError(400, "error");
    return util.send(res);
  }
};

exports.dislikeComment = async (req, res) => {
  let { commentID } = req.params;
  let userID = req.userId;
  await commentReactService.reactComment(commentID, userID, "dislike");
  util.setSuccess(200, "comments liked successfuly");
  return util.send(res);
};
