var express = require('express');
const {index, search, productCart, blog,saveBlog, faq, suscripcion, dashboard, removeProduct} = require('../controllers/indexController');
var router = express.Router();
const db = require('../database/models');
const sequelize = db.sequelize;



/* / */
router
    .get('/', index)
    .post("/", suscripcion)
    .get('/search', search)
    .get('/productCart', productCart)
    .get('/blog', blog)
    .post('/blog', saveBlog)

    .get("/dashboard",dashboard )
    .delete('dashboard',removeProduct )
    .get('/faq', faq)


    .get("/database", (req, res) => {
        db.Product.findByPk(1, {
          include: ["condition","colors","categories","productType"],
        }).then((cart) => {
          res.send({ cart });
        });
      }),
        
module.exports = router;