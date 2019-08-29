const express = require("express");
const Trip = require("../models/Trip");
const User = require("../models/User");
const BookedTrip = require("../models/BookedTrip");

const router = express.Router();

router.post("/one/id", (req, res) =>
  Trip.findOne({
    where: { TripID: req.body.TripID },
    attributes: ["Heading", "Description", "Slug"]
  })
    .then(trip => {
      res.send(trip);
    })
    .catch(err => console.log(err))
);

router.post("/one", (req, res) =>
  Trip.findOne({
    where: { Slug: req.body.pathname },
    attributes: ["Heading", "Description", "Slug", "TripID"]
  })
    .then(trip => {
      res.send(trip);
      console.log(trip);
    })
    .catch(err => console.log(err))
);

router.get("/all", (req, res) =>
  Trip.findAll()
    .then(trips => {
      res.send(trips);
      // console.log(req.user);
      // const obj = req.user.dataValues;
      // res.send(obj);
    })
    .catch(err => console.log(err))
);

router.post("/book", (req, res) => {
  const { email, tripID, date, numberOfPeople, message } = req.body.bookedTrip;
  console.log(req.body.bookedTrip);
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

module.exports = router;
