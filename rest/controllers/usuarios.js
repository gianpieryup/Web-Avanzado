const express = require('express');
const router = express.Router();

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

router.post('/cambiarPass', async (req,res,next)=> {

    try {
        let user = {mail_u:req.body.mail_u, password_u: mde(req.body.password_u)};
        let usuarios = await  usuariosModel.cambiarPassword(user.mail_u,user.password_u);
        res.json({usuarios});
    } catch(error) {
        console.log(error);
        
        res.json({status : 'error'});
    }
})

module.exports = router; 