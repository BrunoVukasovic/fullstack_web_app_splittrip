const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // check email
      User.findOne({ where: { Email: email } }).then(user => {
        if (!user) {
          return done(null, false, {
            message: "User with that email is not register"
          });
        }
        // check password
        bcrypt.compare(password, user.Password, (error, isMatch) => {
          if (error) throw error;

          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Password incorrect" });
          }
        });
      });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.UserID);
  });

  passport.deserializeUser((UserID, done) => {
    User.findByPk(UserID).then(user => {
      done(null, user);
    });
  });
};
