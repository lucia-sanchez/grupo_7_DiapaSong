'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('Conditions', [{
      condition: "Nuevo",
      createdAt:new Date()
      },
      {
        condition: "Usado",
        createdAt:new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Conditions', null, {});
    
  }
};
