const { check, body } = require('express-validator');
const users = require('../data/users.json');
const db = require('../database/models')


module.exports = [
    check('title')
        .notEmpty().withMessage('El título es obligatorio').bail()
        .isLength({ min: 2 }).withMessage('Mínimo de dos letras').bail()
        .isAlpha('es-ES', {
            ignore: " "
        }).withMessage('Solo caracteres alfabéticos'),
    check('subtitle')
        .notEmpty().withMessage('El subtítulo es obligatorio').bail()
        .isLength({ min: 2 }).withMessage('Mínimo de dos letras'),
    check('category')
        .notEmpty()/* .equals('on') */.withMessage('Debes elegir una categoría'),
    check('description')
        .notEmpty().withMessage('La descripción es obligatoria').bail()
        .isLength({ min: 2 }).withMessage('Mínimo de dos letras'),
    check('colors')
        .notEmpty()/* .equals('on') */.withMessage('Debes elegir un color'),
    check('stock')
        .notEmpty().withMessage('Debes ingresar el stock disponible'),
    check('price')
        .notEmpty().withMessage('Debes ingresar el precio del producto'),
    
]