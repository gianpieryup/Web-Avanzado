const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const fs = require('fs');

const authModel = require('../models/authModel');

router.post('/login/:id',async(req,res,next)=> {
    console.log("Entra a ligin");
    try {
		let id_cliente = req.params.id;
        let login_usr = await authModel.loginUser(id_cliente,req.body.mail, md5(req.body.password));
        if(login_usr.length > 0 ) {//Paso el Login
            const privateKey = fs.readFileSync('./claves/privada.pem','utf-8');
            
            let signOptions = {
                expiresIn : "2h",
                algorithm : "RS256"
            }
            
            if(login_usr[0].permisos_usuario == 0){
                // usuario comun de la plataforma
                var payload = {id : login_usr[0].id_usuario, role : 'user'};
            } else {
                // administrador|seria (1)
                var payload = {id : login_usr[0].id_usuario, role : 'user'};

            }
            const usuario = {id : login_usr[0].id_usuario};
            const token = jwt.sign(payload,privateKey,signOptions);
            res.json({usuario, JWT : token});
        } else {
            res.json({status : 'invalid', message : 'Usuario o contraseña incorrectos'})
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'});
    }
    
});


module.exports = router; 