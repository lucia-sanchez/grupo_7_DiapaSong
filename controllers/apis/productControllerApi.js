const {validationResult} = require('express-validator');
const createResponseError = require("../../helpers/createResponseErrors");
const {getAllProducts, getOneProduct} = require("../../services/productsServices");

module.exports = {
  list: async (req, res) => {
    try {
      const products = await getAllProducts();

      
      return res.status(200).json({
        ok: true,
       data:products,
      
        meta: {
          status: 200,
          total: products.length,
          url: "/api/products",
        },
      });
    } catch (error) {
      return createResponseError(res, error);
      
    }
  },
  detail: async (req, res) => {
    try {
      
      const product = await getOneProduct(req.params.id, req)

      
      return res.status(200).json({
        ok: true,
       data:product,
        meta: {
          status: 200,
          total: 1,
          url: `/api/products/${req.params.id}`,
        },
      });
    } catch (error) {
      return createResponseError(res, error);
      
    }
  }
}