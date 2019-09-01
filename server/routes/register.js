const express = require("express");
const User = require("../models/User");
const validator = require("email-validator");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const registerController = require("../controllers/register");

router.post("/", (req, res) => registerController.register(req, res));

module.exports = router;
