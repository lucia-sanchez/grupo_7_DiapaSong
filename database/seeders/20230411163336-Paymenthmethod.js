"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "PaymentMethods",
      [
        {
          method: "Tarjeta de credito",

          createdAt: new Date(),
        },
        {
          method: "Tarjeta de debito",

          createdAt: new Date(),
        },
        {
          method: "Mercadopago",

          createdAt: new Date(),
        },
        {
          method: "Rapipago",

          createdAt: new Date(),
        },
        {
          method: "Pagofacil",

          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PaymentMethods", null, {});
  },
};
