const express = require('express');
const router = express.Router();

const{detail,products} = require('../controllers/productController');

/* /products */
router.get('/', products);
router.get('/detail/:id?', detail);

module.exports = router;            