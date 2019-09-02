const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review");

router.post("/id", (req, res) => reviewController.findbyPk(req, res));

router.post("/trip", (req, res) => reviewController.findbyTripID(req, res));

router.post("/new", (req, res) => reviewController.createNewReview(req, res));

module.exports = router;
