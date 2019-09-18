const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

router.post("/delete", userController.deleteUserByEmail);

module.exports = router;
