"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Sales",
      [
        {
          date:new Date (),
          total: null,
          userId:2 ,
          PaymentMethodId: 1,
          createdAt:new Date (),
        }
        
    
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Sales", null, {});
  },
};
