const express = require("express");
const Trip = require("../models/Trip");

const router = express.Router();

router.get("/", (req, res) =>
  Trip.findAll()
    .then(trips => {
      console.log(trips);
      res.send(trips);
    })
    .catch(err => console.log(err))
);

module.exports = router;
