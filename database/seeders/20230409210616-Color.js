'use strict';

/** @type {import('sequelize-cli').Migration} */
const colour = require("../../data/colours.json");
const colours = colour.map(({name, colour}) => {
  return {
    name, 
    colour,
    createdAt:new Date()
  }
})
module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('Colors',colours, {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Colors', null, {});
    
  }
};
