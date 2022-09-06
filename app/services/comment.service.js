const Comment = require("../models/comment.model");

exports.createComment = async (text, author, postID) => {
  try {
    const comment = Comment.create({
      author: author,
      text: text,
      postID: postID,
    });
    return comment;
  } catch (error) {
    return error;
  }
};

exports.deleteComment = async (commentID) => {
  try {
    return await Comment.findByIdAndDelete({ _id: commentID });
  } catch (error) {
    return error;
  }
};

exports.updateComment = async (commentID, update) => {
  return await Comment.findByIdAndUpdate(commentID, update, { new: true });
};
exports.verifyAuthority = async (comment) => {
  return await Comment.findById(comment);
};

exports.getAllCommentsByPostId = async (postID, pageNum, pageSize) => {
  let size = pageSize;
  let page = pageNum;
  return Comment.find({ postID: postID })
    .limit(size)
    .skip(size * page)
    .sort({
      date: "desc",
    });
};