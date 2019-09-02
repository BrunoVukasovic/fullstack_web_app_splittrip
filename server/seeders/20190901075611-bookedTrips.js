"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "BookedTrips",
      [
        {
          BookedTripID: 1234,
          Date: "2019-06-16 02:00:00+02",
          NumberOfPeople: 5,
          Canceled: false,
          Past: true,
          Reviewed: true,
          TripID: 1,
          UserID: 1,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          BookedTripID: 2234,
          Date: "2019-08-16 02:00:00+02",
          NumberOfPeople: 4,
          Canceled: false,
          Past: true,
          Reviewed: true,
          TripID: 2,
          UserID: 1,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          BookedTripID: 3234,
          Date: "2019-08-10 02:00:00+02",
          NumberOfPeople: 13,
          Canceled: false,
          Past: true,
          Reviewed: true,
          TripID: 2,
          UserID: 1,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          BookedTripID: 4234,
          Date: "2019-06-16 02:00:00+02",
          NumberOfPeople: 3,
          Canceled: false,
          Past: true,
          Reviewed: true,
          TripID: 3,
          UserID: 1,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          BookedTripID: 5234,
          Date: "2019-07-16 02:00:00+02",
          NumberOfPeople: 3,
          Canceled: false,
          Past: true,
          Reviewed: true,
          TripID: 4,
          UserID: 1,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          BookedTripID: 6234,
          Date: "2019-10-16 02:00:00+02",
          NumberOfPeople: 3,
          Canceled: false,
          Past: false,
          Reviewed: false,
          TripID: 3,
          UserID: 1,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("BookedTrips", null, {});
  }
};
