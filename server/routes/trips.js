const express = require("express");
const tripController = require("../controllers/trip");
const router = express.Router();

router.post("/one/id", tripController.findTripById);

router.post("/one/slug", tripController.findTripBySlug);

router.get("/category/:id", tripController.findByCategoryId);

module.exports = router;
