"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Reviews", {
      ReviewID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      Rating: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        field: "CreatedAt"
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: "UpdatedAt"
      },
      BookedTripID: {
        type: Sequelize.INTEGER
      },
      TripID: {
        type: Sequelize.INTEGER
      },
      CommentID: {
        type: Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Reviews");
  }
};
