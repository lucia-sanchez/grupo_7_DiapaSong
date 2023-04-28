const express = require('express');
const router = express.Router();


const{list,detail} = require('../../controllers/api/productControllerApi');
/* const checkUserAdmin = require('../../middlewares/checkUserAdmin');

const { uploadProductsImage } = require('../../middlewares/upload');
const productValidator = require('../../validations/productValidator');
 */
/* /products */
router.get('/', list)
       .get('/:id?', detail)

      

module.exports = router;            