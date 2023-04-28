var express = require('express');
var router = express.Router();

const {list,userDetail} = require('../../controllers/apis/userController');
const loginUserValidator = require('../../validations/loginUserValidator');
const checkUserGuest = require('../../middlewares/checkUserGuest');
const { uploadUserImage } = require('../../middlewares/upload');
const checkUserLogin = require('../../middlewares/checkUserLogin');
const registerUserValidator = require('../../validations/registerUserValidator');
/* api/users */
router
.get('/', list)
.get('/:id', userDetail)
      

module.exports = router;
