const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Logout
router.get("/", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;
