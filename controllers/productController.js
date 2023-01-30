module.exports={
   products: (req,res) =>{
        return res.render('products')
   },
    detail: (req,res) =>{
        return res.render('productDetail');
    }
}