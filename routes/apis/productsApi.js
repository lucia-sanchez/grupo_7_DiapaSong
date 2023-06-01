const express = require('express');
const router = express.Router();
const{list,detail,store,update,destroy} = require('../../controllers/apis/productControllerApi');



/*const checkUserAdmin = require('../../middlewares/checkUserAdmin');
const { uploadProductsImage } = require('../../middlewares/upload');
const productValidator = require('../../validations/productValidator');
 */


/* /products */
router.get('/', list)
       .get('/:id?', detail)
       .post('/', store)
       .put('/:id?', update)
       .delete('/:id?', destroy)

module.exports = router;            