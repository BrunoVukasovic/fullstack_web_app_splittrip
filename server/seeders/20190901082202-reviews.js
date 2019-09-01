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
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  }
};
