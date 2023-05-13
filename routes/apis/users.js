var express = require('express');
var router = express.Router();

const {list,userDetail, verifyEmail} = require('../../controllers/apis/userController');

/* api/users */
router
.get('/', list)
.get('/:id', userDetail)
.post('/verify-email', verifyEmail)
      

module.exports = router;
