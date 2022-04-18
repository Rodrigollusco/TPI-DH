var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); 



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/* 
app.use('/', indexRouter);
app.use('/users', usersRouter); */
/*home*/
app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'index.html')))
/*login & register*/
app.get('/login', (req,res) => {
  return res.sendFile(path.resolve(__dirname, 'views', 'login.html'))
});
app.get('/register', (req,res) => {
    return res.sendFile(path.resolve(__dirname, 'views', 'register.html'))
});
app.get('/password', (req,res) => {
    return res.sendFile(path.resolve(__dirname, 'views', 'passwordless.html'))
});
/*contact*/
app.get('/contact', (req,res) => {
  return res.sendFile(path.resolve(__dirname, 'views', 'contact.html'))
});
/*carrito & productos*/
app.get('/buy', (req,res) => {
  return res.sendFile(path.resolve(__dirname, 'views', 'buy.html'))
});

app.get('/productos', (req,res) => {
  return res.sendFile(path.resolve(__dirname, 'views', 'productos.html'))
});
/*rutas de detalles de producto*/ 
app.get('/painball', (req,res) => {
  return res.sendFile(path.resolve(__dirname, 'views', 'painball.html'))
});
/*footer*/
app.get('/legales', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'legales.html'))
);
app.get('/terminos', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'terminos.html'))
);
app.get('/preguntas-frecuentes', (req,res) =>res.sendFile(path.resolve(__dirname, 'views', 'preguntas.html'))
);


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
