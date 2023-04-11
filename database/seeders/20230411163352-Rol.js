"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Rols",
      [
        {
          roles: "Admin",

          createdAt: new Date(),
        },
        {
          roles: "User",

          createdAt: new Date(),
        },
    
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rols", null, {});
  },
};
