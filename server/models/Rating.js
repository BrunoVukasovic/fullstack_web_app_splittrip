const Sequelize = require("sequelize");
const sequelize = require("../database");
const Review = require("./Review");

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

// Rating.hasMany(Review, {foreignKey: "RatingID"});

module.exports = Rating;
