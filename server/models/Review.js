const Sequelize = require("sequelize");
const sequelize = require("../database");
const Comment = require("./Comment");
const Rating = require("./Rating");

const Review = sequelize.define("Review", {
  Id: {
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
    allowNull: true,
    references: {
      model: "BookedTrips", // refers to table name
      key: "Id" // refers to column name in table
    }
  },
  TripID: {
    type: Sequelize.INTEGER,
    references: {
      model: "Trips", // refers to table name
      key: "Id" // refers to column name in table
    }
  },
  CommentID: {
    type: Sequelize.INTEGER,
    references: {
      model: "Comments", // refers to table name
      key: "Id" // refers to column name in table
    }
  },
  RatingID: {
    type: Sequelize.INTEGER,
    references: {
      model: "Ratings", // refers to table name
      key: "Id" // refers to column name in table
    }
  }
});

Review.belongsTo(Comment, { foreignKey: "CommentID" });
Review.belongsTo(Rating, { foreignKey: "RatingID" });

module.exports = Review;
