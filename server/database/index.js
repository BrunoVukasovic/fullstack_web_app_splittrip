const Sequelize = require("sequelize");

require("dotenv").config({ path: __dirname + "./../.env" });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres"
  }
);

module.exports = sequelize;
