const Comment = require("../models/comment.model");
const CommentReact = require("../models/comment_react.model");

exports.reactComment = async (commentID, userID, type) => {
  try {
    if (
      !(await CommentReact.findOne({
        commentID: commentID,
        userID: userID,
        react_type: type,
      }))
    ) {
      await CommentReact.create({
        react_type: type,
        userID: userID,
        commentID: commentID,
      });
      await this.updateCommState(commentID, type);
    } else {
      return "already " + type + " this comment";
    }
  } catch (error) {
    return error;
  }
};

exports.updateCommState = async (commentID, type) => {
  switch (type) {
    case "like":
      const totalLikes = await CommentReact.find({
        commentID: commentID,
        react_type: "like",
      });
      await Comment.findByIdAndUpdate(commentID, {
        like: totalLikes.length,
      });
      break;
    case "dislike":
      const totalDisLikes = await CommentReact.find({
        commentID: commentID,
        react_type: "dislike",
      });
      await Comment.findByIdAndUpdate(commentID, {
        dislike: totalDisLikes.length,
      });
      break;
    default:
      break;
  }
};

exports.removeReact = async (commentID, userID, type) => {
  await CommentReact.findOneAndDelete({
    commentID: commentID,
    userID: userID,
    react_type: type,
  });
  await this.updateCommState(commentID, type);
  return true;
};
