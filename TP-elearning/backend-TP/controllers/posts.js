var express = require('express');
var router = express.Router();

const postModel = require('../models/postModel');

//Todos los post que accede cualquier usuario
router.get('/', async(req,res,next)=> {
    try {
        let post_pendientes = await postModel.getAllPost(0);
        res.json({ status : 'ok',data : post_pendientes});

    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})

//Post filtrado por curso :Pendiente

//Post especifico
router.get('/:id_post', async(req,res,next)=> {
    try {
        let post = await postModel.getPost( req.params.id_post);
        if(post.length > 0) {
            res.json({ status : 'ok',data : ejercicio});
        } else {
            res.json({ status : 'ok'});
        }

    } catch(error) {    
        res.status(500).json({status : 'error'});
    }
})

//Usuario Sube ejercicio
router.post('/', async(req,res,next)=> {
    try {
        let obj = {          
            id_usuario : req.id,//En el JWT conocemos el id
            id_curso : req.body.id_curso,
            enunciado_ejercicio : req.body.enunciado,
            solucion : req.body.solucion,//si no tiene solucion sera null ?
        }

        let id_insert_post = await postsModel.insertPost(obj);
        res.json({status : 'ok', data : id_insert_post})

    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})

module.exports = router;