const { check, body } = require('express-validator');
const users = require('../data/users.json');
const db = require('../database/models')


module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({ min: 2 }).withMessage('Mínimo de dos letras').bail()
        .isAlpha('es-ES', {
            ignore: " "
        }).withMessage('Solo caracteres alfabéticos'),

    body('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Debe ser un email con formato válido')
        .custom((value, { req }) => {
            return db.User.findOne({
                where: {
                    email: value
                }
            }).then(user => {
                if (user) {
                    return Promise.reject()
                }
            }).catch((error) => {
                console.log(error)
                return Promise.reject('El email ya se encuentra registrado')
            })
        }),

    check('password')
        .notEmpty().withMessage('La contraseña es obligatoria').bail()
        .isLength({
            min: 8,
            max: 12
        }).withMessage('La contraseña debe tener entre 8 y 12 caracteres'),

    body('password2')
        .notEmpty().withMessage('Debes confirmar tu contraseña').bail()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                return false
            }
            return true
        }).withMessage('Las contraseñas no coinciden'),

    check('identifyid')
        .notEmpty().withMessage('Tu DNI es obligatorio').bail().isNumeric({ no_symbols: true }).withMessage('Ingresa tu DNI sin espacios, puntos o guiones').bail().isLength({ min: 7, max: 9 }).withMessage('Tu DNI debe ser de 7 u 9 caracteres').bail(),

    check('birthdate')
        .notEmpty()/* .isDate({ format: 'DD-MM-YYYY' }).isAfter('31-12-1909') */
        .withMessage('Debes ingresar una fecha de nacimiento válida (del año 1910 en adelante)'),

    check('terms')
        .notEmpty()/* .equals('on') */.withMessage('Debes aceptar los términos y condiciones'),
]