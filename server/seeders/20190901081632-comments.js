"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          CommentID: 1234,
          Heading: "Not great, not terrible",
          Description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas mauris, vel consectetur dolor. Pellentesque eu egestas odio. Integer facilisis dolor massa, vitae ullamcorper odio pharetra volutpat. Integer nibh ipsum, mattis a facilisis in, lacinia a elit. Maecenas consequat odio lorem, et porttitor leo consequat eu. Aliquam tristique congue nisl non feugiat. Sed hendrerit efficitur ex sit amet mollis. Praesent libero odio, consequat et dui nec, facilisis viverra tellus.",
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          CommentID: 2234,
          Heading: "Good experience",
          Description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas mauris, vel consectetur dolor. Pellentesque eu egestas odio. Integer facilisis dolor massa, vitae ullamcorper odio pharetra volutpat. Integer nibh ipsum, mattis a facilisis in, lacinia a elit. Maecenas consequat odio lorem, et porttitor leo consequat eu. Aliquam tristique congue nisl non feugiat. Sed hendrerit efficitur ex sit amet mollis. Praesent libero odio, consequat et dui nec, facilisis viverra tellus.",
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  }
};
