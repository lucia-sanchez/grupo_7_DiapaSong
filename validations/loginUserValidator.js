const {check,body}= require('express-validator');
const users = require('../data/users.json');
const {compareSync} = require('bcryptjs');
const userController = require('../controllers/userController');

module.exports = [
check('email')
    .notEmpty().withMessage('El email es obligatorio').bail()
    .isEmail().withMessage('El email tiene un formato incorrecto'),
body('password')
.notEmpty().withMessage('Lacontraseña es obligatoria').bail()
.custom((value,{req})=>{
let user = users.find(user =>user.email === req.body.email && compareSync(value, user.pasword));

return user
}).withMessage('Credenciales Invalidas')
]