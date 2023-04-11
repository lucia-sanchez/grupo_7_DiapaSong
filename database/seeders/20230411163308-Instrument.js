'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('Instruments', [{
      instrument: "Cuerdas",
    
      createdAt:new Date()
      },
      {
        instrument: "Vientos",
        
        createdAt:new Date()
      },
      {
        instrument: "Percusión",
        
        createdAt:new Date()
      },
      {
        instrument: "Electrónicos",
        
        createdAt:new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Instruments', null, {});
    
  }
};
