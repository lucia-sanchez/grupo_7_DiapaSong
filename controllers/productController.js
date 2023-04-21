const fs = require("fs");

const db = require("../database/models");
const { validationResult } = require("express-validator");
const product = require("../database/models/product");
const Op = db.Sequelize.Op 

module.exports = {
  products: (req, res) => {
    /* 
    BUSCO TODOS LOS PRODUCTOS Y SE INCLUYEN LAS CATEGRIAS, COLORES, CONDICIONES, TIPO DE PRODUCTOS, CARRITO Y LAS IMAGENES PRINCIPALES        
    */
    db.Product.findAll({
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
    })

      .then((products) => {
        const CategoryFilt = req.params.category;
        const product = products.filter(
          (product) =>
            product.categories
              ? product.categories.category === CategoryFilt
              : false /* product.categories.category?  */
        );
        // return res.send(/*CategoryFilt products filteredImages */products)
        return res.render("products", {
          product,

          CategoryFilt,
          title: "Productos",
          products,
        });
      })
      .catch((error) => console.log(error));
  },
  detail: (req, res) => {
    const { id } = req.params;

    db.Product.findByPk(id, {
      include: [
        "categories",
        "colors",
        "condition",
        "productType",
        "images",
        "carts",
      ],
    })
      .then((product) => {
       // return res.send(product.images)
       
        return res.render("productDetail", {
          title: "Detalle de Producto",
          ...product.dataValues,
        });
      })
      .catch((error) => console.log(error));
  },
  create: (req, res) => {
    const colors = db.Color.findAll({
      order: [["name"]],
      attributes: ["name", "id"],
    });
    const category = db.Category.findAll({
      order: [["category"]],
      attributes: ["category", "id"],
    });

    Promise.all([colors, category])
      .then(([colors, category]) => {
        return res.render("create", {
          title: "Crear Producto",
          colors,
          category,
        });
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
        param: "images",
        location: "files",
      });
    }
    if (errors.isEmpty()) {
      /* SI NO HAY ERRORES EN EL FORMULARIO SE PROCEDE A CREAR EL PRODUCTO Y REDIRIGIR A LA VISTA PRODUCTS */
      //return res.send(req.body)
      const {
        title,
        subtitle,
        condition,
        description,
        tipo,
        price,
        category,
        colors,
        model,
        stock,
      } = req.body;

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
      })
        .then((product) => {
          /* CREO UNA CONSTANTE CON LA IMAGEN PRINCIPAL */
          const main = db.Image.create({
            name: req.files.mainImage[0].filename,
            main: req.files.mainImage ? 1 : 2,
            idProduct: product.id,
          });
          /* REO UNA CONSTANTE CON LAS IMAGENES SECUNDARIAS */
          const secondary = req.files.images.forEach((image) => {
            db.Image.create({
              name: image.filename,
              main: 0,
              idProduct: product.id,
            });
          });
          Promise.all([main, secondary]);
        })
        .then(() => {
          // return res.send(/*req.body errors product */req.files)
          return res.redirect("/products");
        })
        .catch((error) => console.log(error));
    } else {
      /* SI HAY ERRORES LAS IMAGENES SUBIDAS SE ELIMINAN */
      if (
        req.files.mainImage &&
        fs.existsSync(
          `./public/img/productos/${req.files.mainImage[0].filename}`
        )
      ) {
        fs.unlinkSync(
          `./public/img/productos/${req.files.mainImage[0].filename}`
        );
      }
      if (req.files && req.files.images) {
        req.files.images.forEach((image) => {
          const imagePath = `./public/img/productos/${image.filename}`;
          if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
          }
        });
      }
      const colors = db.Color.findAll({
        order: [["name"]],
        attributes: ["name", "id"],
      });
      const category = db.Category.findAll({
        order: [["category"]],
        attributes: ["category", "id"],
      });

      Promise.all([colors, category])
        .then(([colors, category]) => {
          // return res.send(req.files/*body errors req. req.fileValidationError res.locals*/)
          return res.render("create", {
            title: "Crear Producto",
            colors,
            category,
            errors: errors.mapped(),
            old: req.body,
          });
        })
        .catch((error) => console.log(error));
    }
  },
  edit: (req, res) => {
    const { id } = req.params;

    const product = db.Product.findByPk(id, {
      include: ["images", "categories", "colors"],
    });
    const colorsSelect = db.Color.findAll({
      order: [["name"]],
      attributes: ["name", "id"],
    });
    const category = db.Category.findAll({
      order: [["category"]],
      attributes: ["category", "id"],
    });

    Promise.all([colorsSelect, category, product])
      .then(([colorsSelect, category, product]) => { 
        // return res.send(/*body errors req. req.fileValidationError res.locals req.files*/product)
        return res.render("update", {
          title: "Editar Producto",
          colorsSelect,
          category,
          product
          //...product.dataValues,
        });
      })

      .catch((error) => console.log(error));
  },
  update: (req, res) => {
    const errors = validationResult(req);

        const {
        title,
        subtitle,
        condition,
        description,
        tipo,
        price,
        category,
        colors,
        model,
        stock,
        preview
      } = req.body;
      const id = +req.params.id;

      const productUpdated = db.Product.update(
        {
          idProductType: tipo === "product" ? 1 : 2,
          idCondition: condition === "news" ? 1 : 2,
          title: title.trim(),
          subtitle: subtitle.trim(),
          idCategory: category,
          description: description.trim(),
          idColor: colors,
          stock,
          model,
          price,
        },
        {
          where: { id },
        }
      )
      /* SI VIENEN IMAGENES POR REQ.FILES POR INPUT MAINIMAGE O IMAGES SE ACTUALIZA LA TALA DE IMAGENES */
        if (req.files.mainImage||req.files.images||(req.files.mainImage&&req.files.images)) {
            /* SI VIENE UNA MAINIMAGE */
            if (req.files.mainImage) {
                db.Image.update(
                    { name: req.files.mainImage[0].filename },
                    { where: { main: 1, idProduct: id } }
                  );
            }
            /* O SI VIENEN IMAGES (SECUNDARIAS) */
            if (req.files.images) {
                // DESTRUYE LAS IMAGENES QUE EXISTIAN
                db.Image.destroy({
                  where: {
                    main: 0,
                    idProduct: id
                  }
                }).then(() => {

                  // CREA IMAGENES SECUNDRIAS NUEVAS
                  req.files.images.forEach(image => {
                    db.Image.create({
                      name: image.filename,
                      main: 0,
                      idProduct: id
                    });
                  });
                });
              }
            
            //return res.send(req.files) return res.redirect(`/products/detail/${id}`);
            return res.redirect(`/`);
        }

        // SI NO VIENEN IMAGENES POR INPUTS SE PUEDE CAMBIAR CUAL ES LA IMAGEN PRINCIPAL DESDE LAS VISTAS PREVIAS DEL INPUT TIPO RADIO(PERVIEW)
      const imagesUpdate = db.Image.update({
                main:0,
                
            },
            {where:{idProduct:id}}).then(()=>{
                db.Image.update({
                    main:1,
                    
                },
                {where:{id:preview}})
            }
                )      
        
            Promise.all([productUpdated, imagesUpdate, /* product */])
            .then(([productUpdated, imagesUpdate, /* product */]) => {  
              // return res.send(/*body errors req. req.fileValidationError res.locals  product imagesUpdate imagesUpdate*/req.files)
               return res.redirect(`/`);
            })
        .catch((error) => console.log(error));
    
  },
  remove: async (req, res) => {
    const id = req.params.id;

    try {
      const product = await db.Product.findByPk(id);
      const images = await db.Image.findAll({
        where: { idProduct: product.id },
      });
      await Promise.all(images.map((image) => image.destroy()));

      product.destroy(); // Eliminar el producto y la imagen

      return res.redirect("/products");
    } catch (error) {
      console.error(error);
    }
  }
 
  /*     remove: (req, res) => {
        //rescato el parametro que recibo por id
        const id = req.params.id;
        //filtro para generar un nuevo array con todos los productos menos el que deseo eliminar
        productsModified = products.filter(product => product.id !== +id)
        //confirmo si se desea eliminar

        //vuelvo a leer el json para que se actualice la vista
        fs.writeFileSync('./data/products.json', JSON.stringify(productsModified, null, 3), 'utf-8')
        //redirecciono a la pag de productos para mostrar que el articulo eliminado ya no esta en el listado
        res.redirect('/products')
    } */
};
