const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const router = express.Router();

// Login
router.post(
  "/",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    const { user } = req;
    const token = jwt.sign(user.toJSON(), "your_jwt_secret");
    res.send({ user, token });
  }
);

// Logout
router.get("/logout", (req, res) => {
  req.logout();
  res.send({ message: "Log out!" });
});

module.exports = router;
