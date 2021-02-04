const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 8080;
const app = express();

const connectionUrl = "mongodb://localhost:27017/questions";
mongoose.connect(connectionUrl); //const connectDb = () =>
var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", () => {
  console.log("Connected successfully");
});

// Define Schemas ====================================================================================================================
const questionSchema = mongoose.Schema(
  {
    question: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserSchema" },
    likes: { type: String, default: "0" },
  },
  { timestamps: true }
);
const commentSchema = mongoose.Schema(
  {
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: "questionSchema" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserSchema" },
    likes: { type: String, default: "0" },
  },
  { timestamps: true }
);
const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    contact: { type: String, required: true },
  },
  { timestamps: true }
);

// ====================================================================================================================================

// Create Models from Schema===========================================================================================================
const question = mongoose.model("question", questionSchema);
const comment = mongoose.model("comment", commentSchema);
const user = mongoose.model("user", UserSchema);
// ====================================================================================================================================
const userCollection = app.get("/", (req, res) => {
  var newUser = new user({
    name: "Sushant Thakur",
    password: "password",
    contact: "sushant thakur ka contact",
  });
  newUser.save((err, user) => {
    if (err) {
      return console.error(err);
    }
    return console.log("Data saved successfully");
  });
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`app listning on port ${port}`);
});
