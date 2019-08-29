const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const Comment = require("../models/Comment");
const Rating = require("../models/Rating");

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
  console.log(req.body);

  Comment.create({
    Heading: heading,
    Description: description
  })
    .then(comment => {
      Review.create({
        BookedTripID: bookedTripID,
        TripID: tripID,
        RatingID: rating,
        CommentID: comment.CommentID
      })
        .then(review => res.send(review))
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
});

/*
router.post("/comment", (res, req) => {
  console.log("!!!!!!!!" + req.body);
  const { heading, description } = req.body.review;
  Comment.create({
    Heading: heading,
    Description: description
  }).then(comment => res.send(comment.CommentID));
});

router.post("/rating", (res, req) => {
  const { rating } = req.body;
  Rating.create({
    Value: rating
  }).then(rating => res.send(rating.RatingID));
});

router.post("/evo", (res, req) => {
  const { bookedTripID, tripID } = req.body.review;
  Review.create({
    BookedTripID: bookedTripID,
    TripID: tripID,
    CommentID: commentID,
    RatingID: ratingID
  }).then(review => res.send(review));
});
*/

module.exports = router;
