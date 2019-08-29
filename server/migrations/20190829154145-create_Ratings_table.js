"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Ratings", {
      RatingID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      Value: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        field: "CreatedAt"
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: "UpdatedAt"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Ratings");
  }
};
