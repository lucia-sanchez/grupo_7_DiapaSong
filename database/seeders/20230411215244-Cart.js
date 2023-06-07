"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Carts",
      [
        {
          units:1,
          totalPrice: null,
          idProduct:2 ,
          saleId: 1,
          createdAt:new Date (),
        },{
          units:1,
          totalPrice: null,
          idProduct:5 ,
          saleId: 1,
          createdAt:new Date (),
        },{
          units:1,
          totalPrice: null,
          idProduct: 10 ,
          saleId: 1,
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
