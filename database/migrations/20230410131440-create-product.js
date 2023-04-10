'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      subtitle: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      model: {
        type: Sequelize.STRING(100)
      },
      stock: {
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      idProductType: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName : "ProductTypes"
          },
          key : 'id'
        }
      },
      idCondition: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName : "Conditions"
          },
          key : 'id'
        }
      },
      idCategory: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName : "Categories"
          },
          key : 'id'
        }
      },
      idColor: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName : "Colors"
          },
          key : 'id'
        }
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        onDelete : "cascade"
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      deletedAt: {
         allowNull: true,
         type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};