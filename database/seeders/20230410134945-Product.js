'use strict';

/** @type {import('sequelize-cli').Migration} */
const products = require("../../data/products.json");
const categories =  require('../../data/productsCategories.json');
const colours = require('../../data/colours.json');

const productsJson = products.map(({title,subtitle,description,price,model,stock,category,colour}) => {
  return {
    title,
    subtitle,
    description,
    price,
    model,
    stock,
    idProductType:1,
    idCondition:1,
    idCategory: categories.find(item=>item.name===category)?categories.find(item=>item.name===category).id:null,
    idColor: colours.find(item=>item.name===colour)?colours.find(item=>item.name===colour).id:null,
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
