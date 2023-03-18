const { check, body } = require('express-validator');
const users = require('../data/users.json');


module.exports = [
    /* check('name').notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({
            min: 2
        }).withMessage('Mínimo dos letras').bail()
        .isAlpha(['es-ES',{
            ignore : " "
        }]).withMessage('Solo caracteres alfabéticos'), */
        
        
        check('name')
    .notEmpty().withMessage('El nombre es obligatorio').bail()
    .isLength({min:2}).withMessage('Mínimo de dos letras').bail()
    .isAlpha('es-ES',{
        ignore : " "
    }).withMessage('Solo caracteres alfabéticos'),
    
    body('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Debe ser un email con formato válido')
        .custom((value, {req}) => {
            let user = users.find(user => user.email === value);
            return !user // user ? false : true
        }).withMessage('El email ya se encuentra registrado'),
        
        check('password')
        .notEmpty().withMessage('La contraseña es obligatoria').bail()
        .isLength({
            min: 8,
            max : 12
        }).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),
        
        body('password2')
        .notEmpty().withMessage('Debes confirmar tu contraseña').bail()
        .custom((value,{req})=> {
            if(value !== req.body.password ){
                return false
            }
            return true
        }).withMessage('Las contraseñas no coinciden'),
        
        check('identifyid')
        .notEmpty().withMessage('Tu DNI es obligatorio').bail().isNumeric({ no_symbols: true }).withMessage('Ingresa tu DNI sin espacios, puntos o guiones').bail().isLength({ min: 7, max: 8 }).withMessage('Tu DNI debe ser de 7 u 8 caracteres').bail(),
        
        

        check('birthdate')
        .notEmpty()/* .isDate({ format: 'DD-MM-YYYY' }).isAfter('31-12-1909') */
    .withMessage('Debes ingresar una fecha de nacimiento válida (del año 1910 en adelante)'),
    
    check('terms')
    .notEmpty()/* .equals('on') */.withMessage('Debes aceptar los términos y condiciones'),

/* .isBoolean() */
    /* 

    
    
    
    
    

    
        .contains(false).withMessage('Debes aceptar los terminos y condiciones') */
        
    
 ]