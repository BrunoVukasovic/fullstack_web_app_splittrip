const express = require("express");
const User = require("../models/User");
const passport = require("passport");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const router = express.Router();

// Login
router.post("/", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/fail",
    failureFlash: false
  })(req, res, next);
});

// Logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;
