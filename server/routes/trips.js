const express = require("express");
const Trip = require("../models/Trip");
const User = require("../models/User");
const BookedTrip = require("../models/BookedTrip");
const tripController = require("../controllers/trip");
const router = express.Router();

router.post("/one/id", (req, res) => tripController.findTripById(req, res));

router.post("/one/slug", (req, res) => tripController.findTripBySlug(req, res));

router.get("/all", (req, res) => tripController.getAllTrips(req, res));

module.exports = router;
