const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const User = require("../models/User");
const BookedTrip = require("../models/BookedTrip");

/* mislim da se ne koristi
router.post("/one", (req, res) => {
  User.findOne({
    where: { UserID: req.body.UserID },
    attributes: ["FirstName"]
  })
    .then(user => res.send(user))
    .catch(error => console.log(error));
});
*/

router.post("/delete", (req, res) =>
  userController.deleteUserByEmail(req, res)
);

module.exports = router;
