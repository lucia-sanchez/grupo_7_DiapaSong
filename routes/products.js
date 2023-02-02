const express = require('express');
const router = express.Router();

const{detail,products,create} = require('../controllers/productController');

/* /products */
router.get('/', products)
      .get('/create', create)
      .post('/create', create)
      .get('/detail/:id?', detail);

module.exports = router;            