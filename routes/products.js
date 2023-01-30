const express = require('express');
const router = express.Router();

const{detail} = require('../controllers/productController');

/* /products */
router.get('/detail/:id?', detail);

module.exports = router;