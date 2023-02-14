var express = require('express');
const {index, search, productCart} = require('../controllers/indexController');
var router = express.Router();

/* / */
router.get('/', index);
router.get('/search', search);
router.get('/productCart', productCart);

module.exports = router;
