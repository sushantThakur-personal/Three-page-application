const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    contact: { type: String, required: true },
    role: { type: String, default: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
