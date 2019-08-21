const path = require("path");
const express = require("express");
var session = require("express-session");
const passport = require("passport");
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Bodyparser

// Passport:
require("./config/passport")(passport);
app.use(express.static("public"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => res.send("INDEX")); // bez ove linije izbaci error
app.use("/api/trips", require("./api/trips"));
app.use("/api/register", require("./api/register"));
app.use("/api/login", require("./api/login"));

app.listen(PORT, () => {
  console.log(`Server listening on the port ${PORT}...`);
});

/*
Trip.create({
  heading: "Prvi trip",
  description: "prvi opis",
  price: 100
});
*/

module.exports = app;
