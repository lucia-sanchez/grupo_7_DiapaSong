var express = require('express');
const { index } = require('../../controllers/apis/categoryController');
var router = express.Router();

/* api/categories */
router
    .get('/', index)
  

module.exports = router;
