const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../database/models")
const { validationResult } = require("express-validator");
const product = require("../database/models/product");
const Op = db.Sequelize.Op



module.exports ={
   index: (req,res) =>{
        const sale= db.Sale.findAll({
          order:[['id','DESC']],
          limit:1
        })
        
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
        const featured = db.Product.findAll({
          limit:8,
          order: db.Sequelize.literal('rand()'),
            include : [
              {
                  model: db.Image,
                  as: "images",
                  where: { main: 1 },
                }
            ]
      
      })
      Promise.all([saleProducts, featured, sale])
        .then(([saleProducts,featured, sale])=>{
          //  return res.send(sale)
          const id = sale[0].id;
          const idSale=id
            res.cookie('idSale',idSale,{
              maxAge: 24 * 60 * 60 * 1000,
              httpOnly: true
            })
            // return res.send(saleProducts)
            console.log(sale.length);
            return res.render('index', {
                saleProducts,
                related : req.session.userLogin ? req.session.userLogin.related : featured,
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
      suscripcion: (req, res) => {
        const { nombre, email } = req.body;
      
        db.Suscritos.create({ nombre, email })
        .then(() => {
          res.redirect('/');
        })
          .catch((error) => console.log(error));
         ;
      },
    faq: (req,res) =>{
        return res.render('faq',{
            title: 'Preguntas Frecuentes'
        })
    },  dashboard: (req, res) => {
      /* 
      BUSCO TODOS LOS PRODUCTOS Y SE INCLUYEN LAS CATEGRIAS, COLORES, CONDICIONES, TIPO DE PRODUCTOS, CARRITO Y LAS IMAGENES PRINCIPALES        
      */
      const productsAll = db.Product.findAll({
        /* order:[["createdAt",'DESC']], */
        include: [
          "categories",
          "colors",
          "condition",
          "productType",
          {
            model: db.Image,
            as: "images",
            where: { main: 1 },
          },
          "carts",
        ],
      });
      const productsNew = db.Product.findAll({
        order:[["createdAt",'DESC']],
        include: [
          "categories",
          "colors",
          "condition",
          "productType",
          {
            model: db.Image,
            as: "images",
            where: { main: 1 },
          },
          "carts",
        ],
        limit: 5
      });
      Promise.all([productsAll, productsNew])
      .then(([productsAll, productsNew]) => {
          // return res.send(productsNew)
          const CategoryFilt = req.params.category;
          const products = productsAll
          const product = productsAll.filter(
            (product) =>
              product.categories
                ? product.categories.category === CategoryFilt
                : false /* product.categories.category?  */
          );
          if(CategoryFilt=='novedades'){
            const product = productsNew
            return res.render("products", {
              product,
              toThousand,
              CategoryFilt,
              title: "Productos",
              /* products, */
            });
          }
          // return res.send(/*CategoryFilt products filteredImages */products)
          return res.render("dashboard", {
            product,
            toThousand,
            CategoryFilt,
            title: "Admin Dashboard",
            products,
          });
        })
        .catch((error) => console.log(error));
    },
    removeProduct: async (req, res) => {
      const id = req.params.id;
  
      try {
        const product = await db.Product.findByPk(id);
        const images = await db.Image.findAll({
          where: { idProduct: product.id },
        });
        await Promise.all(images.map((image) => image.destroy()));
  
        product.destroy(); // Eliminar el producto y la imagen
  
        return res.redirect("/dashboard");
      } catch (error) {
        console.error(error);
      }
    }
}