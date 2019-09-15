const Trip = require("../models/Trip");

const tripController = {
  findTripBySlug: (req, res) => {
    Trip.findOne({
      where: { Slug: req.body.pathname },
      attributes: ["Heading", "Description", "Slug", "Id"]
    })
      .then(trip => {
        res.send(trip);
      })
      .catch(err => console.log(err));
  },

  findTripById: (req, res) => {
    Trip.findOne({
      where: { Id: req.body.tripID },
      attributes: ["Heading", "Description", "Slug"]
    })
      .then(trip => {
        res.send(trip);
      })
      .catch(err => console.log(err));
  },

  findByCategoryId: (req, res) => {
    Trip.findAll({ where: { CategoryID: req.params.id } })
      .then(trips => res.send(trips))
      .catch(err => console.log(err));
  }
};

module.exports = tripController;
