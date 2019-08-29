const Sequelize = require("sequelize");
const sequelize = require("../database");
const Review = require("./Trip");

const Rating = sequelize.define("Rating", {
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

Rating.hasMany(Review, { as: "Reviews", foreignKey: "RatingID" });

module.exports = Rating;
