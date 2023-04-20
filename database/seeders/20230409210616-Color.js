"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Colors",
      [
        {
          name: "No especifica",
          color: "",
          createdAt: new Date()
        },
        {
          name: "Blanco",
          color: "#FFFFFF",
          createdAt: new Date()
        },
        {
          name: "Negro",
          color: "#000000",
          createdAt: new Date()
        },
        {
          name: "Rojo",
          color: "#FF0000",
          createdAt: new Date()
        },
        {
          name: "Naranja",
          color: "#FF8000",
          createdAt: new Date()
        },
        {
          name: "Amarillo",
          color: "#FFFF00",
          createdAt: new Date()
        },
        {
          name: "Verde",
          color: "#00FF00",
          createdAt: new Date()
        },
        {
          name: "Celeste",
          color: "#00FFFF",
          createdAt: new Date()
        },
        {
          name: "Azul",
          color: "#0000FF",
          createdAt: new Date()
        },
        {
          name: "Violeta",
          color: "#BF00FF",
          createdAt: new Date()
        },
        {
          name: "Rosa",
          color: "#FE2EF7",
          createdAt: new Date()
        },
        {
          name: "Dorado",
          color: "#D4AF37",
          createdAt: new Date()
        },
        {
          name: "Plateado",
          color: "#C0C0C0",
          createdAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Colors", null, {});
  },
};
