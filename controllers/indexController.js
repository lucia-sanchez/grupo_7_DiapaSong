const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../database/models")
const Op = db.Sequelize.Op



module.exports ={
    index: (req,res) =>{
        return res.render('index', {
            title: "HOME"
        });
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
    blog: (req,res) =>{
        return res.render('blog',{
            title: 'Blog de Música'
        })
    },
    faq: (req,res) =>{
        return res.render('faq',{
            title: 'Preguntas Frecuentes'
        })
    }
}