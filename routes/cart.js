var express = require('express');
//const {index, search, blog,saveBlog, faq, suscripcion} = require('../controllers/indexController');
var router = express.Router();
const db = require('../database/models');
const { productCart, addToCart } = require('../controllers/cartController');
const sequelize = db.sequelize;

/* / */
router
    //.get('/', index)
    //
    //.get('/search', search)
    .get('/productCart', productCart)
    .post("/addToCart", addToCart)
    //.get('/blog', blog)
    //.post('/blog', saveBlog)

    //.get('/faq', faq)


    /* .get("/database", (req, res) => {
        db.Product.findByPk(1, {
          include: ["condition","colors","categories","productType"],
        }).then((cart) => {
          res.send({ cart });
        });
      }), */
        
module.exports = router;