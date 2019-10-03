const express = require('express');
const router = express.Router();
const mde = require('md5');
const usuariosModel = require('../models/usuarioModel');
const uuid = require('uuid');
router.get('/', async (req,res,next)=> {

    try {
        let usuarios = await  usuariosModel.mostrarUsuarios();
        res.json({usuarios});
    } catch(error) {
        res.json({status : 'error'});
    }
})

router.post('/', async (req,res,next)=> {
    // uuid genera uns tring aleatorio
    try {
        let obj = {
            mail_u : req.body.mail_u,
            nombre_u : req.body.nombre_u,
            password_u : req.body.password_u,
            apellido_u : req.body.apellido_u,
            codigo_confirmacion : uuid()         
        }
        let insert_ok = await usuariosModel.insertUsuario(obj);
        console.log(insert_ok);
        if (insert_ok != undefined) {
            res.json({status:'ok', id: insert_ok})
        }
    } catch(error) {
        console.log("Error en la ruta usuarios[POST]");
        console.log(error);
        
        res.json({status : 'error'});
    }
})

module.exports = router; 