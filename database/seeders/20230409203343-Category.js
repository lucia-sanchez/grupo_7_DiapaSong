'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('Categories', [{
      category: "Cuerdas",
    
      createdAt:new Date()
      },
      {
        category: "Vientos",
        
        createdAt:new Date()
      },
      {
        category: "Percusión",
        
        createdAt:new Date()
      },
      {
        category: "Electrónicos",
        
        createdAt:new Date()
      },
      {
        category: "Accesorios",
        
        createdAt:new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Categories', null, {});
    
  }
};
