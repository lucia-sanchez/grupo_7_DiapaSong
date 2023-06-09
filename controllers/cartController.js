const fs = require("fs");
const db = require("../database/models");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { validationResult } = require("express-validator");
//const product = require("../database/models/product");
const Op = db.Sequelize.Op



module.exports = {
  spinner: (req,res)=>{
    return res.render('spinnerCart',{
      title: 'Carrito'
    })
  },
  spinner2: (req,res)=>{
    return res.render('spinnerCart2',{
      title: 'Carrito'
    })
  },
  addToCart: (req, res) => {
    //return res.send(req.cookies.idSale)
    const {/* units, */ /**/ price,  idProduct } = req.body
    db.Cart.findOrCreate({
      include: [
        {
          model: db.Product,
          as: 'products',
        },
      ],
      where: { 
        idProduct: idProduct,
        saleId: req.cookies.idSale
       },
      defaults: { 
        units: 1,
        saleId: req.cookies.idSale,
        totalPrice: price
       }
    }).then(cart => {
      //return res.send(cart)
      if (!cart[1]) {
        cart[0].units += 1;
        if (cart[0].products.discount>0) {
          cart[0].totalPrice = (cart[0].units)*(cart[0].products.price-((cart[0].products.price*cart[0].products.discount)/100))
        }else{
          cart[0].totalPrice = (cart[0].units)*cart[0].products.price
        }
        
        cart[0].save();
        

      }
      //return res.render('spinnerCart',{
        /* title: 'carrito'
      }) */
      return res.redirect('/spinner')
      //return res.send(esto)
    })
.catch((error) => console.log(error));

  },
  productCart: (req, res) => {
    db.Cart.findAll({
      include: [

        "sales",
        {
          model: db.Product,
          as: 'products',
          include: {
            model: db.Image,
            as: 'images',
            attributes: ['name'],
            where: { main: 1 }
          },

        },
      ],
      where: {saleId:req.cookies.idSale}
    })
      .then(items => {
        // return res.send(items)
        
        const totalSale = items.reduce((totals, item) => {
          return totals + parseInt(item.totalPrice);
        }, 0);
        //return res.send(totalSale)
        return res.render('productCart', {
          title: "Carrito",
          items,
          toThousand,
          totalSale
        })
      }).catch((error) => console.log(error));

  },
  removeFromCart: (req,res)=>{
    
    db.Cart.destroy({
      where: { 
        id: req.params.id
       },
    }).then(
    ()=>{
      return res.redirect('/spinner')
    }).catch((error) => console.log(error));
  },
  moreUnits: (req,res)=>{
    /* db.Cart.increment('units', {
      by: 1,
      where: {
        id: req.params.id 
      }
    }) */
    db.Cart.findOne({
      include: [
        {
          model: db.Product,
          as: 'products',
        },
      ],
      where: {
        id: req.params.id
      }
    })
    .then((cart) => { //
      const updatedUnits = cart.units + 1;
      // const totalPrice = cart.totalPrice + req.body.price; 
      
      // return res.send(totalPrice)
      return db.Cart.update(
        {
          units: updatedUnits,
          totalPrice: req.body.price * updatedUnits
        },
        {
          where: {
            id: req.params.id
          }
        }
      );
    })
    .then(()=>{
      return res.redirect('/spinner2')
    })
      .catch((error) => console.log(error));
  },
  lessUnits: (req,res)=>{
    /* db.Cart.decrement('units', {
      by: 1,
      where: {
        id: req.params.id 
      }
    }) */
    db.Cart.findOne({
      include: [
        {
          model: db.Product,
          as: 'products',
        },
      ],
      where: {
        id: req.params.id
      }
    })
    .then((cart) => { //
      const updatedUnits = cart.units - 1;
      // const totalPrice = cart.totalPrice + req.body.price; 
      
      // return res.send(totalPrice)
      return db.Cart.update(
        {
          units: updatedUnits,
          totalPrice: req.body.price * updatedUnits
        },
        {
          where: {
            id: req.params.id
          }
        }
      );
    }).then(()=>{
      return res.redirect('/spinner2')
    })
      .catch((error) => console.log(error));
  },
  emptyCart: (req,res)=>{
    db.Cart.destroy({
      where: { 
        saleId: req.params.id
       },
    }).then(
    ()=>{
      return res.redirect('/spinner')
    }).catch((error) => console.log(error));
  },
  buyCart: (req,res)=>{
    if (!req.session.userLogin) {
     return res.redirect('/users/login')
    }
     const id = req.cookies.idSale
     const total= +req.body.totalPrice
    //return res.send(req.cookies)
    db.Sale.update(
      {
        total:total,
        date: new Date(),
        userId: req.session.userLogin.id},
      {
        where: 
        {id: id}
      }
    ).then(()=>{
      db.Sale.create()
      db.Cart.destroy({
        where:{saleId:req.cookies.idSale}
      })
      return res.redirect('/')
    }).catch((error) => console.log(error));
    
  }
};
