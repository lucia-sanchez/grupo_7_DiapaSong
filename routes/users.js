var express = require('express');
var router = express.Router();

const {register,login,processlogin,password,saveRegister, logOut, profile} = require('../controllers/userController');
const loginUserValidator = require('../validations/loginUserValidator');
const checkUserGuest = require('../middlewares/checkUserGuest');
const { uploadUserImage } = require('../middlewares/upload');
const checkUserLogin = require('../middlewares/checkUserLogin');
const registerUserValidator = require('../validations/registerUserValidator');
/* users */
router
        .get('/register', checkUserGuest,  register)
        .post('/register',  uploadUserImage.single('mainImage'), registerUserValidator, saveRegister)
        .get('/login', checkUserGuest, login)
        .post('/login', loginUserValidator, processlogin)
        .get('/profile', checkUserLogin, uploadUserImage.single('mainImage'), profile)
        .get('/password', password)
        .get('/logOut', logOut)

module.exports = router;
