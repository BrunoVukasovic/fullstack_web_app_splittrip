const path = require("path");
const express = require("express");

const db = require("./database");
const Trip = require("./models/Trip");

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Server listening on the port ${PORT}...`);
});

db.query("SELECT NOW()", (err, res) => {
  if (err.error) return console.log(error);
  console.log(`PostgreSQL connected: ${res[0].now}`);
});

/*
Trip.create({
  heading: "Prvi trip",
  description: "prvi opis",
  price: 100
});
*/

Trip.findAll()
  .then(trips => {
    console.log("All trips: ", JSON.stringify(trips));
  })
  .catch(err => console.log(err));

module.exports = app;
