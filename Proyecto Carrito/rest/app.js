var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./controllers/index');
const productos = require('./controllers/productos');
const usuarios = require('./controllers/usuarios');
const auth = require('./controllers/auth');
const productosAdmin = require('./controllers/productosAdmin');

const fs = require('fs');
const jwt = require('jsonwebtoken');

/*const dotenv = require('dotenv');
dotenv.config();*/

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//AL principio de todo [Middleware]
//Esta funcion usa ES6, equivale a escribirlo como: function secured(){}

secured = (req, res,next)=>{
  // Headers: content-type
  // Authorization : token
  // Los token no van por get no por put si no por Autorization
  let token = req.headers.authorization;
  console.log("Token que llega del cliente :",token);

  // JWT amosd12jsdn81nasd89acfAD
  // replace reemplaza el JWT y solo deja el token para poder operar
  // const jwt = require('jsonwebtoken');
  
  //Le quito el prefijo JWT
  token = token.replace('JWT ','');//guarda con el espacio en blanco de JWT
  console.log("Token sin el prefijo :",token);

  //En el POSTMAN  mandar por header con la nomenclatura [JWT nombreToken] 
  const publicKey = fs.appendFileSync('./claves/publica.pem');//utf-8
  let decode = jwt.verify(token,publicKey);
  console.log("jwt decode",decode);
  console.log(decode.id);
  
  req.user_id = decode.id;
  next()
}

app.use('/', indexRouter);
app.use('/productos', productos);
app.use('/usuarios', usuarios);
//Osea si alguien quiere acceder a la ruta '/productosAdmin' tiene que pasar por el mildware
app.use('/productosAdmin',secured, productosAdmin);//secured una funcion de permisos definida arriba un [MILDWARE]
app.use('/auth', auth);

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
