const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/one", (req, res) => {
  User.findOne({
    where: { UserID: req.body.UserID },
    attributes: ["FirstName"]
  })
    .then(user => res.send(user))
    .catch(error => console.log(error));
});

module.exports = router;
