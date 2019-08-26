const Sequelize = require("sequelize");
const sequelize = require("../database");
const Trip = require("./Trip");
const User = require("./User");

const BookedTrip = sequelize.define("BookedTrip", {
  BookedTripID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  Date: {
    type: Sequelize.DATE
  },
  NumberOfPeople: {
    type: Sequelize.INTEGER
  },
  Canceled: {
    type: Sequelize.BOOLEAN
  },
  Past: {
    type: Sequelize.BOOLEAN
  },
  createdAt: {
    type: Sequelize.DATE,
    field: "CreatedAt"
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: "UpdatedAt"
  },
  TripID: {
    type: Sequelize.INTEGER
  },
  UserID: {
    type: Sequelize.INTEGER
  }
});

BookedTrip.belongsTo(Trip, { foreignKey: "TripID" });
BookedTrip.belongsTo(User, { foreignKey: "UserID" });

module.exports = BookedTrip;
