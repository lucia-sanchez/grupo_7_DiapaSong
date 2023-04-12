"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Carts",
      [
        {
          units:15,
          totalPrice:150 ,
          idProduct:2 ,
          saleId: 12,
          createdAt:new Date (),
        },
        
    
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Carts", null, {});
  },
};
