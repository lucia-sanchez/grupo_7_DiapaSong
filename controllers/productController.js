const fs = require('fs');
const products = require('../data/products.json');

const categories = require('../data/productsCategories.json');
const colours = require('../data/colours.json')


module.exports = {
    products: (req, res) => {
        const products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"))
        const CategoryFilt = req.params.category
        const product = products.filter(product => product.category === CategoryFilt);
           
        return res.render('products', {
            product,
            CategoryFilt,
            title: "Productos",
            products
        })

    },  
    detail: (req, res) => {
        const products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"))
        const { id } = req.params;
        const product = products.find(product => product.id === +id);

        return res.render('productDetail', {
            title: 'Detalle de Producto',
            ...product
        });
    },
    create: (req, res) => {
        res.render('create', {
            title: 'Crear Producto',
            categories,
            colours
        });

    },
    saveCreate: (req, res) => {
        const { title, subtitle, tipo, condition, description, price, mainImage, images, news, sale, category, colour, model, stock } = req.body;

        const newProduct = {
            id: products[products.length - 1].id + 1,
            title: title.trim(),
            subtitle: subtitle.trim(),
            ticket: tipo === "ticket" && true,
            product: tipo === "product" && true,
            description: description.trim(),
            price: +price,
            mainImage : req.files && req.files.mainImage ? req.files.mainImage[0].filename : null,
            images: req.files && req.files.images ? req.files.images.map(file=> file.filename) : [],
            news: condition === "news" && true,
            sale: condition === "sale" && true,
            category,
            colour,
            model: model,
            stock: +stock
        };

        products.push(newProduct)

        fs.writeFileSync('./data/products.json', JSON.stringify(products, null, 3), 'utf-8')

        res.redirect('/products')
    },
    edit: (req, res) => {
        const { id } = req.params;

        const product = products.find(product => product.id === +id);
        return res.render('update', {
            ...product,
            categories,
            colours
        })
    },
    update: (req, res) => {
        /* recibo la info del formulario */
        const { title, subtitle, tipo, condition, description, price, mainImage, images, news, sale, category, colour, model, stock } = req.body;

        const id = +req.params.id

        /* recupero los datos del producto */
        const product = products.find(product => product.id === +id);

        /* guardo en un objeto la información modificada */
        const productUpdated = {
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
        };

        /* actualizar mi array de productos */
        const productsModified = products.map(product => {
            if (product.id === id) {
                return productUpdated
            }
            return product
        });

        //console.log(productsModified);

        /* guardar los cambios */
        fs.writeFileSync('./data/products.json', JSON.stringify(productsModified, null, 3), 'utf-8')

        return res.redirect('/') //*/detail/${id}*/
    },
    removeConfirm: (req, res) => {
    },
    remove: (req, res) => {
        //rescato el parametro que recibo por id
        const {id} =req.params;
        //filtro para generar un nuevo array con todos los productos menos el que deseo eliminar
        productsModified = products.filter(product=> product.id !== +id)
        //vuelvo a leer el json para que se actualice la vista
        fs.writeFileSync('./data/products.json', JSON.stringify(productsModified, null, 3), 'utf-8')
        //redirecciono a la pag de productos para mostrar que el articulo eliminado ya no esta en el listado
        res.redirect('/products')
    }
}

