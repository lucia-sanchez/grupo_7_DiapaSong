var express = require('express');
const {index, productCart} = require('../controllers/indexController');
var router = express.Router();

/* / */
router.get('/', index);
router.get('/productCart', productCart);

module.exports = router;
