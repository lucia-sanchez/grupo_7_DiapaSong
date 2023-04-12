var express = require("express");
const {
  index,
  search,
  productCart,
  blog,
  faq,
} = require("../controllers/indexController");
var router = express.Router();

const db = require("../database/models");
const sequelize = db.sequelize;

/* / */
router
  .get("/", index)
  .get("/search", search)
  .get("/productCart", productCart)
  .get("/blog", blog)
  .get("/faq", faq)

  // ruta para probar funcionamiento de las relaciones
  .get("/database", (req, res) => {
    db.Product.findByPk(1, {
      include: ["productType", "categories", "colors", "condition"],
    }).then((product) => {
      res.send({ product });
    });
  }),
  (module.exports = router);
