const express = require("express");
const router = express.Router();

//===========================importing models=========================================================================================

const user = require("../models/Users");

//===========================importing models=========================================================================================

router.get("/", async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const user = new user({
    name: req.body.name,
    password: req.body.password,
    contact: req.body.contact,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
