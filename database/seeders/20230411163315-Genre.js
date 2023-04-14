"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Genres",
      [
        {
          genre: "Latino",

          createdAt: new Date(),
        },
        {
          genre: "Punk",

          createdAt: new Date(),
        },
        {
          genre: "Clásico",

          createdAt: new Date(),
        },
        {
          genre: "Rock",

          createdAt: new Date(),
        },
        {
          genre: "Metal",

          createdAt: new Date(),
        },{
          genre: "Folklore",

          createdAt: new Date(),
        },
        {
          genre: "Jazz",

          createdAt: new Date(),
        },
        {
          genre: "Pop",

          createdAt: new Date(),
        },
        {
          genre: "Cumbia",

          createdAt: new Date(),
        },
        {
          genre: "Alternativo",

          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Genres", null, {});
  },
};
