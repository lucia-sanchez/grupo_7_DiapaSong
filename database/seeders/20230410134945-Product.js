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
    idProductType:null,
    idCondition:null,
    idCategory:null,
    idColor:null,
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
