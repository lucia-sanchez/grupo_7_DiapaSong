const fs = require('fs');
//const products = require('../data/products.json');
//const categories = require('../data/productsCategories.json');
//const colours = require('../data/colours.json')

const db = require("../database/models");
const { log } = require('console');
const { validationResult } = require('express-validator');
const product = require('../database/models/product');

module.exports = {
    products: (req, res) => {
        db.Product.findAll({
            include:[ "categories","colors","condition","productType","images","carts"]
        })
        
        .then((products)=>{
        const CategoryFilt = req.params.category
        const product = products.filter(product => product.categories? product.categories.category === CategoryFilt : false/* product.categories.category?  */); 
            //return res.send(/*CategoryFilt   products*/product)
            return res.render('products', {
                product,
                CategoryFilt,
                title: "Productos",
                products
            })
        })   
        .catch((error)=> console.log(error))

    },    
    detail: (req, res) => {
        const { id } = req.params;
        //const product = products.find(product => product.id === +id);
        db.Product.findByPk(id, {
            include:[ "categories","colors","condition","productType","images","carts"]
        })
        .then((products)=>{
            //return res.send(products)
            return res.render('productDetail', {
                title: 'Detalle de Producto',
                ...products.dataValues
            });
        })
        .catch((error)=> console.log(error))
    },
    create: (req, res) => {

        const colors = db.Color.findAll({
            order: [["name"]],
            attributes: ["name", "id"]
          })
          const category = db.Category.findAll({
            order: [["category"]],
            attributes: ["category", "id"],
          })
      
          Promise.all([colors, category])
            .then(([colors, category]) => {

        return res.render("create", {
            title: 'Crear Producto',
            colors,
            category
        })
    })
        .catch((error) => console.log(error));
    },
    saveCreate: (req, res) => {

        const errors = validationResult(req);

        if (!req.files.length && !req.fileValidationError) {
            errors.errors.push({
              value: "",
              msg: "El producto debe tener por lo menos una imagen",
              param: "images",
              location: "files",
            });
          }
      
          if (req.fileValidationError) {
            errors.errors.push({
              value: "",
              msg: req.fileValidationError,
              param: "images",
              location: "files",
            });
          }
        if (errors.isEmpty()) {
//return res.send(req.body)
        const { title, subtitle, condition, description, idProductType, price, mainImage, images, category, colors, model, stock } = req.body;

        const newProduct = db.Product.create({
            title: title.trim(),
            subtitle: subtitle.trim(),
            idProductType: tipo ? true : false,
            condition: condition ? true : false,
            description: description.trim(),
            price,
            mainImage : req.files && req.files.mainImage ? req.files.mainImage[0].filename : null,
            images: req.files && req.files.images ? req.files.images.map(file=> file.filename) : [],
            idCategory: category,
            idColor: colors,
            model,
            stock,
        
        }).then(product =>{
            db.Product.create({

            })
            return res.redirect('/products')
        })
    
        .catch((error)=> console.log(error))
    } 
    },
    edit: (req, res) => {
        const { id } = req.params;

        const product = db.Product.findByPk(id,{
            include : ['images', ]
        })

        const colors = db.Color.findAll({
            order: [["name"]],
            attributes: ["name", "id"]
          })
          const category = db.Category.findAll({
            order: [["category"]],
            attributes: ["category", "id"],
          })
      
          Promise.all([colors, category, product])
            .then(([colors, category, product]) => {

        return res.render("update", {
            title: 'Editar Producto',
            colors,
            category,
            ...product.dataValues
        })
    })
               
        .catch((error) => console.log(error));
    },
    update: (req, res) => {
        const errors = validationResult(req);

        if (req.fileValidationError) {
          errors.errors.push({
            value: "",
            msg: req.fileValidationError,
            param: "images",
            location: "files",
          });
        }
        if (errors.isEmpty()) {
        /* recibo la info del formulario */
        const { title, subtitle, tipo, condition, description, price, mainImage, images, news, sale, category, colour, model, stock } = req.body;

        const id = +req.params.id;

        /* recupero los datos del producto */
        //const product = products.find(product => product.id === +id);

        /* guardo en un objeto la información modificada */
        const productUpdated = db.Product.update({
            id,
            title: title.trim(),
            subtitle: subtitle.trim(),
            ticket: tipo === "ticket" && true,
            product: tipo === "product" && true,
            description: description.trim(),
            price: +price,
            mainImage: req.files && req.files.mainImage ? req.files.mainImage[0].filename : product.mainImage,
            images: req.files && req.files.images ? req.files.images.map(file=> file.filename) : product.images,            
            category,
            colour,
            news: condition === "news" && true,
            sale: condition === "sale" && true,
            model: model,
            stock: +stock
        },
        {
            where:{
                id,
            },
        }
        ).then(()=>{
            return res.redirect('/') //*/detail/${id}*/
        })
        
        .catch(error => console.log(error))
       
        }
    },
   
    remove: (req, res) => {
        //rescato el parametro que recibo por id
        const id =req.params.id;
        //filtro para generar un nuevo array con todos los productos menos el que deseo eliminar
        productsModified = products.filter(product=> product.id !== +id)
        //confirmo si se desea eliminar
        
        //vuelvo a leer el json para que se actualice la vista
        fs.writeFileSync('./data/products.json', JSON.stringify(productsModified, null, 3), 'utf-8')
        //redirecciono a la pag de productos para mostrar que el articulo eliminado ya no esta en el listado
        res.redirect('/products')
    }
}

