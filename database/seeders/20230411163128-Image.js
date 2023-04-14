"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          name: "Guitarra Gibson",
          main: 1,
          idProduct: 1,
          createdAt: new Date(),
        },
        {
          name: "Bateria",
          main: 1,
          idProduct: 2,
          createdAt: new Date(),
        },
        {
          name: "Piano 1/4 Cola",
          main: 1,
          idProduct: 3,
          createdAt: new Date(),
        },
        {
          name: "Saxo Tenor",
          main: 1,
          idProduct: 4,
          createdAt: new Date(),
        },
        {
          name: "Microfono",
          main: 1,
          idProduct: 5,
          createdAt: new Date(),
        },
        {
          name: "Flauta Melódica",
          main: 1,
          idProduct: 6,
          createdAt: new Date(),
        },
        {
          name: "Tuba Bb Stagg",
          main: 1,
          idProduct: 7,
          createdAt: new Date(),
        },
        {
          name: "Armónica Diatónica",
          main: 1,
          idProduct: 8,
          createdAt: new Date(),
        },
        {
          name: "Clarinete De Estudio",
          main: 1,
          idProduct: 9,
          createdAt: new Date(),
        },
        {
          name: "Capotraste guitarra",
          main: 1,
          idProduct: 10,

          createdAt: new Date(),
        },
        {
          name: "Soporte guitarra",
          main: 1,
          idProduct: 11,

          createdAt: new Date(),
        },
        {
          name: "Palillos Bateria",
          main: 1,
          idProduct: 12,

          createdAt: new Date(),
        },
        {
          name: "Soporte Microfono",
          main: 1,
          idProduct: 13,

          createdAt: new Date(),
        },
        {
          name: "Contrabajo",
          main: 1,
          idProduct: 14,

          createdAt: new Date(),
        },
        {
          name: "Arpa Electroacústica",
          main: 1,
          idProduct: 15,
          createdAt: new Date(),
        },
        {
          name: "Violin 4/4",
          main: 1,
          idProduct: 16,
          createdAt: new Date(),
        },
        {
          name: "Bongo",
          main: 1,
          idProduct: 17,
          createdAt: new Date(),
        },
        {
          name: "Tambor De Marcha",
          main: 1,
          idProduct: 18,
          createdAt: new Date(),
        },
        {
          name: "Platillo Crash",
          main: 1,
          idProduct: 19,
          createdAt: new Date(),
        },
        {
          name: "Guiro",
          main: 1,
          idProduct: 20,
          createdAt: new Date(),
        },
        {
          name: "Tumbadora",
          main: 1,
          idProduct: 21,
          createdAt: new Date(),
        },
        {
          name: "Laud Oud",
          main: 1,
          idProduct: 22,
          createdAt: new Date(),
        },
        {
          name: "Funda Bateria",
          main: 1,
          idProduct: 23,
          createdAt: new Date(),
        },
        {
          name: "Pedalera",
          main: 1,
          idProduct: 24,
          createdAt: new Date(),
        },
        {
          name: "Piano Electrico",
          main: 1,
          idProduct: 25,
          createdAt: new Date(),
        },
        {
          name: "Amplificador",
          main: 1,
          idProduct: 26,
          createdAt: new Date(),
        },
        {
          name: "Bateria Electronica",
          main: 1,
          idProduct: 27,
          createdAt: new Date(),
        },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Images", null, {});
  },
};
