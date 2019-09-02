const express = require("express");
const router = express.Router();
const bookedTripController = require("../controllers/bookedTrip");

router.post("/all", (req, res) =>
  bookedTripController.findAllByUserEmail(req, res)
);

router.patch("/cancel", (req, res) =>
  bookedTripController.setCancelToTrue(req, res)
);

router.patch("/past", (req, res) =>
  bookedTripController.setPastToTrue(req, res)
);

router.post("/userIdNull", (req, res) =>
  bookedTripController.setUserIdToNull(req, res)
);

router.post("/new", (req, res) => bookedTripController.createNew(req, res));

router.post("/userAndDate", (req, res) =>
  bookedTripController.getUserAndDate(req, res)
);

router.patch("/newReview", (req, res) =>
  bookedTripController.setReviewedToTrue(req, res)
);

router.post("/reviewed", (req, res) =>
  bookedTripController.findAllReviewed(req, res)
);

module.exports = router;
