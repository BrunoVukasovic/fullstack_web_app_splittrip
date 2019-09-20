const BookedTrip = require("../models/BookedTrip");
const Review = require("../models/Review");
const Trip = require("../models/Trip");
const User = require("../models/User");

const bookedTripController = {
  findAllByUser: (req, res) => {
    const { Id } = req.user;
    BookedTrip.findAll({
      where: {
        UserID: Id
      },
      include: Trip
    })
      .then(bookedTrips => {
        res.send(bookedTrips);
      })
      .catch(err => console.log(err));
  },

  setCancelToTrue: (req, res) => {
    BookedTrip.findByPk(req.body.bookedTripID).then(bookedTrip => {
      bookedTrip
        .update({
          Canceled: true
        })
        .then(res.sendStatus(204))
        .catch(err => console.log(err));
    });
  },

  setPastToTrue: (req, res) => {
    BookedTrip.findByPk(req.body.bookedTripID).then(BookedTrip => {
      BookedTrip.update({
        Past: true
      })
        .then(res.sendStatus(204))
        .catch(err => console.log(err));
    });
  },

  setUserIdToNull: (req, res) => {
    const { Id } = req.user;
    BookedTrip.findAll({
      where: {
        UserID: Id
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
  },

  createNew: (req, res) => {
    const { tripID, date, numberOfPeople, message } = req.body.bookedTrip;
    const { Id } = req.user;
    BookedTrip.create({
      UserID: Id,
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
  },

  getUserAndDate: (req, res) => {
    BookedTrip.findOne({
      where: { Id: req.body.bookedTripID },
      attributes: ["UserID", "Date"]
    })
      .then(bookedTrip => {
        const { Date, UserID } = bookedTrip;
        // if user is not deleted
        if (UserID) {
          User.findOne({
            where: { Id: UserID },
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

  setReviewedToTrue: (req, res) => {
    BookedTrip.findByPk(req.body.bookedTripID).then(BookedTrip => {
      BookedTrip.update({
        Reviewed: true
      })
        .then(res.sendStatus(204))
        .catch(err => console.log(err));
    });
  },

  findAllReviewed: (req, res) => {
    const { Id } = req.user;
    BookedTrip.findAll({
      where: {
        UserID: Id,
        Reviewed: true
      },
      include: [Review, Trip],
      attributes: ["Id", "Date"]
    })
      .then(bookedTrips => {
        res.send(bookedTrips);
      })
      .catch(err => console.log(err));
  }
};

module.exports = bookedTripController;
