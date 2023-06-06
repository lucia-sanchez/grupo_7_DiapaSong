"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          name: "guitarra1.png",
          main: 1,
          idProduct: 1,
          createdAt: new Date(),
        },
        {
          name: "bateria1.png",
          main: 1,
          idProduct: 2,
          createdAt: new Date(),
        },
        {
          name: "piano1.png",
          main: 1,
          idProduct: 3,
          createdAt: new Date(),
        },
        {
          name: "saxo1.png",
          main: 1,
          idProduct: 4,
          createdAt: new Date(),
        },
        {
          name: "micro1.png",
          main: 1,
          idProduct: 5,
          createdAt: new Date(),
        },
        {
          name:  "flauta.png",
          main: 1,
          idProduct: 6,
          createdAt: new Date(),
        },
        {
          name: "tuba.png",
          main: 1,
          idProduct: 7,
          createdAt: new Date(),
        },
        {
          name:  "armonica.png",
          main: 1,
          idProduct: 8,
          createdAt: new Date(),
        },
        {
          name:  "clarinete.png",
          main: 1,
          idProduct: 9,
          createdAt: new Date(),
        },
        {
          name: "capotraste.png",
          main: 1,
          idProduct: 10,

          createdAt: new Date(),
        },
        {
          name: "soporteGuitarra.png",
          main: 1,
          idProduct: 11,

          createdAt: new Date(),
        },
        {
          name: "palillos.png",
          main: 1,
          idProduct: 12,

          createdAt: new Date(),
        },
        {
          name: "piemicro.png",
          main: 1,
          idProduct: 13,

          createdAt: new Date(),
        },
        {
          name: "contrabajo.png",
          main: 1,
          idProduct: 14,

          createdAt: new Date(),
        },
        {
          name: "arpa.png",
          main: 1,
          idProduct: 15,
          createdAt: new Date(),
        },
        {
          name: "violin.png",
          main: 1,
          idProduct: 16,
          createdAt: new Date(),
        },
        {
          name: "bongo1.png",
          main: 1,
          idProduct: 17,
          createdAt: new Date(),
        },
        {
          name: "tambor1.png",
          main: 1,
          idProduct: 18,
          createdAt: new Date(),
        },
        {
          name: "plato1.png",
          main: 1,
          idProduct: 19,
          createdAt: new Date(),
        },
        {
          name: "guiro1.png",
          main: 1,
          idProduct: 20,
          createdAt: new Date(),
        },
        {
          name:  "tumbadora1.png",
          main: 1,
          idProduct: 21,
          createdAt: new Date(),
        },
        {
          name: "laud1.png",
          main: 1,
          idProduct: 22,
          createdAt: new Date(),
        },
        {
          name: "fundabateria1.png",
          main: 1,
          idProduct: 23,
          createdAt: new Date(),
        },
        {
          name: "pedalera1.png",
          main: 1,
          idProduct: 24,
          createdAt: new Date(),
        },
        {
          name: "pianoelectrico.png",
          main: 1,
          idProduct: 25,
          createdAt: new Date(),
        },
        {
          name: "ampli1.png",
          main: 1,
          idProduct: 26,
          createdAt: new Date(),
        },
        {
          name:"bateriaElectronica.png",
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
