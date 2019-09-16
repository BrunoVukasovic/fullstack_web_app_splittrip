const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();
const initializePassport = require("./config/passport");
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
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("INDEX");
  console.log(process.env.DB_USERNAME);
});
app.use("/api/trips", require("./routes/trips"));
app.use("/api/register", require("./routes/register"));
app.use("/api/login", require("./routes/login"));
app.use("/api/bookedTrips", require("./routes/bookedTrips"));
app.use("/api/reviews", require("./routes/reviews"));
app.use("/api/users", require("./routes/users"));

app.listen(PORT, () => {
  console.log(`Server listening on the port ${PORT}...`);
});

module.exports = app;
