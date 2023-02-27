const express = require('express');
const router = express.Router();


const{detail,products,create,saveCreate,edit,update,removeConfirm,remove} = require('../controllers/productController');

/* /products */
router.get('/', products)
      .get('/detail/:id?', detail)
      .get('/create', create)
      .post('/create', saveCreate)
      .get('/edit/:id',edit)
      .put('/update/:id',update)
      .get('/remove/:id',removeConfirm)
      .delete('/remove/:id', remove )
      .get('/:category?', products)
      

module.exports = router;            