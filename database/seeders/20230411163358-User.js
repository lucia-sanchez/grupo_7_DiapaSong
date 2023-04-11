"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
    {
      name: "Fulano",   
      profileImage:null,
      email: "Fulano@yahoo.com", 
      password: "12345678", 
      identifyId:"01",    
      birthdate:null,
      phone:"1231231231",   
      news:null,
      terms:null,
      rolId: 1,
      createdAt: new Date()       
    },
    {
      name: "Mengano",   
      profileImage:null, 
      email: "Mengano@yahoo.com", 
      password: "3213213211", 
      identifyId:"02",    
      birthdate:null,   
      phone:"198789865",   
      news:null,
      terms:null,
      rolId: 2,
      createdAt: new Date()
    }
  
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
