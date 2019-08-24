const Sequelize = require("sequelize");
const sequelize = require("../database");
const Category = require("./Category");

module.exports = sequelize.define("Trip", {
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
    type: Sequelize.INTEGER,
    references: {
      model: Category,
      key: "CategoryID"
    }
  }
});
