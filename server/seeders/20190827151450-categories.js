"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          CategoryID: 1,
          name: "Land Tours"
        },
        {
          CategoryID: 2,
          name: "Sea Tours"
        },
        {
          CategoryID: 3,
          name: "Adventures"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
