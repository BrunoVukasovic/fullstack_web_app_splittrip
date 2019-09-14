const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review");

router.post("/id", reviewController.findbyPk);

router.post("/trip", reviewController.findbyTripID);

router.post("/new", (req, res) => reviewController.createNewReview(req, res));

module.exports = router;
