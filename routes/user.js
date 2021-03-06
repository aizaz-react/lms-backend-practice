const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const express = require("express");
const router = express.Router();

const { User, validate } = require("../models/user");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send(user.email + "Already registerd.");

  const newUser = new User(_.pick(req.body, ["name", "email", "password"]));
  const salt = await bcrypt.genSalt(10);

  newUser.password = await bcrypt.hash(newUser.password, salt);
  await newUser.save();

  const token = newUser.generateAuthToken();
  res
    .header("x-auth-token", token)
    .send(_.pick(newUser, ["_id", "name", "email"]));
});

module.exports = router;
