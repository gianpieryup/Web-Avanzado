var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const fs = require('fs');//check
const authRouter = require('./controllers/auth');
const registroRouter = require('./controllers/registro');
const usuariosRouter = require('./controllers/usuarios');
//const ejerciciosRouter = require('./controllers/ejercicios');

// Admin controller
const authAdminRouter = require('./controllers/admin/auth');

var app = express();
app.use(cors())


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//secured
secured = (req,res,next) => {
  try {
  
    let token = req.headers.authorization; 
  
    token = token.replace('Bearer ','');
    const publicKey = fs.readFileSync('./claves/publica.pem');
    let decoded = jwt.verify(token, publicKey);
  
    req.id = decoded.id;
    req.role = decoded.role;
    next();
  } catch (error) {
    res.status(401).json({status : 'unauthorized'});
  }
}

//USER
app.use('/auth', authRouter);
app.use('/registro', registroRouter);
app.use('/usuarios', secured,usuariosRouter);

// ADMIN 
app.use('/admin/auth', authAdminRouter);



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
 // res.render('error');
});

module.exports = app;
