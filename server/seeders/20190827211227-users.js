"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          Email: "a@a.com",
          Password:
            "$2b$10$W1NEykljoKik6SeJqmBahuLMyQZsWLRgpLw1LMyiuVhTCIUIJMPpG",
          FirstName: "Ante",
          LastName: "User",
          Phone: 98
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
