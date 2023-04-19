const express = require('express');
const router = express.Router();


const{detail,products,create,saveCreate,edit,update,remove} = require('../controllers/productController');
const checkUserAdmin = require('../middlewares/checkUserAdmin');

const { uploadProductsImage } = require('../middlewares/upload');
const productValidator = require('../validations/productValidator');

/* /products */
router.get('/', products)
      .get('/detail/:id?', detail)
      .get('/create',  create)
      //checkUserAdmin,
      .post('/create', uploadProductsImage, productValidator, saveCreate) 
      .get('/edit/:id', edit)
      //checkUserAdmin,
      .put('/update/:id', uploadProductsImage/* .fields([{name:'mainImage'},{name:'images'}]) */,update)
      .delete('/remove/:id',remove )
      //checkUserAdmin, 
      .get('/:category?', products) 
      

module.exports = router;            