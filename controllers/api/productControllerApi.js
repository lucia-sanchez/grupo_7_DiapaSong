const {validationResult} = require('express-validator');
const createResponseError = require("../../helpers/createResponseErrors");
const {getAllProducts} = require("../../services/productsServices");

module.exports = {
  list: async (req, res) => {
    try {
      const products = await getAllProducts();

      
      return res.status(200).json({
        ok: true,
       count:products,
        meta: {
          status: 200,
          total: products.length,
          url: "/api/products",
        },
      });
    } catch (error) {
      return createResponseError(res, error);
      
    }
  }}