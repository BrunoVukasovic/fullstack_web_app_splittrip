const path = require("path");
const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");
const initializePassport = require("./config/passport");
const Trip = require("./models/Trip");
const Category = require("./models/Category");
const PORT = process.env.PORT || 5000;

const sequelize = require("./database/index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Bodyparser

// will overwitre db sequelize.sync({ force: true });
sequelize.sync();

// Passport
initializePassport(passport);
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

app.get("/", (req, res) => res.send("INDEX"));
app.use("/api/trips", require("./api/trips"));
app.use("/api/register", require("./api/register"));
app.use("/api/login", require("./api/login"));
app.use("/api/bookedTrips", require("./api/bookedTrips"));
app.use("/api/reviews", require("./api/reviews"));

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server listening on the port ${PORT}...`);
});

module.exports = app;
