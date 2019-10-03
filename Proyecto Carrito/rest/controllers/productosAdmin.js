const express = require('express');
const router = express.Router(); 
const productosModel = require('../models/productosModel');

// POST
// PUT
// DELETE

// POST // localhost:3000/productosAdmin
// router.post  | router.get | router.delete
router.post('/', async (req,res,next)=> {
    try {
        // <input type="text" name="nombre_p">
        let obj = {
            nombre_p : req.body.nombre_p,
            descripcion_p : req.body.descripcion_p,
            stock_p : req.body.stock_p,
            precio_p : req.body.precio_p,
            imagen_p : req.body.imagen_p
        }
        let productos_insert = await productosModel.insertProducto(obj);
        if(productos_insert != undefined){
            res.json({status:'ok', id: productos_insert});
        }
    } catch (error) {
        console.log("Entro al catch del controlador");
        console.log(error);
    }

});

router.put('/:id_p', async (req,res,next)=> {
    try {

        let obj = {
            nombre_p : req.body.nombre_p,
            descripcion_p : req.body.descripcion_p,
            stock_p : req.body.stock_p,
            precio_p : req.body.precio_p,
            imagen_p : req.body.imagen_p
        };
        let put_producto = await productosModel.putProducto(obj,req.params.id_p)
        if(put_producto){
            res.json({status:'ok put'});
        }
    } catch(error) {
        console.log(error)
    }

});

router.delete('/:id_p', async (req,res,next)=> {
    try {

        let productoBorrado = await productosModel.deleteProducto(req.params.id_p);
        //resultado si fue borrado
        if (productoBorrado) {
            res.json({status:'borrado correctamente'});
        }
    } catch (error) {
        console.log("Entro al catch del controlador");
        console.log(error);
    }

});

module.exports = router;