const express = require("express");
const Trip = require("../models/Trip");

const router = express.Router();

router.get("/", (req, res) =>
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
