const fs = require('fs');
const users = require('../data/users.json');

module.exports={
    register: (req,res)=>{
        return res.render('register', {
            title: "Registro de Usuario"
        });
    },
    saveRegister: (req,res)=>{
        const {name,email,password,password2,identifyid,birthdate,tel,preferedgenre,preferedinstruments,news,terms}=req.body;

        const newUser={
                id: users[users.length - 1].id + 1,
                name: name.trim(),
                email: email.trim(),
                password: password,
                password2: password2,
                identifyid: +identifyid,
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
    password: (req,res)=>{
        return res.render('password',{
            title: "Recuperar Contraseña"
        });
    }
}