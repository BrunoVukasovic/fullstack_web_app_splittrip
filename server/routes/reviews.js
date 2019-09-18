const express = require("express");
const reviewController = require("../controllers/review");

const router = express.Router();

router.post("/id", reviewController.findbyPk);

router.post("/trip", reviewController.findbyTripID);

router.post("/new", (req, res) => reviewController.createNewReview(req, res));

module.exports = router;
