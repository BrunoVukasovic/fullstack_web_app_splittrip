const User = require("../models/User");

const userController = {
  async deleteUserByEmail(req, res) {
    const { email } = req.body;
    User.destroy({
      where: {
        Email: email
      }
    });
  }
};

module.exports = userController;
