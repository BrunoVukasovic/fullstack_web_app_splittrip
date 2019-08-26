const express = require("express");
const BookedTrip = require("../models/BookedTrip");
const router = express.Router();

router.get("/", (req, res) =>
  BookedTrip.findAll()
    .then(bookedTrips => {
      res.send(bookedTrips);
    })
    .catch(err => console.log(err))
);

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