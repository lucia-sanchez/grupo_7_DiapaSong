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
        attributes: [
          "id",
          "title",
          "subtitle",
          "description",
          "price",
          "stock",
        ],

        limit,
        offset,
        totalPages,
        page,
      });
      return {
        count,
        products,
        totalPages,
        page,
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
          {
            association: "images",
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
  getCountProducts: async () => {
    try {
      const totalProducts = await db.Product.count();

      return totalProducts;
    } catch (error) {
      console.log(error);
      throw {
        status: 500,
        message: error.message,
      };
    }
  },
  createProduct: async ({
    title,
    subtitle,
    description,
    price,
    idCategory,
    idColor,
    model,
    stock,
  }) => {
    try {
      const newProduct = await db.Product.create({
        title: title.trim(),
        subtitle: subtitle.trim(),
        description: description.trim(),
        price: price,
        idCategory: idCategory,
        idColor: idColor,
        model: model,
        stock: stock,
      });

      return newProduct;
    } catch (error) {
      console.log(error);
      throw {
        status: 500,
        message: error.message,
      };
    }
  },
  updateProduct: async (
    id,
    { title, subtitle, description, price, idCategory, idColor, model, stock }
  ) => {
    try {
      const productUpdated = await db.Product.update(
        {
          title: title,
          subtitle: subtitle,
          description: description,
          price: price,
          idCategory: idCategory,
          idColor: idColor,
          model: model,
          stock: stock,
        },
        {
          where: { id: id },
        }
      );
      return productUpdated;
    } catch (error) {
      console.log(error);
      throw {
        status: 500,
        message: error.message,
      };
    }
  },

  destroyProduct: async (id) => {
    try {
      await db.Image.destroy({
        where: { idProduct: id },
      });
      const destroyProduct = await db.Product.destroy({
        where: { id: id },
        force: true,
      });

      return destroyProduct;
    } catch (error) {
      console.log(error);
      throw {
        status: 500,
        message: error.message,
      };
    }
  },
};
