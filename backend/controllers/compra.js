const express = require('express');
const router = express.Router();
const compraModel = require('./../models/compraModel');

router.post('/',async(req,res,next)=>{
//compra producto
//req.id |id del usuario(token)Lo saca magicamente del token
console.log("!naiosdauisda");
console.log(req.id);
 let compra_ok = await compraModel.comprar(req.id);
//retorne la url de mercadoPago
 res.json({status:"ok",compra_ok:compra_ok})
})



module.exports = router; 