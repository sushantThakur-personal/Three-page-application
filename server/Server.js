const express = require("express");
const cors = require("cors");
const questionRoutes = require("./routes/questionRoutes");
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
//=====================importing routers=================
const questionRoutes = require("./routes/questionRoutes");
const userRoutes = require("./routes/UserRoutes");
const commentRoutes = require("./routes/CommentRoutes");

//=====================importing routers=================

app.use(express.json());

app.use("/user", userRoutes);
app.use("/question", questionRoutes);
app.use("/comment", commentRoutes);

app.listen(port, () => {
  console.log(`app listning on port ${port}`);
});
