const Sequelize = require("sequelize");
const sequelize = require("../database");
const Review = require("./Review");

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
  },
  ReviewID: {
    type: Sequelize.INTEGER
  }
});

Comment.belongsTo(Review, { foreignKey: "ReviewID" });

module.exports = Comment;
