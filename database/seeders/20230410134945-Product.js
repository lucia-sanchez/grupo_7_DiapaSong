'use strict';

/** @type {import('sequelize-cli').Migration} */
const products = require("../../data/products.json");
const categories =  require('../../data/productsCategories.json');
const colours = require('../../data/colours.json');

const productsJson = products.map(({title,subtitle,description,price,model,stock,category,colour,condition,}) => {
  return {
    title,
    subtitle,
    description,
    price,
    model,
    stock,
    idProductType: tipo === "product" ? 1 : 2,
    idCondition: condition === "news" ? 1 : 2,
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
