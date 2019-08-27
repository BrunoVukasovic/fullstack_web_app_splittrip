const Sequelize = require("sequelize");
const sequelize = require("../database");
const BookedTrip = require("./BookedTrip");

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

module.exports = Review;
