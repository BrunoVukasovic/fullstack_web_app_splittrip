"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Reviews", {
      Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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
        type: Sequelize.INTEGER,
        references: {
          model: "Trips", // refers to table name
          key: "Id" // refers to column name in table
        }
      },
      CommentID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Comments", // refers to table name
          key: "Id" // refers to column name in table
        }
      },
      RatingID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Ratings", // refers to table name
          key: "Id" // refers to column name in table
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Reviews");
  }
};
