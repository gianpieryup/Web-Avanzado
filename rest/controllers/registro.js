const express = require('express');
const router = express.Router();
const mde = require('md5');
const uuid = require('uuid');

const usuariosModel = require('../models/usuarioModel');
const correosModel = require('../models/correosModel');
const registroModel = require('../models/registroModel');

router.post('/', async (req,res,next)=> {
   
    try {
        let obj = {
            mail_u : req.body.mail_u,
            nombre_u : req.body.nombre_u,
            password_u : mde(req.body.password_u),//La guardo hasheada recordar que es mde() el recurso instanciado de md5()
            apellido_u : req.body.apellido_u,
            codigo_confirmacion : uuid()      // uuid() genera uns tring aleatorio    
        }
        
        let objMailObject = {
            mail_u:obj.mail_u,
            subject:'Confirmar cuenta',
            html:`<p>Para terminar ingresa al siguiente enlace:</p>
            <p>localhost:3000/registro/${obj.codigo_confirmacion}</p>`
           // html:`<a href="www.google.com"> </a>`

        }

        let insert_ok = await registroModel.insertUsuario(obj);
        console.log(insert_ok);
        if (insert_ok != undefined) {//se inserto correctamente en la tabla
            //enviar CORREO
            let email_sent = await correosModel.sendEmail(objMailObject)
            if(email_sent != undefined){
                res.json({status:'ok', id: insert_ok, message:"Confirmar la cuenta para iniciar sesion"})
            }
           
        }
    } catch(error) {
        console.log("Error en la ruta registro[POST]");
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})

router.get('/:id', async (req,res,next)=> {
    try {
        let uuid = req.params.id;
        let cuentaConfirmada = registroModel.confirmarCuenta(uuid);
        //devuelve true si se actualizao correctamente
        if(cuentaConfirmada){
            res.json({estado:"cuenta confirmada"})
        }
        req.param
    } catch (error) {
        console.log(error);
        res.json({estado:"invalido"})
    }


})
module.exports = router; 