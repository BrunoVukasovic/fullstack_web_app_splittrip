const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/delete", (req, res) =>
  userController.deleteUserByEmail(req, res)
);

module.exports = router;
