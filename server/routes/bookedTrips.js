const express = require("express");
const router = express.Router();
const bookedTripController = require("../controllers/bookedTrip");

router.post("/all", bookedTripController.findAllByUserEmail);

router.patch("/cancel", bookedTripController.setCancelToTrue);

router.patch("/past", bookedTripController.setPastToTrue);

router.post("/userIdNull", bookedTripController.setUserIdToNull);

router.post("/new", bookedTripController.createNew);

router.post("/userAndDate", bookedTripController.getUserAndDate);

router.patch("/newReview", bookedTripController.setReviewedToTrue);

router.post("/reviewed", bookedTripController.findAllReviewed);

module.exports = router;
