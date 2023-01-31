module.exports={
    register: (req,res)=>{
        return res.render('register', {
            title: "Registro de Usuario"
        });
    },
    login: (req,res)=>{
        return res.render('login',{
            title: "Inicio de sesión"
        });
    }
}