const express = require("express");
const Trip = require("../models/Trip");

const router = express.Router();

router.post("/one", (req, res) =>
  Trip.findOne({
    where: { Slug: req.body.pathname },
    attributes: ["Heading", "Description", "Slug"]
  })
    .then(trip => {
      res.send(trip);
      console.log(trip);
    })
    .catch(err => console.log(err))
);

router.get("/all", (req, res) =>
  Trip.findAll()
    .then(trips => {
      res.send(trips);
      // console.log(req.user);
      // const obj = req.user.dataValues;
      // res.send(obj);
    })
    .catch(err => console.log(err))
);

module.exports = router;
