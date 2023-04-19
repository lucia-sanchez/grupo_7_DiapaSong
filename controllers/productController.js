const fs = require('fs');

const db = require("../database/models");
const { validationResult } = require('express-validator');
const product = require('../database/models/product');

module.exports = {
    products: (req, res) => {
    /* 
    BUSCO TODOS LOS PRODUCTOS Y SE INCLUYEN LAS CATEGRIAS, COLORES, CONDICIONES, TIPO DE PRODUCTOS, CARRITO Y LAS IMAGENES PRINCIPALES        
    */
        db.Product.findAll({
            include: ["categories", "colors", "condition", "productType", {
                model: db.Image,
                as: "images",
                where: { main: 1 }
              }, "carts"]
        })

            .then((products) => { 
                
                const CategoryFilt = req.params.category
                const product = products.filter(product => product.categories ? product.categories.category === CategoryFilt : false/* product.categories.category?  */); 
                // return res.send(/*CategoryFilt products filteredImages */products)
                return res.render('products', {
                    product,
                    
                    CategoryFilt,
                    title: "Productos",
                    products
                })
            })
            .catch((error) => console.log(error))

    },
    detail: (req, res) => {
        const { id } = req.params;
        
        db.Product.findByPk(id, {
            include: ["categories", "colors", "condition", "productType", "images", "carts"]
        })
            .then((products) => {
                //return res.send(products)
                return res.render('productDetail', {
                    title: 'Detalle de Producto',
                    ...products.dataValues
                });
            })
            .catch((error) => console.log(error))
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
        
        if (!req.files.mainImage && !req.fileValidationError) {
            errors.errors.push({
                value: "",
                msg: "El producto debe tener una imagen principal",
                param: "mainImage",
                location: "files",
            });
        }

        if (!req.files.images && !req.fileValidationError) {
            errors.errors.push({
                value: "",
                msg: "El producto debe tener al menos una imagen secundaria",
                param: "images",
                location: "files",
            });
        }

        if (req.fileValidationError) {
            errors.errors.push({
                value: "",
                msg: req.fileValidationError,
                param: "images" ,
                location: "files",
            });
        } 
        if (errors.isEmpty()) {
            /* SI NO HAY ERRORES EN EL FORMULARIO SE PROCEDE A CREAR EL PRODUCTO Y REDIRIGIR A LA VISTA PRODUCTS */
            //return res.send(req.body)
            const { title, subtitle, condition, description, tipo, price, category, colors, model, stock } = req.body;

            db.Product.create({
                title: title.trim(),
                subtitle: subtitle.trim(),
                idProductType: tipo === "product" ? 1 : 2,
                idCondition: condition === "news" ? 1 : 2,
                description: description.trim(),
                price,
                idCategory: category,
                idColor: colors,
                model,
                stock,

            }).then(product => {
                /* CREO UNA CONSTANTE CON LA IMAGEN PRINCIPAL */
                const main = db.Image.create({
                    name: req.files.mainImage[0].filename,
                    main: req.files.mainImage ? 1 : 2,
                    idProduct: product.id,                        
                });
                /* REO UNA CONSTANTE CON LAS IMAGENES SECUNDARIAS */
                const secondary = req.files.images.forEach(image => {
                    db.Image.create({
                        name: image.filename,
                        main: 0,
                        idProduct: product.id,
                    })
                })    
                Promise.all([main, secondary])                    
            })
                .then(() => {
                    // return res.send(/*req.body errors product */req.files)
                    return res.redirect('/products')
                })
                .catch((error) => console.log(error))
        } else {
            /* SI HAY ERRORES LAS IMAGENES SUBIDAS SE ELIMINAN */            
            if (req.files.mainImage && fs.existsSync(`./public/img/productos/${req.files.mainImage[0].filename}`)) {                
                    fs.unlinkSync(`./public/img/productos/${req.files.mainImage[0].filename}`)
            } 
            if (req.files && req.files.images) {
                req.files.images.forEach(image => {
                  const imagePath = `./public/img/productos/${image.filename}`;
                  if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                  }
                });
              }
            const colors = db.Color.findAll({
                order: [["name"]],
                attributes: ["name", "id"]
            })
            const category = db.Category.findAll({
                order: [["category"]],
                attributes: ["category", "id"],
            });

            Promise.all([colors, category])
                .then(([colors, category]) => { 
                    // return res.send(req.files/*body errors req. req.fileValidationError res.locals*/)
                    return res.render("create", {
                        title: 'Crear Producto',
                        colors,
                        category,
                        errors: errors.mapped(),
                        old: req.body
                    })
                })
                .catch((error) => console.log(error));
        }
    },
    edit: (req, res) => {
        const { id } = req.params;

        const product = db.Product.findByPk(id, {
            include: ['images',]
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
                images: req.files && req.files.images ? req.files.images.map(file => file.filename) : product.images,
                category,
                colour,
                news: condition === "news" && true,
                sale: condition === "sale" && true,
                model: model,
                stock: +stock
            },
                {
                    where: {
                        id,
                    },
                }
            ).then(() => {
                return res.redirect('/') //*/detail/${id}*/
            })

                .catch(error => console.log(error))

        } else {
            const { id } = req.params;

            if (req.files.length) {
                req.files.forEach((file) => {
                    fs.existsSync(`./public/images/courses/${file.filename}`) &&
                        fs.unlinkSync(`./public/images/courses/${file.filename}`);
                });
            }
            const product = db.Product.findByPk(id, {
                include: ['images',]
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
                        ...product.dataValues,
                        errors: errors.mapped(),
                        old: req.body,
                    })
                })

                .catch((error) => console.log(error));
        }
    },

    remove: (req, res) => {
        //rescato el parametro que recibo por id
        const id = req.params.id;
        //filtro para generar un nuevo array con todos los productos menos el que deseo eliminar
        productsModified = products.filter(product => product.id !== +id)
        //confirmo si se desea eliminar

        //vuelvo a leer el json para que se actualice la vista
        fs.writeFileSync('./data/products.json', JSON.stringify(productsModified, null, 3), 'utf-8')
        //redirecciono a la pag de productos para mostrar que el articulo eliminado ya no esta en el listado
        res.redirect('/products')
    }
}

