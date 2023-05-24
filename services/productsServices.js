const { Association } = require("sequelize");
const db = require("../database/models");
const literalQueryUrlImage = require("../helpers/literalQueryUrlImage");

module.exports = {
  getAllProducts: async (/**/ req, limit, offset, page, totalPages) => {
    try {

      const { count, rows: products } = await db.Product.findAndCountAll({
        include: [
          {
            association: "colors",
            attributes: {
              exclude: ["id", "createdAt", "updatedAt", "color"],
            },
          },
          {
            association: "categories",
            attributes: {
              exclude: ["id", "createdAt", "updatedAt"],
            },
          },
          {
            association: "images",
            attributes: {
              exclude: [
                "main",
                "id",
                "createdAt",
                "updatedAt",
                "idProduct",
                "name",
              ],
              include: [
                literalQueryUrlImage(
                  req,
                  "productos",
                  "images.name",
                  "urlImage"
                ),
              ],
            },
          },
        ],
        attributes: ["id", "title","subtitle", "description","price"],
        limit,
        offset,
        totalPages,
        page
      });
      return {
        count,
        products,
        totalPages,
        page
        
        
      
      };
    } catch (error) {
      throw {
        status: 500,
        message: error.message,
      };
    }
  },
  getOneProduct: async (id, req) => {
    try {
      const images = await db.Image.findByPk(id, {
        attributes: {
          exclude: ["main", "id", "createdAt", "updatedAt", "idProduct"],
          include: [literalQueryUrlImage(req, "productos", "name", "urlImage")],
        },
      });
      const product = await db.Product.findByPk(id, {
        include: [
          {
            association: "colors",
            attributes: {
              exclude: ["id", "createdAt", "updatedAt", "color"],
            },
          },

          {
            association: "categories",
            attributes: {
              exclude: ["id", "createdAt", "updatedAt"],
            },
          },
        ],
        attributes: ["id", "title", "description"],
      });
      return {
        product,
        images,
      };
    } catch (error) {
      throw {
        status: 500,
        message: error.messag,
      };
    }
  },
};
