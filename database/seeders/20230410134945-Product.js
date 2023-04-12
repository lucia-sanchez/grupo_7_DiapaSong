'use strict';

/** @type {import('sequelize-cli').Migration} */
const products = require("../../data/products.json");

const productsJson = products.map(({title,subtitle,description,price,model,stock}) => {
  return {
    title,
    subtitle,
    description,
    price,
    model,
    stock,
    idProductType,
    idCondition:2,
    idCategory:2,
    idColor:5,
    createdAt:new Date()
  }
})
module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('Products',productsJson, {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Products', null, {});
    
  }
};
