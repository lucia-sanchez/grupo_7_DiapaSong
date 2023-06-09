const express = require('express');
const router = express.Router();
const{list,detail,store,update,destroy, lastProduct} = require('../../controllers/apis/productControllerApi');



/*const checkUserAdmin = require('../../middlewares/checkUserAdmin');
const { uploadProductsImage } = require('../../middlewares/upload');
const productValidator = require('../../validations/productValidator');
 */


/* /products */
router.get('/', list)
       .get('/last', lastProduct)
       .get('/:id?', detail)
       .post('/', store)
       .put('/:id?', update)
       .delete('/:id?', destroy)

module.exports = router;            