const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const Comment = require("../models/Comment");
const Rating = require("../models/Rating");
const BookedTrip = require("../models/BookedTrip");

router.get("/all", (req, res) => {
  Review.findAll({
    include: Comment
  }).then(review => {
    res.send(review);
  });
});

router.post("/delete", (req, res) => {
  console.log("!!!!!!!!!!!!!!!!!!!!!!");
  console.log(req.body);
  const { reviewID } = req.body;
  Review.destroy({
    where: {
      ReviewID: reviewID
    }
  })
    .then(res.send("Deleted"))
    .catch(error => console.log(error));
});

router.post("/one/bookedTripId", (req, res) => {
  const { bookedTripID } = req.body;
  Review.findOne({
    where: {
      BookedTripID: bookedTripID
    },
    include: [Rating, Comment],
    attributes: ["ReviewID"]
  }).then(review => {
    res.send(review);
  });
});

router.post("/trip", (req, res) => {
  const { tripID } = req.body;
  Review.findAll({ where: { TripID: tripID } })
    .then(trips => {
      res.send(trips);
    })
    .catch(error => console.log(error));
});

router.post("/rating", (req, res) => {
  const { ratingID } = req.body;
  Rating.findByPk(ratingID)
    .then(rating => {
      res.send({ Value: rating.Value });
    })
    .catch(error => console.log(error));
});

router.post("/new", (req, res) => {
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

module.exports = router;
