var express = require('express');
var router = express.Router();

const {register,login,password,saveRegister} = require('../controllers/userController');
/* users */
router
        .get('/register', register)
        .post('/register', saveRegister)
        .get('/login', login)
        .get('/password', password)

module.exports = router;
