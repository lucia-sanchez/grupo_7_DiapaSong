const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../database/models")
const { validationResult } = require("express-validator");
const product = require("../database/models/product");
const Op = db.Sequelize.Op



module.exports ={
   index: (req,res) =>{
        const saleProducts = db.Product.findAll({
            where: {
                discount: {
                  [Op.ne]: 0,
                },
              },
              include : [
                {
                    model: db.Image,
                    as: "images",
                    where: { main: 1 },
                  }
              ]
        })
        .then((saleProducts)=>{
            return res.render('index', {
                saleProducts,
                title: "HOME"
            });
        })
        .catch((error) => console.log(error));
       
    },
    search: (req,res) => {
        /* CREO LA CONSTANTE CON LAS PALABRAS CLAVE DE BUSQUEDA */
        const {keywords} = req.query;
        /* BUSCO TODOS LOS PRODUCTOS INCLUIDA SOLO LA IMAGEN PRINCIPAL, USANDO EL OPERADOR OR Y LIKE DONDE TITLE, SUBTITLE Y DESCRIPTION COINCIDA CON LAS PALABRAS QUE VIENEN DEL REQ.QUERY  */
        db.Product.findAll({            
            include: [ {
                model: db.Image,
                as: "images",
                where: { main: 1 }
              }],
              where:{
                [Op.or]: [
                  { title: {[Op.like]: `%${keywords}%`} },
                  { subtitle: {[Op.like]: `%${keywords}%`} },
                  { description: {[Op.like]: `%${keywords}%`} },
                ]
              }})
            .then((products) => {               
                //return res.send(/*CategoryFilt products filteredImages */products)
                return res.render('results', {
                    products,
                    title: "Resultado de la Busqueda",
                    keywords
                })
            })
            .catch((error) => console.log(error))     
    },
    productCart: (req,res) =>{
        return res.render('productCart',{
            title:"Carrito"
        });
    },
    blog: (req, res) => {
        db.Blog.findAll()
          .then((blogs) => {
            return res.render('blog', {
              blogs,
              title: 'Blog de Música'
            });
          })
          .catch((error) => console.log(error));
      },
      saveBlog: (req, res) => {
        const { nombre, comentario } = req.body;
    
        db.Blog.create({ nombre, comentario })
          .then(() => {
            res.redirect('/blog');
          })
          .catch((error) => console.log(error));
      },
    faq: (req,res) =>{
        return res.render('faq',{
            title: 'Preguntas Frecuentes'
        })
    }
}