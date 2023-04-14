module.exports = (req, res, next) =>{

    if (req.session.userLogin && req.session.userLogin.rol == 1) {
        //res.local.userLogin = req.session.userLogin
         next()
    }
    return res.redirect("/")
}