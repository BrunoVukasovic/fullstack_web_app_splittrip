const express = require("express");
const Trip = require("../models/Trip");
const User = require("../models/User");
const BookedTrip = require("../models/BookedTrip");
const tripController = require("../controllers/trip");
const router = express.Router();

router.post("/one/id", (req, res) => tripController.findTripById(req, res));

router.post("/one/slug", (req, res) => tripController.findTripBySlug(req, res));

router.get("/all", (req, res) => tripController.getAllTrips(req, res));

router.get("/category/:id", (req, res) => {
  Trip.findAll({ where: { CategoryID: req.params.id } }).then(trips =>
    res.send(trips)
  );
});

module.exports = router;
