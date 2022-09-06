const Post = require("../models/post.model");
exports.createPost = async (text, image, userid) => {
  try {
    const post = Post.create({
      text: text,
      image: image,
      userID: userid,
    });
    return post;
  } catch (error) {
    return error;
  }
};

exports.getAllPosts = async (pageNum, pageSize) => {
  let size = pageSize;
  let page = pageNum;
  return Post.find()
    .limit(size)
    .skip(size * page)
    .sort({
      date: "desc",
    });
};
exports.getAllPostsByUserId = async (userID, pageNum, pageSize) => {
  let size = pageSize;
  let page = pageNum;
  return Post.find({ userID: userID })
    .limit(size)
    .skip(size * page)
    .sort({
      date: "desc",
    });
};
exports.existingPost = async (postId) => {
  return await Post.findOne({ _id: postId });
};

exports.deletePost = async (postId) => {
  return await Post.findByIdAndDelete({ _id: postId });
};

exports.verifyAuthority = async (postid) => {
  return await Post.findById(postid);
};

exports.updatePost = async (postID, update) => {
  return await Post.findByIdAndUpdate(postID, update, { new: true });
};
