const products=require('../data/products.json')
const fs=require('fs')

module.exports={
   products: (req,res) =>{
        return res.render('products', {
            title: "Productos"
        })
   },
    detail: (req,res) =>{
        return res.render('productDetail', {
            title: 'Detalle de Producto'
        });
    },
    create: (req,res)=>{
        res.render('create',{
            title: 'Crear Producto'
        });
        let productsRead=fs.readFileSync('../data/products.json','utf-8');
        let productsJson=JSON.parse(productsRead)
        fs.writeFileSync('../data/products.json',JSON.stringify(products))
        res.redirect('products')
    }
    
}