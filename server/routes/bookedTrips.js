const express = require("express");
const router = express.Router();
const BookedTrip = require("../models/BookedTrip");
const User = require("../models/User");
const Trip = require("../models/Trip");
const Review = require("../models/Review");
const Comment = require("../models/Comment");
const Rating = require("../models/Rating");
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

/* mislim da ne triba vise
router.patch("/reviewDeleted", (req, res) => {
  BookedTrip.findByPk(req.body.bookedTripID).then(BookedTrip => {
    BookedTrip.update({
      Reviewed: false
    })
      .then(res.send("Succesfully updated"))
      .catch(err => console.log(err));
  });
});
*/

router.patch("/newReview", (req, res) =>
  bookedTripController.setReviewedToTrue(req, res)
);

router.post("/reviewed", (req, res) =>
  bookedTripController.findAllReviewed(req, res)
);

module.exports = router;
