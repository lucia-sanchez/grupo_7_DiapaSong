'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('ProductTypes',[{
        type : "Product",
        createdAt:new Date()
      },
    {
      type : "Ticket",
      createdAt:new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('ProductTypes', null, {});
    
  }
};
// 