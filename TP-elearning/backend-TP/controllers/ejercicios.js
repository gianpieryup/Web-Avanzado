var express = require('express');
var router = express.Router();

const ejerciciosModel = require('../models/ejerciciosModel');

router.get('/', async (req, res, next) => {
    try {
        let ejercicios = await ejerciciosModel.getEjercicios();
        res.json({ status : 'ok',data : ejercicios});
    } catch(error) {
        res.status(500).json({status : 'error'});
        throw error;
    }
});

router.get('/:idEjercicio', async(req,res,next)=> {
    try {
        let ejercicio = await ejerciciosModel.getEjercicio( req.params.idEjercicio);
        if(producto.length > 0) {

            res.json({ status : 'ok',data : ejercicio});
        } else {
            res.json({status : 'ok'});
        }

    } catch(error) {    
        res.status(500).json({status : 'error'});
    }
})

//__________________________ADMIN___________________________________

router.put('/:id', async(req,res,next)=> {
    try {
        let actualizar_data = await ejerciciosModel.updateEjercicio(req.body.nombre_usuario, req.body.apellido_usuario, req.body.telefono_usuario,req.id);
        res.json({status : 'ok'})
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})

router.post('/', async(req,res,next)=> {
    try {
        console.log(req.params.id_cliente);
        let obj = {
            id_curso : req.params.id_curso,
            enunciado : req.body.enunciado,
            solucion : req.body.solucion,
            id_usuario_publicacion : req.body.id_usuario,
        }


    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})


module.exports = router;
