const express = require("express");
const router = express.Router();
const registerController = require("../controllers/register");

router.post("/", (req, res) => registerController.register(req, res));

module.exports = router;
