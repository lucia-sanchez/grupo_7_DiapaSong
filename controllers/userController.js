const fs = require('fs');
const path = require('path');
const users = require('../data/users.json');
const {validationResult} = require('express-validator');
const {hashSync} = require('bcryptjs')

const db = require("../database/models") 

module.exports={
    register: (req,res)=>{
        const genres = db.Genre.findAll({
            order: [["id"]],
            attributes: ["genre", "id"],
          });
      
          const instruments = db.Instrument.findAll({
            order: [["id"]],
            attributes: ["instrument", "id"],
          });
      
          Promise.all([genres, instruments])
            .then(([genres, instruments]) => {
                //return res.send(/*req.session.userLogin res.locals  req.cookies genres*/instruments)
                return res.render("register", {
                title: "Registro de Usuario",
                genres,
                instruments,
              });
            })
            .catch((error) => console.log(error));



        /* return res.render('register', {
            title: "Registro de Usuario"
        }); */
    },
    saveRegister: (req,res)=>{

        const errors = validationResult(req);

        if(errors.isEmpty()){

        const {name,email,password,rol,identifyid,birthdate,tel,preferedgenre,preferedinstruments,news,terms}=req.body;

        const newUser={
                id: users.length ? users[users.length - 1].id + 1 : 1,
                mainImage : req.file? req.file.filename : '/img/user-default',
                name: name.trim(),
                email: email.trim(),
                password: hashSync(password,12),
                identifyid: +identifyid,
                rol: "user",
                birthdate: birthdate,
                tel: +tel,
                preferedgenre: preferedgenre,
                preferedinstruments: preferedinstruments,
                news: news,
                terms: terms
                        }
        //return console.log(req.file);
        // res.send();
        users.push(newUser);

        fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 3), 'utf-8')
        /* return console.log(req.body) */
        return res.redirect('/users/login')

        }else{
            const genres = db.Genre.findAll({
                order: [["id"]],
                attributes: ["genre", "id"],
              });
          
              const instruments = db.Instrument.findAll({
                order: [["id"]],
                attributes: ["instrument", "id"],
              });
          
              Promise.all([genres, instruments])
                .then(([genres, instruments]) => {
                    //return res.send(/*req.session.userLogin res.locals  req.cookies genres req.body errors.mapped()*/instruments)
                    return res.render("register", {
                    title: "Registro de Usuario",
                    genres,
                    instruments,
                    errors: errors.mapped(),
                    old : req.body
                  });
                })
                .catch((error) => console.log(error));

            /*res.send(  )*/
            //console.log()            
            //console.log();
            /*return res.render('register', {
            title: "Registro de Usuario",        
            ,            
            } ) res.send({title: "Registro de Usuario",        
            errors: errors.mapped(),
            old : req.body}) */ 
        }
    },
    login: (req,res)=>{
        return res.render('login',{
            title: "Inicio de sesión"
        });
    },
    processlogin:(req,res) =>{
        const errors = validationResult(req);
        

        if(errors.isEmpty()){

            const {id,name,rol, } = JSON.parse(fs.readFileSync("./data/users.json", "utf-8")).find(user => user.email === req.body.email);

            req.session.userLogin = {
                id,
                name,
                rol,
    
               
            }

            if(req.body.remember){
                res.cookie('userDiapasong',req.session.userLogin,{maxAge: 1000*60} )
           }

            return res.redirect('/')
        }else{
            //return res.send(errors)
            const {name,email,password,rol,identifyid,birthdate,tel,preferedgenre,preferedinstruments,news,terms}=(JSON.parse(fs.readFileSync("./data/users.json", "utf-8")).find(user => user.email === req.body.email))

            return res.render('login',{
            title: 'Inicio de Sesión',
            errors: errors.mapped(),
            old : req.body,
        })
        }
        
    },
    logOut:(req,res)=>{
        req.session.destroy();
        return res.redirect('/')
    },
    password: (req,res)=>{
        return res.render('password',{
            title: "Recuperar Contraseña"
        });
    },
    profile : (req,res) => {
       
        const users = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"))
        const { email } = req.params;
        const user = users.find(user => user.email === email);
        return res.render('user',{
            title : "Perfil de usuario",
            name: req.session.userLogin.name,
            ...user
            
        
        })
    }
}