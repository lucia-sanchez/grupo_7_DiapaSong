const db = require("../database/models")
module.exports = {
  getAllProducts: async () => {
    try {
      const products = await db.Product.findAll({
        include:["colors","categories"],
        attributes: ["id", "title", "description",],  
      });
          
      return{
        products
      };
      
    } catch (error) {
      throw {
        status: 500,
        message: "error.message",
      };
    }
  }}
