const Trip = require("../models/Trip");

const tripController = {
  async getAllTrips(req, res) {
    console.log("sadjsaldkjaslasdjaslčdhasjassakjsaj");
    Trip.findAll()
      .then(trips => {
        res.send(trips);
      })
      .catch(err => console.log(err));
  },

  async findTripBySlug(req, res) {
    Trip.findOne({
      where: { Slug: req.body.pathname },
      attributes: ["Heading", "Description", "Slug", "TripID"]
    })
      .then(trip => {
        res.send(trip);
        console.log(trip);
      })
      .catch(err => console.log(err));
  },

  async findTripById(req, res) {
    Trip.findOne({
      where: { TripID: req.body.tripID },
      attributes: ["Heading", "Description", "Slug"]
    })
      .then(trip => {
        res.send(trip);
      })
      .catch(err => console.log(err));
  }
};

module.exports = tripController;
