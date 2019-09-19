const express = require("express");
const bookedTripController = require("../controllers/bookedTrip");

const router = express.Router();

router.get("/all", bookedTripController.findAllByUser);

router.patch("/cancel", bookedTripController.setCancelToTrue);

router.patch("/past", bookedTripController.setPastToTrue);

router.get("/userIdNull", bookedTripController.setUserIdToNull);

router.post("/new", bookedTripController.createNew);

router.post("/userAndDate", bookedTripController.getUserAndDate);

router.patch("/newReview", bookedTripController.setReviewedToTrue);

router.get("/reviewed", bookedTripController.findAllReviewed);

module.exports = router;
