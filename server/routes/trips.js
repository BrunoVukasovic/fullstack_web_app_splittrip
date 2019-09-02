const express = require("express");
const tripController = require("../controllers/trip");
const router = express.Router();

router.post("/one/id", (req, res) => tripController.findTripById(req, res));

router.post("/one/slug", (req, res) => tripController.findTripBySlug(req, res));

router.get("/all", (req, res) => tripController.getAllTrips(req, res));

router.get("/category/:id", (req, res) =>
  tripController.findByCategoryId(req, res)
);

module.exports = router;
