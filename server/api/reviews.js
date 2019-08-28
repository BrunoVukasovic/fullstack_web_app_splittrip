const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const Comment = require("../models/Comment");

router.post("/", (req, res) => {
  const {
    bookedTripID,
    tripID,
    rating,
    heading,
    description
  } = req.body.review;

  Comment.create({
    Heading: heading,
    Description: description
  })
    .then(
      Review.create({
        BookedTripID: bookedTripID,
        TripID: tripID,
        Rating: rating
      })
        .then(res.send("Review created!"))
        .catch(error => console.log(error))
    )
    .catch(error => console.log(error));
});

module.exports = router;
