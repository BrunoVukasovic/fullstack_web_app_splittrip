const express = require("express");
const passport = require("passport");
const router = express.Router();

// Login
router.post("/", passport.authenticate("local"), (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.send(req.user);
});

// Logout
router.get("/logout", (req, res) => {
  req.logout();
  res.send({ message: "Log out!" });
});

module.exports = router;
