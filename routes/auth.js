const passport = require('passport')

const router = require('express').Router()

/* /login/google  */

router.get('/login/google', passport.authenticate('google') )

module.exports = router