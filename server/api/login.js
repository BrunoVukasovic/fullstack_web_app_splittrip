const express = require("express");
const User = require("../models/User");
const passport = require("passport");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const router = express.Router();

router.post("/", passport.authenticate("local"), function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.send(req.user.Email);
});

// Logout
router.get("/logout", (req, res) => {
  req.logout();
  res.send({ message: "Log out!" });
});

module.exports = router;
