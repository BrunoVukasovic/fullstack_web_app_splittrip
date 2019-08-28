const express = require("express");
const router = express.Router();
const BookedTrip = require("../models/BookedTrip");
const User = require("../models/User");

router.post("/", (req, res) => {
  User.findOne({
    where: { Email: req.body.email }
  }).then(user => {
    BookedTrip.findAll({
      where: {
        UserID: user.UserID
      }
    })
      .then(bookedTrips => {
        res.send(bookedTrips);
      })
      .catch(err => console.log(err));
  });
});

router.post("/UserAndDate", (req, res) => {
  BookedTrip.findOne({
    where: { BookedTripID: req.body.BookedTripID },
    attributes: ["UserID", "Date"]
  })
    .then(bookedTrip => {
      const { Date, UserID } = bookedTrip;
      User.findOne({
        where: { UserID },
        attributes: ["FirstName"]
      })
        .then(user => {
          const userAndDate = {
            Date: Date,
            FirstName: user.FirstName
          };
          res.send(userAndDate);
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
});

router.patch("/cancel", (req, res) => {
  BookedTrip.findByPk(req.body.BookedTripID).then(BookedTrip => {
    BookedTrip.update({
      Canceled: true
    })
      .then(() => {})
      .catch(err => console.log(err));
  });
});

router.patch("/past", (req, res) => {
  BookedTrip.findByPk(req.body.BookedTripID).then(BookedTrip => {
    BookedTrip.update({
      Past: true
    })
      .then(res.send("Succesfully updated"))
      .catch(err => console.log(err));
  });
});

router.post("/delete", (req, res) => {
  BookedTrip.destroy({
    where: {
      BookedTripID: 14
    }
  });
});

module.exports = router;
