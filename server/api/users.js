const express = require("express");
const router = express.Router();
const User = require("../models/User");
const BookedTrip = require("../models/BookedTrip");

router.post("/one", (req, res) => {
  User.findOne({
    where: { UserID: req.body.UserID },
    attributes: ["FirstName"]
  })
    .then(user => res.send(user))
    .catch(error => console.log(error));
});

router.post("/delete", (req, res) => {
  const { email } = req.body;
  User.destroy({
    where: {
      Email: email
    }
  });
});

module.exports = router;
