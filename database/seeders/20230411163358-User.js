"use strict";

/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
    {
      name: "Admin",   
      profileImage:null,
      email: "admin@admin.com", 
      password: bcryptjs.hashSync("admin",10), 
      identifyId:"01",    
      birthdate:null,
      phone:"1231231231",   
      news:null,
      /* terms:null, */
      rolId: 1,
      createdAt: new Date()       
    },
    {
      name: "Usuario Tester",   
      profileImage:null, 
      email: "testeruser@test.com", 
      password: bcryptjs.hashSync("test",10), 
      identifyId:"30303030",    
      birthdate:null,   
      phone:"42190000",   
      news:null,
      /* terms:null, */
      rolId: 2,
      createdAt: new Date()
    },
    {
      name: "Lucia Sanchez",   
      profileImage:null, 
      email: "lucia@admin.com", 
      password: bcryptjs.hashSync("12345678",10), 
      identifyId:"123456789",    
      birthdate:"1990-08-03 00:00:00",   
      phone:"2235577185",   
      news:null,
      /* terms:null, */
      rolId: "1",
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
