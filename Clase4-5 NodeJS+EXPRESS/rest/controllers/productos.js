// var
// chrome://inspect/#devices

const express = require('express');
const router = express.Router(); 
const productosModel = require('../models/productosModel');

router.get('/', async (req,res,next)=> {
    try {

        let productos = await  productosModel.getProductos();
        res.json({productos});
        // vista del home con TODOS los productos
    } catch(error) {
        res.json({status : 'error'});
    }

})


router.get('/:id_p', async(req,res,next)=> {

    try {
        // hola : nu
        let id_p = parseInt(req.params.id_p);
        if(Number.isInteger(id_p)) {
            let producto = await productosModel.getProducto(id_p);
            //me devuelve un array con 1 elemento si existe o un array vacio si no encontro un registro con este id
            console.log(producto)
            //la variable producto es un array
            if(producto.length > 0) {//en data:producto[0] ahora seria un objeto
               // res.json({status : 'ok', data : producto, cantidad : producto.length});
               res.render('productos',{status : 'ok', data : producto[0]})
                
            } else {    
                res.json({status : 'ok', cantidad : 0})
            }
        } else {//validamos que nos pasen un numero y no otra cosa

            res.json({status : 'invalid'});
        }

    } catch(error) {
        console.log(error)//validamos si es un error de nosostros
        res.status(500).json({status : 'error', error: error})
    }
})
     
module.exports = router; 