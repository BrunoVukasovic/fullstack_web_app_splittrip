const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const router = express.Router();

router.post("/", (req, res) => {
  let {
    email,
    password,
    password2,
    firstName,
    lastName,
    phone
  } = req.body.user;

  // check empty fields
  let errors = [];
  if (!email) {
    errors.push({ message: "Please, enter email" });
  }
  if (!password || !password2) {
    errors.push({ message: "Please, enter password" });
  }
  // check password match
  if (password !== password2) {
    errors.push({ message: "Passwords do not match" });
  }

  // dodaj provjeru kvalitete passworda (npm password-validator)

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
        const errors = "User already exist";
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
              .then(res.send("User created successfully"))
              .catch(error => console.log(error));
          })
        );
      }
    });
  }
});

module.exports = router;
