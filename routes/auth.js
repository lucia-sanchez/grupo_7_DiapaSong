const passport = require('passport')
const { loginGoogle } = require('../controllers/authController')

const router = require('express').Router()

passport.serializeUser((user, done)=> done(null,user))


/* /login/google  */

router
.get('/login/google', passport.authenticate('google'))
.get(
    '/google/callback', //endpoint
    passport.authenticate('google',{failureRedirect:"/users/login"}), //middleweare
    loginGoogle) //metodo del controlador

module.exports = router