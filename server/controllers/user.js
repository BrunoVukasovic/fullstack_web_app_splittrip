const User = require("../models/User");

const userController = {
  deleteUserByEmail: (req, res) => {
    const { email } = req.body;
    User.destroy({
      where: {
        Email: email
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
