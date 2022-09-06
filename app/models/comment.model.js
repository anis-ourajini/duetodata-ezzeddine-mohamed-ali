const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    postID: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
      default: 0,
    },
    dislike: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: {
      createdAt: "date",
      updatedAt: "updated_at ",
    },
  }
);
module.exports = mongoose.model("Comment", commentSchema);
