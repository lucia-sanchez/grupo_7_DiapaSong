const fs = require('fs');
const path = require('path');
const { check, body } = require('express-validator');
const users = require('../data/users.json');
const { compareSync } = require('bcryptjs');
const userController = require('../controllers/userController');

module.exports = [
    check('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('El email tiene un formato incorrecto'),
    body('password')
        .notEmpty().withMessage('La contraseña es obligatoria').bail()
        .custom((value, { req }) => {
            let user = JSON.parse(fs.readFileSync("./data/users.json", "utf-8")).find(user => /* user.email === req.body.email && user.password === value || */ user.email === req.body.email && compareSync(value, user.password));

            return user
        }).withMessage('Credenciales Invalidas')
]