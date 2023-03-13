module.exports = (req, res, next) =>{

    if (req.session.userLogin && req.session.userLogin.rol === "admin") {
       res.local.userLogin = req.session.userLogin
         next()
    }
    return res.redirect("/")
}