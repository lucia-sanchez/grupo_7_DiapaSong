var express = require('express');
var router = express.Router();

const { list, userDetail, verifyEmail } = require('../../controllers/apis/userController');
const { edit, editarPerfil } = require('../../controllers/userController');
const { remove } = require('../../controllers/productController');
const { uploadUserImage } = require('../../middlewares/upload');
const registerUserValidator = require('../../validations/registerUserValidator');

/* api/users */
router
    .get('/', list)
    .post('/verify-email', verifyEmail)
    .get('/:id', userDetail)
    .put('/update/:id', uploadUserImage, registerUserValidator, editarPerfil)
    .delete('/remove/:id', remove )


module.exports = router;
