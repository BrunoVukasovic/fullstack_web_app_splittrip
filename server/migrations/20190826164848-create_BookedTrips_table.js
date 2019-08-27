"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("BookedTrips", {
      BookedTripID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      Date: {
        type: Sequelize.DATE
      },
      NumberOfPeople: {
        type: Sequelize.INTEGER
      },
      Canceled: {
        type: Sequelize.BOOLEAN
      },
      Past: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        type: Sequelize.DATE,
        field: "CreatedAt"
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: "UpdatedAt"
      },
      TripID: {
        type: Sequelize.INTEGER
      },
      UserID: {
        type: Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("BookedTrips");
  }
};
