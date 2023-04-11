'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      profileImage: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      identifyId: {
        type: Sequelize.INTEGER
      },
      birthdate: {
        type: Sequelize.DATE
      },
      phone: {
        type: Sequelize.INTEGER
      },
      news: {
        type: Sequelize.INTEGER
      },
      terms: {
        type: Sequelize.INTEGER
      },
      rolId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName : "Rols"
          },
          key : 'id'
        }
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};