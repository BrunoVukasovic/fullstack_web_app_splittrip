"use strict";
const Category = require("../models/Category");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Trips", {
      Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      Heading: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.TEXT
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
        type: Sequelize.INTEGER,
        references: {
          model: "Categories", // refers to table name
          key: "Id" // refers to column name in table
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Trips");
  }
};
