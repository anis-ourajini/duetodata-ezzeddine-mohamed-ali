const Services = require("../services");
const util = require("../utils/utils");
const postService = Services.post;
const postReactService = Services.postreact;


exports.createPost = async (req, res) => {
  let { text, image } = req.body;
  let userId = req.userId;
  try {
    if (!text || !image) {
      util.setError(400, "missing field");
      return util.send(res);
    }
    await postService.createPost(text, image, userId).then((post) => {
      util.setSuccess(200, "post created successfuly");
      return util.send(res);
    });
  } catch (error) {
    util.setError(400, "error", error);
    return util.send(res);
  }
};

exports.getAllPosts = async (req, res) => {
  let { page, size } = req.query;
  const posts = await postService.getAllPosts(page - 1, size);
  util.setSuccess(200, "posts received successfuly", posts);
  return util.send(res);
};

exports.getAllPostsByUserId = async (req, res) => {
  let { page, size } = req.query;
  let  userId  = req.userId;
  const posts = await postService.getAllPostsByUserId(userId, page - 1, size);
  util.setSuccess(200, "posts received successfuly", posts);
  return util.send(res);
};

exports.deletePost = async (req, res) => {
  let { postID } = req.params;
  try {
    if (!postID) {
      util.setError(400, "postID is missing");
      return util.send(res);
    }
    await postService.deletePost(postID).then((post) => {
      util.setSuccess(200, "post deleted successfuly");
      return util.send(res);
    });
  } catch (error) {
    util.setError(400, "error", error);
    return util.send(res);
  }
};

exports.updatePost = async (req, res) => {
  let { postID } = req.params;
  let update = req.body;
  try {
    await postService.updatePost(postID, update).then((updatedPost) => {
      util.setSuccess(200, "post updated successfuly", updatedPost);
      return util.send(res);
    });
  } catch (error) {
    util.setError(400, "error", error);
    return util.send(res);
  }
};


exports.likePost = async (req, res) => {
  let { postID } = req.params;
  let userID = req.userId;
  await postReactService.reactPost(postID, userID, "like");
  util.setSuccess(200, "Post liked successfuly");
  return util.send(res);
};

exports.removeLike = async (req, res) => {
  let { postID } = req.params;
  let userID = req.userId;
  try {
    await postReactService.removeReact(postID, userID, "like");
    util.setSuccess(200, "reaction removed successfuly");
    return util.send(res);
  } catch (error) {
    util.setError(400, "error");
    return util.send(res);
  }
};
exports.removeDisLike = async (req, res) => {
  let { postID } = req.params;
  let userID = req.userId;
  try {
    await postReactService.removeReact(postID, userID, "dislike");
    util.setSuccess(200, "reaction removed successfuly");
    return util.send(res);
  } catch (error) {
    util.setError(400, "error");
    return util.send(res);
  }
};

exports.dislikePost = async (req, res) => {
  let { postID } = req.params;
  let userID = req.userId;
  await postReactService.reactPost(postID, userID, "dislike");
  util.setSuccess(200, "Post disliked successfuly");
  return util.send(res);
};
