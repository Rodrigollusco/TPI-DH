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
app.get('/login', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'login.html')));
app.get('/register', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'register.html')));
app.get('/password', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'passwordless.html')));

/*contact*/
app.get('/contacto', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'contact.html')));
/*about-us*/
app.get('/nosotros', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'about-us.html')));

/*carrito & productos*/
app.get('/buy', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'buy.html')));
app.get('/productos', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'productos.html')));
/*detalle de productos*/
app.get('/alfombra', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'alfombra.html')));
app.get('/ajedrez', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'ajedrez.html')));
app.get('/adivina', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'adivina.html')));
app.get('/basta', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'basta.html')));
app.get('/bebote', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'bebote.html')));
app.get('/cocinita', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'cocinita.html')));
app.get('/cars', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'cars.html')));
app.get('/conect4', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'conect4.html')));

/*footer*/
app.get('/legales', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'legales.html')));
app.get('/terminos', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'terminos.html')));
app.get('/preguntas-frecuentes', (req,res) =>res.sendFile(path.resolve(__dirname, 'views', 'preguntas.html')));
app.get('/recursos', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'recursos.html')));
app.get('/privacidad', (req,res) =>res.sendFile(path.resolve(__dirname, 'views', 'privacidad.html')));

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
