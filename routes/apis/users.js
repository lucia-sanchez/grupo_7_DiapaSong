var express = require('express');
var router = express.Router();

const { list, userDetail, verifyEmail } = require('../../controllers/apis/userController');
const loginUserValidator = require('../../validations/loginUserValidator');
const checkUserGuest = require('../../middlewares/checkUserGuest');
const { uploadUserImage } = require('../../middlewares/upload');
const checkUserLogin = require('../../middlewares/checkUserLogin');
const registerUserValidator = require('../../validations/registerUserValidator');
/* api/users */
router
    .get('/', list)
    .post('/verify-email', verifyEmail)
    .get('/:id', userDetail)


module.exports = router;
