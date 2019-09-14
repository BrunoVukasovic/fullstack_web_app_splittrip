const Sequelize = require("sequelize");

const sequelize = new Sequelize("splittrip_db", "postgres", "", {
  host: "localhost",
  dialect: "postgres"
});

module.exports = sequelize;
