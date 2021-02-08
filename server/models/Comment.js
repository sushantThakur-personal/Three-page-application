const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: "questionSchema" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserSchema" },
    likes: { type: String, default: "0" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", commentSchema);
