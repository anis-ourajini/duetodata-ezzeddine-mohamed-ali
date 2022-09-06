const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
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
module.exports = mongoose.model("Post", postSchema);
