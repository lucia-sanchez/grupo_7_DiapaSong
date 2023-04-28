const { Association } = require("sequelize");
const db = require("../database/models");
module.exports = {
  getAllProducts: async (req) => {
    try {
      const count = await db.Product.count();
      const products = await db.Product.findAll({
        include: [
          
           {association: "colors",
            attributes: {
            exclude: ["id", "createdAt", "updatedAt", "color"]}},
        
          {association: "categories",
            attributes: {
              exclude: ["id", "createdAt", "updatedAt"]}},
             
        ],
        attributes: ["id", "title", "description"],
      });
      return {
        count,
        products,
      };
    } catch (error) {
      throw {
        status: 500,
        message: "error.message",
      };
    }
  },
  getOneProduct: async (id,req) => {
    try {
      const product = await db.Product.findByPk(id, {
        include: [
           {association: "colors",
            attributes: {
            exclude: ["id", "createdAt", "updatedAt","color"]}},
        
          {association: "categories",
            attributes: {
              exclude: ["id", "createdAt", "updatedAt"]}},
              {association: "images",
              attributes: {
                exclude: ["id", "createdAt", "updatedAt"]}},
        ],
        attributes: ["id", "title", "description"],
      });
      return {
        product
      };
    } catch (error) {
      throw {
        status: 500,
        message: "error.message",
      };
    }
  },
};
