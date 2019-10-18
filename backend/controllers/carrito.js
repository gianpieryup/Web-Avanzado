const express = require('express');
const router = express.Router();
const carritoModel = require('../models/carritoModel');

router.get('/', async(req,res,next)=> {
    try {
        console.log("El id_usuario del usuario logueado: ",req.id);
        console.log("El rol: ",req.role);
        
        if(req.id && req.role) {//Esta informacion | La saca del JWToken]]
            let carrito = await carritoModel.getCarrito(req.id);//como el id_usuario es la una PK de la tabla USUARIOS y no hay nada con id_cliente solo me basta con un parametro
           // console.log(carrito);
            res.json({status : 'ok', data : carrito});

        }
    } catch(error) {

        res.status(500).json({status : "error"});
    }
})

router.post('/', async(req,res,next)=> {
    console.log("entra");

    try {
        if(req.id && req.role) {
            let obj = {
                id_usuario_carrito : req.id,
                id_producto_carrito : req.body.id_producto,
            }
            let insert_carrito = await carritoModel.insertCarrito(obj);
            res.json({status : 'ok', data : insert_carrito})

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})

module.exports = router; 