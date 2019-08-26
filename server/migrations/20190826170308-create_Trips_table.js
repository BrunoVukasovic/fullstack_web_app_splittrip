"use strict";
const Category = require("../models/Category");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Trips", {
      TripID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      Heading: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.INTEGER
      },
      Slug: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        field: "CreatedAt"
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: "UpdatedAt"
      },
      CategoryID: {
        type: Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Trips");
  }
};