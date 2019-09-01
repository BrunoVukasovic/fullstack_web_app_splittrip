const User = require("../models/User");
const Trip = require("../models/Trip");
const BookedTrip = require("../models/BookedTrip");
const Review = require("../models/Review");
const Comment = require("../models/Comment");

const bookedTripController = {
  async findAllByUserEmail(req, res) {
    User.findOne({
      where: { Email: req.body.email }
    }).then(user => {
      BookedTrip.findAll({
        where: {
          UserID: user.UserID
        },
        include: Trip
      })
        .then(bookedTrips => {
          res.send(bookedTrips);
        })
        .catch(err => console.log(err));
    });
  },

  async setCancelToTrue(req, res) {
    BookedTrip.findByPk(req.body.bookedTripID).then(BookedTrip => {
      BookedTrip.update({
        Canceled: true
      })
        .then(res.sendStatus(204))
        .catch(err => console.log(err));
    });
  },

  async setPastToTrue(req, res) {
    BookedTrip.findByPk(req.body.bookedTripID).then(BookedTrip => {
      BookedTrip.update({
        Past: true
      })
        .then(res.sendStatus(204))
        .catch(err => console.log(err));
    });
  },

  async setUserIdToNull(req, res) {
    User.findOne({
      where: { Email: req.body.email }
    }).then(user => {
      BookedTrip.findAll({
        where: {
          UserID: user.UserID
        }
      })
        .then(bookedTrips => {
          bookedTrips.forEach(bookedTrip => {
            bookedTrip.update({
              UserID: null
            });
          });
          res.send(res.sendStatus(204));
        })
        .catch(err => console.log(err));
    });
  },

  async createNew(req, res) {
    const {
      email,
      tripID,
      date,
      numberOfPeople,
      message
    } = req.body.bookedTrip;
    User.findOne({
      where: { Email: email }
    })
      .then(user => {
        console.log(user);
        BookedTrip.create({
          UserID: user.UserID,
          TripID: tripID,
          Date: date,
          NumberOfPeople: numberOfPeople,
          Message: message,
          Canceled: false,
          Past: false,
          Reviewed: false
        })
          .then(res.status(201).send("Trip booked!"))
          .catch(error => console.log(error));
      })
      .catch(err => console.log(err));
  },

  async getUserAndDate(req, res) {
    BookedTrip.findOne({
      where: { BookedTripID: req.body.bookedTripID },
      attributes: ["UserID", "Date"]
    })
      .then(bookedTrip => {
        const { Date, UserID } = bookedTrip;
        // if user is not deleted
        if (UserID) {
          User.findOne({
            where: { UserID },
            attributes: ["FirstName"]
          })
            .then(user => {
              const userAndDate = {
                Date: Date,
                FirstName: user.FirstName
              };
              res.send(userAndDate);
            })
            .catch(error => console.log(error));
        } else {
          const userAndDate = {
            Date: Date,
            FirstName: "Unknown traveler"
          };
          res.send(userAndDate);
        }
      })
      .catch(error => console.log(error));
  },

  async setReviewedToTrue(req, res) {
    BookedTrip.findByPk(req.body.bookedTripID).then(BookedTrip => {
      BookedTrip.update({
        Reviewed: true
      })
        .then(res.sendStatus(204))
        .catch(err => console.log(err));
    });
  },

  async findAllReviewed(req, res) {
    User.findOne({
      where: { Email: req.body.email }
    }).then(user => {
      BookedTrip.findAll({
        where: {
          UserID: user.UserID,
          Reviewed: true
        },
        include: [Review, Trip],
        attributes: ["BookedTripID", "Date"]
      })
        .then(bookedTrips => {
          res.send(bookedTrips);
        })
        .catch(err => console.log(err));
    });
  }
};

module.exports = bookedTripController;
