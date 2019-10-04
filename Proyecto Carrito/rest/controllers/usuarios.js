const express = require('express');
const router = express.Router();
const mde = require('md5');
const uuid = require('uuid');

// POST localhost:3000/usuarios
// CONFIRMAR CUENTA (<a href="localhost:3000/usuarios/confirmar/TOKENUNICO" )

const usuariosModel = require('../models/usuarioModel');

router.get('/', async (req,res,next)=> {

    try {
        let usuarios = await  usuariosModel.mostrarUsuarios();
        res.json({usuarios});
    } catch(error) {
        res.json({status : 'error'});
    }
})

router.post('/', async (req,res,next)=> {
   
    try {
        let obj = {
            mail_u : req.body.mail_u,
            nombre_u : req.body.nombre_u,
            password_u : mde(req.body.password_u),//La guardo hasheada recordar que es mde() el recurso instanciado de md5()
            apellido_u : req.body.apellido_u,
            codigo_confirmacion : uuid()      // uuid() genera uns tring aleatorio    
        }
        let insert_ok = await usuariosModel.insertUsuario(obj);
        console.log(insert_ok);
        if (insert_ok != undefined) {
            res.json({status:'ok', id: insert_ok})
        }
    } catch(error) {
        console.log("Error en la ruta usuarios[POST]");
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})

module.exports = router; 