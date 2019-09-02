"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          ReviewID: 1234,
          BookedTripID: 1234,
          TripID: 1,
          CommentID: 1234,
          RatingID: 2,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          ReviewID: 2234,
          BookedTripID: 2234,
          TripID: 2,
          CommentID: 2234,
          RatingID: 4,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          ReviewID: 3234,
          BookedTripID: 3234,
          TripID: 2,
          CommentID: 3234,
          RatingID: 4,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          ReviewID: 4234,
          BookedTripID: 4234,
          TripID: 3,
          CommentID: 4234,
          RatingID: 5,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          ReviewID: 5234,
          BookedTripID: 5234,
          TripID: 4,
          CommentID: 5234,
          RatingID: 5,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  }
};
