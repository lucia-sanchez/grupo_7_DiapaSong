const fs = require('fs');
const path = require('path');
const users = require('../data/users.json');
const { validationResult } = require('express-validator');
const { hashSync } = require('bcryptjs')

const db = require("../database/models")

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

        if (errors.isEmpty()) {

            const { name, email, password, identifyid, tel, preferedgenre, preferedinstruments
                , news, birthdate } = req.body;

            const newUser = db.User.create({
                profileImage: req.file ? `/img/${req.file.filename}` : '/img/user-default',
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

            if (/* .length */req.file && fs.existsSync(`./public/img/users/${req.file.filename}`)) {
                fs.unlinkSync(`./public/img/users/${req.file.filename}`);
                //req.file.forEach((file) => {});
            }

            Promise.all([genres, instruments])
                .then(([genres, instruments]) => {
                    //return res.send(/*req.session.userLogin res.locals  req.cookies //  errors.//mapped() instruments req.body genres req.file.filename*/ fs.existsSync(`./public/img/users/${req.file.filename}`))
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

            const { id, name, rol, } = JSON.parse(fs.readFileSync("./data/users.json", "utf-8")).find(user => user.email === req.body.email);

            req.session.userLogin = {
                id,
                name,
                rol,
            }

            if (req.body.remember) {
                res.cookie('userDiapasong', req.session.userLogin, { maxAge: 1000 * 60 })
            }

            return res.redirect('/')
        } else {
            //return res.send(errors)
            const { name, email, password, rol, identifyid, birthdate, tel, preferedgenre, preferedinstruments, news, terms } = (JSON.parse(fs.readFileSync("./data/users.json", "utf-8")).find(user => user.email === req.body.email))

            return res.render('login', {
                title: 'Inicio de Sesión',
                errors: errors.mapped(),
                old: req.body,
            })
        }

    },
    logOut: (req, res) => {
        req.session.destroy();
        return res.redirect('/')
    },
    password: (req, res) => {
        return res.render('password', {
            title: "Recuperar Contraseña"
        });
    },
    profile: (req, res) => {

        const users = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"))
        const { email } = req.params;
        const user = users.find(user => user.email === email);
        return res.render('user', {
            title: "Perfil de usuario",
            name: req.session.userLogin.name,
            ...user


        })
    }
}