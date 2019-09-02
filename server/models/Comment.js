const Sequelize = require("sequelize");
const sequelize = require("../database");

const Comment = sequelize.define("Comment", {
  CommentID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  Heading: {
    type: Sequelize.STRING
  },
  Description: {
    type: Sequelize.TEXT("medium")
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

module.exports = Comment;
