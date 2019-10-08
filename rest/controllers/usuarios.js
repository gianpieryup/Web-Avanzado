const express = require('express');
const router = express.Router();

// POST localhost:3000/usuarios
// CONFIRMAR CUENTA (<a href="localhost:3000/usuarios/confirmar/TOKENUNICO" )

const usuariosModel = require('../models/usuarioModel');

router.get('/', async (req,res,next)=> {

    try {
        let usuarios = await  usuariosModel.mostrarUsuarios();
        res.json({usuarios});
    } catch(error) {
        console.log(error);
        
        res.json({status : 'error'});
    }
})


module.exports = router; 