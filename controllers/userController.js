const fs = require('fs');
const users = require('../data/users.json');



module.exports={
    register: (req,res)=>{
        return res.render('register', {
            title: "Registro de Usuario"
        });
    },
    saveRegister: (req,res)=>{
        const {name,email,password,rol,identifyid,birthdate,tel,preferedgenre,preferedinstruments,news,terms}=req.body;

        const newUser={
                id: users.length ? users[users.length - 1].id + 1 : 1,
                name: name.trim(),
                email: email.trim(),
                password: password,
                identifyid: +identifyid,
                rol: rol.trim(),
                birthdate: +birthdate,
                tel: +tel,
                preferedgenre: preferedgenre,
                preferedinstruments: preferedinstruments,
                news: news,
                terms: terms
                        }
        
        users.push(newUser);

        fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 3), 'utf-8')
        /* return console.log(req.body) */
        return res.redirect('/users/login')
    },
    login: (req,res)=>{
        return res.render('login',{
            title: "Inicio de sesión"
        });
    },
    processlogin:(req,res) =>{
        const errors = validationResults(req);
        if(errors.isEmpty()){

            const {id,name,rol} =readJSON('users.json').find(user => user.email === req.body.email);

            req.session.userLogin = {
                id,
                name,
                rol
            }
            console.log(req.session);
            return res.redirect('/')
        }else{
           return res.render('login',{errors: errors.mapped()
        })
        }
        
    },
    password: (req,res)=>{
        return res.render('password',{
            title: "Recuperar Contraseña"
        });
    }
}