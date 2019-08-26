const Sequelize = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("User", {
  UserID: {
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

module.exports = User;
