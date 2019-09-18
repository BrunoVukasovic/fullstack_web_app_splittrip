const User = require("../models/User");
const validator = require("email-validator");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const registerController = {
  async register(req, res) {
    let {
      email,
      password,
      password2,
      firstName,
      lastName,
      phone
    } = req.body.user;

    let errors = [];

    // check email
    if (!validator.validate(email)) {
      errors.push({ message: "Please, enter valid email address." });
    }

    // check password match
    if (password !== password2) {
      errors.push({ message: "Passwords do not match" });
    }

    if (errors.length > 0) {
      const userError = {
        errors,
        email,
        firstName,
        lastName,
        phone
      };
      res.send(userError);
    } else {
      User.findOne({ where: { Email: email } }).then(user => {
        //check if user with entered email exist
        if (user) {
          errors.push({ message: "User with this email already exist" });
          const userError = {
            errors,
            email,
            firstName,
            lastName,
            phone
          };
          res.send(userError);
        } else {
          bcrypt.genSalt(saltRounds, (err, salt) =>
            bcrypt.hash(password, salt, (err, hash) => {
              // set password to its hash value
              password = hash;
              // crate new user
              User.create({
                Email: email,
                Password: password,
                FirstName: firstName,
                LastName: lastName,
                Phone: phone
              })
                .then(user => res.send(user))
                .catch(error => console.log(error));
            })
          );
        }
      });
    }
  }
};

module.exports = registerController;
