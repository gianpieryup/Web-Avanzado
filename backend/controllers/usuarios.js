const express = require('express');
const router = express.Router();
const usuariosModel = require('../models/usuariosModel');
const compraModel = require('../models/compraModel')

router.put('/changedatos/:id', async(req,res,next)=> {
    try {
        let actualizar_data = await usuariosModel.putUsuarioDatos(req.body.nombre_usuario, req.body.apellido_usuario, req.body.telefono_usuario,req.id);
        res.json({status : 'ok'})
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})

router.put('/changepassword/:id', async(req,res,next)=> {
    try {

        console.log(req.body.password_usuario);
        let actualizar_data = await usuariosModel.putUsuarioPassword(req.body.password_usuario,req.id);
        res.json({status : 'ok'})
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'});
    }
})



router.get('/', async(req,res,next)=> {
    try {
        let usr_data = await usuariosModel.getUsuario(req.id);
        res.json({status : 'ok', data : usr_data});
    } catch (error) {
        res.status(500).json({status : 'error'});
    }
})

router.get('/historial', async(req,res,next)=> {
    try {
        console.log("Mira la informacion que se guardo en el token, se instancio en el auth.js");
        console.log("El id: ",req.id);
        console.log("El role: ",req.role);
        
        let historial_user = await compraModel.historial(req.id);
        res.json({status : 'ok', data : historial_user});
    } catch (error) {
        res.status(500).json({status : 'error'});
    }
})

router.get('/direccion', async(req,res,next)=> {
    try {
        console.log("Mira la informacion que se guardo en el token, se instancio en el auth.js");
        console.log("El id: ",req.id);
        
        let direccions_user = await usuariosModel.getDirecciones(req.id);
        res.json({status : 'ok', data : direccions_user});
    } catch (error) {
        res.status(500).json({status : 'error'});
    }
})


module.exports = router;