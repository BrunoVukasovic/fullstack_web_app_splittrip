"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          CategoryID: 1,
          CategoryName: "Land Tours",
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          CategoryID: 2,
          CategoryName: "Sea Tours",
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          CategoryID: 3,
          CategoryName: "Adventures",
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
