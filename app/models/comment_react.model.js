const mongoose = require("mongoose");
const commentReactSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    commentID: {
      type: String,
      required: true,
    },
    react_type: {
      type: String,
      enum: ["like", "dislike"],
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "date",
      updatedAt: "updated_at ",
    },
  }
);
module.exports = mongoose.model("CommentReact", commentReactSchema);
