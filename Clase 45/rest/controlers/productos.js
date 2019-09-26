var express = require('express');
var router = express.Router();
const productsModel = require('../models/productsModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  //sin el wait me devolveria una promesa
  let productos = await  productsModel.getProducts();
  console.log(productos);
  res.json(productos);
  
  res.render('products', { title: 'Lista de Productos' });
});

module.exports = router;