const Sequelize = require("sequelize");
const sequelize = require("../database");
const Trip = require("./Trip");
const BookedTrip = require("./BookedTrip");
const Comment = require("./Comment");

const Review = sequelize.define("Review", {
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

Review.belongsTo(BookedTrip, { foreignKey: "BookedTripID" });
Review.belongsTo(Trip, { foreignKey: "TripID" });
Review.belongsTo(Comment, { foreignKey: "CommentID" });

module.exports = Review;