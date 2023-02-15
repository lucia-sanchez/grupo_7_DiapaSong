var express = require('express');
const {index, search, productCart, blog, faq} = require('../controllers/indexController');
var router = express.Router();

/* / */
router
    .get('/', index)
    .get('/search', search)
    .get('/productCart', productCart)
    .get('/blog', blog)
    .get('/faq', faq)

module.exports = router;
