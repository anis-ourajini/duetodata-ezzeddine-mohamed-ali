const Post = require("../models/post.model");
const PostReact = require("../models/post_react.model");

exports.reactPost = async (postID, userID, type) => {
  try {
    if (
      !(await PostReact.findOne({
        postID: postID,
        userID: userID,
        react_type: type,
      }))
    ) {
      await PostReact.create({
        react_type: type,
        userID: userID,
        postID: postID,
      });
      await this.updatePostState(postID, type);
    } else {
      return "already " + type + " this post";
    }
  } catch (error) {
    return error;
  }
};

exports.updatePostState = async (postID, type) => {
  switch (type) {
    case "like":
      const totalLikes = await PostReact.find({
        postID: postID,
        react_type: "like",
      });
      await Post.findByIdAndUpdate(postID, {
        like: totalLikes.length,
      });
      break;
    case "dislike":
      const totalDisLikes = await PostReact.find({
        postID: postID,
        react_type: "dislike",
      });
      await Post.findByIdAndUpdate(postID, {
        dislike: totalDisLikes.length,
      });
      break;
    default:
      break;
  }
};

exports.removeReact = async (postID, userID, type) => {
  await PostReact.findOneAndDelete({
    postID: postID,
    userID: userID,
    react_type: type,
  });
  await this.updatePostState(postID, type);
  return true;
};
