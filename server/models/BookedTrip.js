const Sequelize = require("sequelize");
const sequelize = require("../database");
const Trip = require("./Trip");
const User = require("./User");

module.exports = sequelize.define("BookedTrip", {
  BookedTripID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  Date: {
    type: Sequelize.STRING
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
    type: Sequelize.INTEGER,
    references: {
      model: Trip,
      key: "TripID"
    }
  },
  UserID: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: "UserID"
    }
  }
});
