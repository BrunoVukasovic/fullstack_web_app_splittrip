const express = require("express");
const BookedTrip = require("../models/BookedTrip");
const router = express.Router();

router.get("/", (req, res) =>
  BookedTrip.findAll()
    .then(bookedTrips => {
      res.send(bookedTrips);
      // console.log(req.user);
      // const obj = req.user.dataValues;
      // res.send(obj);
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

module.exports = router;
