module.exports ={
    index: (req,res) =>{
        return res.render('index', {
            title: "HOME"
        });
    },
    productCart: (req,res) =>{
        return res.render('productCart',{
            title:"Carrito"
        });
    }
}