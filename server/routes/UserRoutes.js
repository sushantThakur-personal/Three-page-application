const express = require("express");
const router = express.Router();
const cors = require("cors");

//===========================importing models=========================================================================================

const user = require("../models/Users");

//===========================importing models=========================================================================================
router.use(cors());
router.get("/", async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const newUser = new user({
    name: req.body.userName,
    password: req.body.password,
    contact: req.body.contact,
  });
  console.log(newUser);

  try {
    const saveData = await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
