const path = require("path");
const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;
const passport = require("passport");
const initializePassport = require("./config/passport");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Bodyparser

// require("./config/passport")(passport);
initializePassport(passport);
// Passport:
app.use(flash());
app.use(express.static("public"));
app.use(
  session({
    secret: "veryGoodSecret",
    resave: false,
    saveUninitialized: false
  })
);
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => res.send("INDEX")); // bez ove linije izbaci error
app.use("/api/trips", require("./api/trips"));
app.use("/api/register", require("./api/register"));
app.use("/api/login", require("./api/login"));
app.use("/api/logout", require("./api/logout"));

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
