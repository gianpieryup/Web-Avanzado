const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const fs = require('fs');
const md5 = require('md5');

const usuariosModel = require('../../models/usuarioModel');

//Login --> Server(existe) | Le mando el correo y la pass
//Token <-- () | me devuelve el token JWT si esta logueado
router.post('/', async (req,res,next)=> {
    try {
        //me trae una lista de todos los usuarios con ese mail y hasheada(contraseña) que coincida
        let usuario_ok = await usuariosModel.getUser(req.body.mail,md5(req.body.password));

        //si no hay usuarios con estos cambios trae una lista vacia, por tanto no entra en este "if"
        if (usuario_ok.length > 0 ) {
            console.log(usuario_ok)
            if (usuario_ok[0].permisos == 0) {
                res.json({status:'Usted no es un administrador'});              
            }
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
            res.json({status:'invalid',info:'Usted no esta registrado'});
        }

    } catch (error) {
        
    }

})

module.exports = router; 