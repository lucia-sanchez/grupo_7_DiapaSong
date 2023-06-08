require("dotenv").config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const cors = require("cors");
const passport = require("passport");
const {loginGoogleInitialize} = require('./services/googleServices');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require ('./routes/auth');
const productsRouter = require('./routes/products');
const ticketsRouter = require('./routes/tickets');
const localsUserCheck = require('./middlewares/localsUserCheck');
const cookieCheck = require("./middlewares/cookieCheck");
//APIS
const productsApiRouter = require('./routes/apis/productsApi');
const apiUserRouter = require('./routes/apis/users');
const apiMainRouter = require('./routes/apis/mainApi');
const apiCatogoryRouter = require('./routes/apis/categories');

const app = express();
loginGoogleInitialize()
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app
.use(logger('dev'))
.use(express.json())
.use(express.urlencoded({ extended: false }))
.use(cookieParser())
.use(express.static(path.join(__dirname, 'public')))
.use(methodOverride('_method'))
.use(session({
  secret : "diapasong",
  resave: false,
  saveUninitialized: true
}))
.use(cors())
.use(cookieCheck) //cargo en session lo que hay en la cookie
.use(localsUserCheck) //cargo en locals lo que hay en session
.use((req,res,next) => {
  req.session.message = null
  next()
})
/* .use(passport.initialize()) */

//RUTAS
app
.use('/', indexRouter)
.use('/users', usersRouter)
.use('/products', productsRouter)
.use('/tickets', ticketsRouter)
.use('/auth', authRouter)


//RUTAS APIs
app.use("/api", apiMainRouter)
app.use('/api/products', productsApiRouter);
app.use('/api/users', apiUserRouter); //http://:localhost:3000/auth
app.use('/api/categories',apiCatogoryRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
