const fs = require('fs');
const products = require('../data/products.json');
const categories = require('../data/productsCategories.json');
const colours = require('../data/colours.json')


module.exports = {
    products: (req, res) => {
        const products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"))
        return res.render('products', {
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
        const { title, subtitle, tipo, condition, description, price, image1, image2, image3, image4, image5, news, sale, category, colour, height, width } = req.body;

        const newProduct = {
            id: products[products.length - 1].id + 1,
            title: title.trim(),
            subtitle: subtitle.trim(),
            ticket: tipo === "ticket" && true,
            product: tipo === "product" && true,
            description: description.trim(),
            price: +price,
            image1: null,
            image2: null,
            image3: null,
            image4: null,
            image5: null,
            news: condition === "news" && true,
            sale: condition === "sale" && true,
            category,
            colour,
            height: +height,
            width: +width
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
        const { title, subtitle, tipo, condition, description, price, image1, image2, image3, image4, image5, news, sale, category, colour, height, width } = req.body;

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
            image1: product.image1,
            image2: product.image2,
            image3: product.image3,
            image4: product.image4,
            image5: product.image5,
            category,
            colour,
            news: condition === "news" && true,
            sale: condition === "sale" && true,
            height: +height,
            width: +width
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

        return res.redirect('/products') //*/detail/${id}*/
    },
    removeConfirm: (req, res) => {

    },
    remove: (req, res) => {
        //rescato el parametro que recibo por id
        const {id} =req.params;
        //filtro para generar un nuevo array con todos los productos menos el que deseo eliminar
        productsModified = products.filter(product=> product.id !== +id)
        //vuelvo a leer el json para que se actualice la vista
        fs.writeFileSync('./data/products.json',JSON.stringify(productsModified, null, 3),'utf-8')
        return res.redirect('./products')
    }

}