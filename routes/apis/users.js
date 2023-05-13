var express = require('express');
var router = express.Router();

const { list, userDetail, verifyEmail } = require('../../controllers/apis/userController');

/* api/users */
router
    .get('/', list)
    .post('/verify-email', verifyEmail)
    .get('/:id', userDetail)


module.exports = router;
