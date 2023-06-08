const fs = require('fs');
const path = require('path');
const users = require('../data/users.json');
const { validationResult } = require('express-validator');
const { hashSync } = require('bcryptjs')

const db = require("../database/models");
const { log } = require('console');

module.exports = {
    register: (req, res) => {
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
    },
    saveRegister: (req, res) => {

        const errors = validationResult(req);

        console.log(req.files);

        /* if (!req.files.mainImage && !req.fileValidationError) {
            errors.errors.push({
                value: "",
                msg: "El producto debe tener una imagen principal",
                param: "mainImage",
                location: "files",
            });
        } */
        if (req.fileValidationError) {
            errors.errors.push({
                value: "",
                msg: req.fileValidationError,
                param: "mainImage",
                location: "files",
            });
        }

        if (errors.isEmpty()) {

            const { name, email, password, identifyid, tel, preferedgenre, preferedinstruments
                , news, birthdate } = req.body;

            const newUser = db.User.create({
                profileImage: req.file ? req.file.filename : "user-default.png",
                name,
                email,
                password: hashSync(password, 12),
                birthdate,
                identifyId: +identifyid,
                phone: tel ? +tel : null,
                rolId: 2,
                news: news == "on" ? 1 : null

            }).then(user => {

                if (preferedgenre) {
                    if (Array.isArray(preferedgenre)) {
                        preferedgenre.forEach(genre => {
                            db.Genre.findOne({
                                where: {
                                    genre: genre
                                }
                            }).then(genre => {
                                db.UserGenre.create({
                                    userId: user.id,
                                    genreId: genre.id
                                })
                            })
                        })
                    } else {
                        db.Genre.findOne({
                            where: {
                                genre: preferedgenre
                            }
                        }).then(genre => {
                            db.UserGenre.create({
                                userId: user.id,
                                genreId: genre.id
                            })
                        })
                    }
                }

                if (preferedinstruments) {
                    if (Array.isArray(preferedinstruments)) {
                        preferedinstruments.forEach(instrument => {
                            db.Instrument.findOne({
                                where: {
                                    instrument: instrument
                                }
                            }).then(instrument => {
                                db.UserInstrument.create({
                                    userId: user.id,
                                    instrumentId: instrument.id
                                })
                            })
                        })
                    } else {
                        db.Instrument.findOne({
                            where: {
                                instrument: preferedinstruments
                            }
                        }).then(instrument => {
                            db.UserInstrument.create({
                                userId: user.id,
                                instrumentId: instrument.id
                            })
                        })
                    }
                }
                //return res.send(/* user */ req.body)

                return res.redirect('/users/login')

            }).catch((error) => console.log(error));
        } else {
            const genres = db.Genre.findAll({
                order: [["id"]],
                attributes: ["genre", "id"],
            });

            const instruments = db.Instrument.findAll({
                order: [["id"]],
                attributes: ["instrument", "id"],
            });

            if (/* .length */(req.files && req.files.mainImage) && fs.existsSync(`./public/img/users/${req.files.mainImage[0].filename}`)) {
                fs.unlinkSync(`./public/img/users/${req.files.mainImage[0].filename}`);
                //req.file.forEach((file) => {});
            }
            if (req.files && req.files.mainImage) {
                req.files.mainImage.forEach((image) => {
                  const imagePath = `./public/img/productos/${image.filename}`;
                  if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                  }
                });
              }

            Promise.all([genres, instruments])
                .then(([genres, instruments]) => {
                    // return res.send(req.files/*req.session.userLogin res.locals  req.cookies //  // instruments req.body genres .filename fs.existsSync(`./public/img/users/${req.file.filename}`) errors.mapped()*/)
                    return res.render("register", {
                        title: "Registro de Usuario",
                        genres,
                        instruments,
                        errors: errors.mapped(),
                        old: req.body
                    });
                })
                .catch((error) => console.log(error));
        }
    },
    login: (req, res) => {
        return res.render('login', {
            title: "Inicio de sesión"
        });
    },
    processlogin: (req, res) => {
        const errors = validationResult(req);


        if (errors.isEmpty()) {

            db.User.findOne({
                where: {
                    email: req.body.email
                },
                include : [
                    {
                        association : 'instruments',
                        include : [
                            {
                                association : 'products',
                                attributes : ['id','title','price','discount'],
                                include : ['images']
                            }
                        ]
                    }
                ]
            })
                .then(({ id, name, rolId, instruments }) => {

                    
                    const related = []
                    instruments.forEach(item => item.products.forEach(item => related.push(item)))
                    console.log(related);

                    const unsort = related.sort(() => Math.random() - 0.5);
                    const selected = unsort.slice(0,8);

                    req.session.userLogin = {
                        id,
                        name,
                        rol: rolId,
                        related : selected
                    };

                    if (req.body.remember) {
                        res.cookie('userDiapasong', req.session.userLogin, { maxAge: 10000 * 60 })
                    }

                    return res.redirect('/')
                })
                .catch(error => console.log(error))

        } else {
            //return res.send(errors)
            return res.render('login', {
                title: 'Inicio de Sesión',
                errors: errors.mapped(),
                old: req.body,
            })
        }

    },
    logOut: (req, res) => {
        req.session.destroy();
        res.cookie('userDiapasong', '')
        return res.redirect('/')
    },
    password: (req, res) => {
        return res.render('password', {
            title: "Recuperar Contraseña"
        });
    },
    profile: (req, res) => {
        //return console.log(req.session.userLogin.id);
        db.User.findByPk(req.session.userLogin.id, {
            attributes: ['id', 'name', 'profileImage', 'email', 'password', 'identifyId', 'birthdate', 'phone', 'news', 'rolId'],
            include: [
                {
                    association: 'genres',
                    attributes: ['genre']
                },
                {
                    association: 'instruments',
                    attributes: ['instrument']
                }
            ],

        })
            .then(user => {
                //return res.send(user)
                return res.render('user', {
                    title: "Perfil de usuario",
                    user
                })
            })
            .catch(error => console.log(error))
        /* const users = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"))
        const { email } = req.params;
        const user = users.find(user => user.email === email);
        return res.render('user', {
            title: "Perfil de usuario",
            name: req.session.userLogin.name,
            ...user


        }) */
    }
}