var express = require('express');
var router = express.Router();

const {register,login,password,saveRegister} = require('../controllers/userController');
const checkUserGuest = require('../middlewares/checkUserGuest');
/* users */
router
        .get('/register', /*checkUserGuest,*/ register)
        .post('/register', saveRegister)
        .get('/login', /*checkUserGuest,*/ login)
        .get('/password', password)

module.exports = router;
