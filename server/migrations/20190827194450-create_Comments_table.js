"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Comments", {
      CommentID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      Heading: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.TEXT("medium")
      },
      createdAt: {
        type: Sequelize.DATE,
        field: "CreatedAt"
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: "UpdatedAt"
      },
      ReviewID: {
        type: Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Comments");
  }
};
