const Sequelize = require("sequelize");
const sequelize = require("../database");
const BookedTrip = require("./BookedTrip");
const Comment = require("./Comment");
const Rating = require("./Rating");

const Review = sequelize.define("Review", {
  ReviewID: {
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
    type: Sequelize.INTEGER,
    allowNull: true
  },
  TripID: {
    type: Sequelize.INTEGER
  },
  CommentID: {
    type: Sequelize.INTEGER
  },
  RatingID: {
    type: Sequelize.INTEGER
  }
});

Review.belongsTo(BookedTrip, { foreignKey: "BookedTripID" });
Review.belongsTo(Comment, { foreignKey: "CommentID" });
Review.belongsTo(Rating, { foreignKey: "RatingID" });

module.exports = Review;
