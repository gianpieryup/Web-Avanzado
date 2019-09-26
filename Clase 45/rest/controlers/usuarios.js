var express = require('express');
var router = express.Router();
const usersModel = require('../models/usuarioModel');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('usuarios', { title: 'Lista de Usuarios' });
});

router.post('/', function(req, res, next) {
    let obj = {nombre : req.body.nombre, email : req.body.email }
    let statusModel = usersModel.validacionNombre(obj);
    if(statusModel.status=='ok') {
        res.json({status : 'ok' , user : obj.nombre})        
    // res.render('usuarios',{status : 'ok', user : obj.nombre, message : 'correo enviado'});
    }else{
        res.json({status : 'error' , message : 'El usuario debe ser gian'})
    }
});


module.exports = router;