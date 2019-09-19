const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

router.get("/delete", userController.deleteUserByEmail);

module.exports = router;
