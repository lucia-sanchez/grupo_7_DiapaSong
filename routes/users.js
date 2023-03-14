var express = require('express');
var router = express.Router();

const {register,login,processlogin,password,saveRegister, logOut} = require('../controllers/userController');
const loginUserValidator = require('../validations/loginUserValidator');
const checkUserGuest = require('../middlewares/checkUserGuest');
/* users */
router
        .get('/register', /*checkUserGuest,*/ register)
        .post('/register', saveRegister)
        .get('/login', /*checkUserGuest,*/ login)
        .post('/login', loginUserValidator, processlogin)
        .get('/password', password)
        .get('/logOut', logOut)

module.exports = router;
