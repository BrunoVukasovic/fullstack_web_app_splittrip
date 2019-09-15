const Sequelize = require("sequelize");
const sequelize = require("../database");
const BookedTrip = require("./BookedTrip");

const User = sequelize.define("User", {
  Id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  Password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  FirstName: {
    type: Sequelize.STRING
  },
  LastName: {
    type: Sequelize.STRING
  },
  Phone: {
    type: Sequelize.STRING
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

User.hasMany(BookedTrip, { as: "BookedTrips", foreignKey: "UserID" });

module.exports = User;
