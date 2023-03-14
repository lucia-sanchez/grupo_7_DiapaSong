var express = require('express');
var router = express.Router();

const {register,login,processlogin,password,saveRegister, logOut} = require('../controllers/userController');
const loginUserValidator = require('../validations/loginUserValidator');
/* users */
router
        .get('/register', register)
        .post('/register', saveRegister)
        .get('/login', login)
        .post('/login', loginUserValidator, processlogin)
        .get('/password', password)
        .get('/logOut', logOut)

module.exports = router;
