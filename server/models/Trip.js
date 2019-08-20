const Sequelize = require("sequelize");
const sequelize = require("../database");

module.exports = sequelize.define("trip", {
  trip_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  heading: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  }
});
