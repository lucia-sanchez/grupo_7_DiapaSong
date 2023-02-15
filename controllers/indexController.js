
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports ={
    index: (req,res) =>{
        return res.render('index', {
            title: "HOME"
        });
    },
    search: (req,res) => {
        const {keywords} = req.query;
        const searchProduct = products.filter(({title, subtitle, description, model}) => 
                title.toLowerCase().includes(keywords.toLowerCase())||
                subtitle.toLowerCase().includes(keywords.toLowerCase())||
                description.toLowerCase().includes(keywords.toLowerCase())||
                model.toLowerCase().includes(keywords.toLowerCase()));

        return res.render("result",{
            ...searchProduct,
            toThousand,
            keywords
       }) 
       
    },
    productCart: (req,res) =>{
        return res.render('productCart',{
            title:"Carrito"
        });
    },
    blog: (req,res) =>{
        return res.render('blog',{
            title: 'Blog de Música'
        })
    },
    faq: (req,res) =>{
        return res.render('faq',{
            title: 'Preguntas Frecuentes'
        })
    }
}