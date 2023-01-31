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
    }
}