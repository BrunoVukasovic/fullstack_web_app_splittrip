const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const Comment = require("../models/Comment");

router.post("/trip", (req, res) => {
  const { tripID } = req.body;
  Review.findAll({ where: { TripID: tripID } })
    .then(trips => {
      res.send(trips);
    })
    .catch(error => console.log(error));
});

router.post("/", (req, res) => {
  const {
    heading,
    description,
    bookedTripID,
    tripID,
    rating
  } = req.body.review;

  Comment.create({
    Heading: heading,
    Description: description
  })
    .then(comment => {
      Review.create({
        BookedTripID: bookedTripID,
        TripID: tripID,
        Rating: rating,
        CommentID: comment.CommentID
      })
        .then(review => res.send(review))
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
});

module.exports = router;
