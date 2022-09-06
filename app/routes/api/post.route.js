const router = require("express").Router();
const post = require("../../controllers/post.controller.js");
const jwtverif = require("../../middleware/authJWT");
const authorityVerif = require("../../middleware/postidVerification");

router.post("/",[jwtverif.verifyToken], post.createPost);
router.get("/",[jwtverif.verifyToken], post.getAllPosts);
router.get("/me",[jwtverif.verifyToken], post.getAllPostsByUserId);
router.delete("/:postID",[jwtverif.verifyToken,authorityVerif.verifyAuthority], post.deletePost);
router.put("/:postID",[jwtverif.verifyToken,authorityVerif.verifyAuthority], post.updatePost);


router.post("/like/:postID", [jwtverif.verifyToken], post.likePost);
router.delete("/like/:postID", [jwtverif.verifyToken], post.removeLike);

router.post("/dislike/:postID", [jwtverif.verifyToken], post.dislikePost);
router.delete("/dislike/:postID", [jwtverif.verifyToken], post.removeDisLike);
module.exports = router;
