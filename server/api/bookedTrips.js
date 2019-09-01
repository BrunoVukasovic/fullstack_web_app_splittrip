const express = require("express");
const router = express.Router();
const BookedTrip = require("../models/BookedTrip");
const User = require("../models/User");
const Trip = require("../models/Trip");

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

router.post("/userIdNull", (req, res) => {
  User.findOne({
    where: { Email: req.body.email }
  }).then(user => {
    BookedTrip.findAll({
      where: {
        UserID: user.UserID
      }
    })
      .then(bookedTrips => {
        console.log("aa");
        bookedTrips.forEach(bookedTrip => {
          bookedTrip.update({
            UserID: null
          });
        });
        res.send(bookedTrips);
      })
      .catch(err => console.log(err));
  });
});

router.post("/book", (req, res) => {
  const { email, tripID, date, numberOfPeople, message } = req.body.bookedTrip;
  User.findOne({
    where: { Email: email }
  })
    .then(user => {
      console.log(user);
      BookedTrip.create({
        UserID: user.UserID,
        TripID: tripID,
        Date: date,
        NumberOfPeople: numberOfPeople,
        Message: message,
        Canceled: false,
        Past: false,
        Reviewed: false
      })
        .then(res.send("Trip Booked!"))
        .catch(error => console.log(error));
    })
    .catch(err => console.log(err));
});

router.post("/userAndDate", (req, res) => {
  BookedTrip.findOne({
    where: { BookedTripID: req.body.bookedTripID },
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

router.patch("/reviewDeleted", (req, res) => {
  BookedTrip.findByPk(req.body.bookedTripID).then(BookedTrip => {
    BookedTrip.update({
      Reviewed: false
    })
      .then(res.send("Succesfully updated"))
      .catch(err => console.log(err));
  });
});

router.patch("/newReview", (req, res) => {
  BookedTrip.findByPk(req.body.bookedTripID).then(BookedTrip => {
    BookedTrip.update({
      Reviewed: true
    })
      .then(res.send("Succesfully updated"))
      .catch(err => console.log(err));
  });
});

router.post("/reviewed", (req, res) => {
  User.findOne({
    where: { Email: req.body.email }
  }).then(user => {
    BookedTrip.findAll({
      where: {
        UserID: user.UserID,
        Reviewed: true
      },
      attributes: ["BookedTripID", "TripID", "Date"]
    })
      .then(bookedTrips => {
        res.send(bookedTrips);
      })
      .catch(err => console.log(err));
  });
});

module.exports = router;
