const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

//RECURSOS ESTATICOS
app.use(express.static('public'));

//RUTAS
app.get('/',(req, res)=> res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/login',(req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register',(req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('/productDetail',(req,res) => res.sendFile(path.join(__dirname, 'views', 'productDetail.html')));
app.get('/productCart',(req,res) =>res.sendFile(path.join(__dirname, 'views', 'productCart.html')));
app.get('/create',(req,res) =>res.sendFile(path.join(__dirname, 'views', 'create.html')));
app.get('/udpate',(req,res) =>res.sendFile(path.join(__dirname, 'views', 'update.html')));
app.get('/user',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'user.html')));
app.get('/blog',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'blog.html')));
app.get('/faq',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'faq.html')));
app.get('/password',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'password.html')));
app.get('/tickets',(req,res)=>res.sensFile(path.join__(dirname, 'views', 'tickets.html')));
app.get('/ticketsDetail',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'ticketsDetail.html')));
app.get('/products',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'products.html')));


app.listen(port, () => console.log('Servidor corriendo en el puerto 3030'));