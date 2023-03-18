module.exports = (req,res,next) => {
    if(req.cookies.userDiapasong){
        req.session.userLogin = req.cookies.userDiapasong
    }

    next()
}