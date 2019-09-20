const auth = require("./middleware/authorization");
const express = require("express");
const initializePassport = require("./config/passport");
const passport = require("passport");

const session = require("express-session");
const sequelize = require("./database/index");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Bodyparser

// will overwitre db sequelize.sync({ force: true });
// sequelize.sync();

// Passport
initializePassport(passport);
/*
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
); */

// Passport middleware
app.use(passport.initialize());
// app.use(passport.session());

// Routes
app.get("/", (req, res) => {
  res.send("Index");
  console.log(req.session);
});
app.use("/api/trips", require("./routes/trips"));
app.use("/api/register", require("./routes/register"));
app.use("/api/login", require("./routes/login"));
app.use("/api/reviews", require("./routes/reviews"));
app.use("/api/bookedTrips", auth, require("./routes/bookedTrips"));
app.use("/api/users", auth, require("./routes/users"));

app.listen(PORT, () => {
  console.log(`Server listening on the port ${PORT}...`);
});

module.exports = app;
