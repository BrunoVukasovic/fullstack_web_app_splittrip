const User = require("../models/User");

const userController = {
  deleteUserByEmail: (req, res) => {
    const { Id } = req.user;
    User.destroy({
      where: {
        Id
      }
    });
  },

  findUserByEmail: email => {
    return User.findOne({
      where: { Email: email }
    })
      .then(user => user)
      .catch(error => console.log(error));
  }
};

module.exports = userController;
