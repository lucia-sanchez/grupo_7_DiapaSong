const express = require('express');
const router = express.Router();


const{detail,products,create,saveCreate,edit,update,removeConfirm,remove} = require('../controllers/productController');
// const checkUserAdmin = require('../middlewares/checkUserAdmin');
const { uploadProductsImage } = require('../middlewares/upload');

/* /products */
router.get('/', products)
      .get('/detail/:id?', detail)
      .get('/create', /*checkUserkAdmin,*/ create)
      .post('/create', uploadProductsImage.fields([{name:'mainImage'},{name:'images'}]), saveCreate)
      .get('/edit/:id', /*checkUserAdmin,*/ edit)
      .put('/update/:id', uploadProductsImage.fields([{name:'mainImage'},{name:'images'}]),update)
      .delete('/remove/:id', remove )
       // .get('/remove/:id', /*checkUserAdmin,*/ removeConfirm)
      .get('/:category?', products)
      

module.exports = router;            