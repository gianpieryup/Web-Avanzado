//Login --> Server(existe)
//Token <-- ()

//sesiones

const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const fs = require('fs');

const usuariosModel = require('../models/usuarioModel');

router.post('/login', async (req,res,next)=> {
    try {
        //me trae una lista de todos los usuarios con ese mail y contraseña
        let usuario_ok = await usuariosModel.getUser(req.body.mail,req.body.password);
        if (usuario_ok.length > 0 ) {
            //HEADER
            var signoption = {
                expiresIn :"2h",
                algorithm : "RS256"
            }
            const privateKey = fs.readFileSync('./claves/privada.pem','utf-8');
            const payload = {id: usuario_ok[0].id_u, nombre : usuario_ok[0].nombre_u}
            const usuario = { nombre : usuario_ok[0].nombre_u}
            //armo el token
            const token = jwt.sign(payload, privateKey,signoption);
            res.json({usuario,JWT: token});
        }else{
            res.json({status:'invalid'});
        }

    } catch (error) {
        
    }

})

module.exports = router; 