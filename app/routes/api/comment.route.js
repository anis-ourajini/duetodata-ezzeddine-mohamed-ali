const router = require("express").Router();
const comment = require("../../controllers/comment.controller.js");
const jwtverif = require("../../middleware/authJWT");
const authorityVerif = require("../../middleware/commentidVerification");

router.get("/:postID", [jwtverif.verifyToken], comment.getCommentByPostID);
router.post("/like/:commentID", [jwtverif.verifyToken], comment.likeComment);
router.delete("/like/:commentID", [jwtverif.verifyToken], comment.removeLike);
router.post(
  "/dislike/:commentID",
  [jwtverif.verifyToken],
  comment.dislikeComment
);
router.delete("/dislike/:commentID", [jwtverif.verifyToken], comment.removeDisLike);
router.post("/:postID", [jwtverif.verifyToken], comment.createComment);
router.delete(
  "/:commentID",
  [jwtverif.verifyToken, authorityVerif.verifyAuthority],
  comment.deleteComment
);
router.put(
  "/:commentID",
  [jwtverif.verifyToken, authorityVerif.verifyAuthority],
  comment.updateComment
);
module.exports = router;
