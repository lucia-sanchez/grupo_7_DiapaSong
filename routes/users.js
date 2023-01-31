var express = require('express');
var router = express.Router();

const {register,login,password} = require('../controllers/userController');
/* users */
router
        .get('/register', register)
        .get('/login', login)
        .get('/password', password)

module.exports = router;
