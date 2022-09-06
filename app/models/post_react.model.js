const mongoose = require("mongoose");
const postReactSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  postID: {
    type: String,
    required: true,
  },
  react_type: {
    type: String,
    enum: ["like", "dislike"],
    required: true,
  }
},
{
  timestamps: {
    createdAt: "date",
    updatedAt: "updated_at ",
  },
});
module.exports = mongoose.model("PostReact", postReactSchema);
