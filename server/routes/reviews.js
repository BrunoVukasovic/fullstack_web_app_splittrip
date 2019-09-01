const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review");
const Review = require("../models/Review");
const Comment = require("../models/Comment");
const Rating = require("../models/Rating");
const BookedTrip = require("../models/BookedTrip");

/*  mislim da se ne koristi
router.get("/all", (req, res) => {
  Review.findAll({
    include: Comment
  }).then(review => {
    res.send(review);
  });
});
*/

router.post("/id", (req, res) => reviewController.findbyPk(req, res));

router.post("/trip", (req, res) => reviewController.findbyTripID(req, res));

/* mislin da vise ne triba
router.post("/rating", (req, res) => {
  const { ratingID } = req.body;
  Rating.findByPk(ratingID)
    .then(rating => {
      res.send({ Value: rating.Value });
    })
    .catch(error => console.log(error));
});
*/

router.post("/new", (req, res) => reviewController.createNewReview(req, res));

module.exports = router;
