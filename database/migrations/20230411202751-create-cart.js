'use strict';

const product = require('../models/product');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      units: {
        type: Sequelize.INTEGER
      },
      totalPrice: {
        type: Sequelize.DECIMAL(10,2)
      },
      idProduct: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      saleId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      deletedAt: {
         allowNull: true,
         type: Sequelize.DATE
      },
      ProductId:{
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carts');
  }
};