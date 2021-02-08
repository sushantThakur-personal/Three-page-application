const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserSchema" },
    likes: { type: String, default: "0" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("question", questionSchema);
