const {validationResult} = require('express-validator');
const createResponseError = require("../../helpers/createResponseErrors");
const {getAllProducts, getOneProduct} = require("../../services/productsServices");

module.exports = {
  list: async (req, res) => {
    //cambiar el limite para probar
    const limit = 10;
    const page = parseInt(req.query.page)?parseInt(req.query.page):1;
    if (req.query.page && isNaN(req.query.page) || req.query.page == 0) {
    return res.status(400).json({ status:400,
        message: 'La página que buscas no existe, la consulta de pagina debe ser un numero mayor que 0' 
    });
}
    try {
      const /* products */{count, products} = await getAllProducts(limit,(page-1)*limit);
      //Math.ceil(count / limit) lo uso para redondear el numero siguiente en la division de cantidad (count) y el limite (limit) de registros que quiero mostrar por pagina, lo tuve que usar para que me muestre la ultima pagina si queda un resto mayor que 0 y menor al limite y si no hay mas no la muestra
      const nextPageUrl = count < limit || /* page+1 > count/limit || */ page >= Math.ceil(count / limit) ? null : `http://localhost:3000/api/products?page=${page + 1}`;
      const prevPageUrl = page === 1 ? null : `http://localhost:3000/api/products?page=${page - 1}`;
      if(req.query.page!=1 && page> Math.ceil(count / limit)  /* count/limit || req.query.page == 0 */){
          return res.status(400).json({ status:400,
              message: 'La página que buscas no existe' 
           });}
      
      return res.status(200).json({
        ok: true,
        nextPageUrl,
        prevPageUrl,
       data:{count,products},
      
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