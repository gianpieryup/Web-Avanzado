const pool = require('./../bd.js');
const uuid = require('uuid');
const mp = require('../mercadoPago')

async function comprar(id) {
    try {
        let uuid_t = uuid();
    let query = "select sum(precio_producto) as total from carrito join productos on (id_producto = id_producto_carrito) where id_compra_carrito is null and id_usuario_carrito = ?";

    const row = await pool.query(query,id);
    console.log(row)
    let monto = row[0].total;
    console.log("El monto es: "+monto);
    
    let obj = {
            id_usuario_compra: id,
            monto_compra: monto,
            token_compra: uuid_t
            }
    let queryInsert = "insert into compra set ?"
    const rowsInsert = await pool.query(queryInsert,obj);
    
    let insertId = rowsInsert.insertId
    console.log(insertId);//la pk de la fila insertada

    let queyUpdate = "update carrito set id_compra_carrito = ? where id_usuario_carrito = ? and id_compra_carrito is null";
    const rowsUpdate = await pool.query(queyUpdate,[insertId,id]);
    console.log(rowsUpdate);
    
    //mercado PAgo
    //[items] es un array de objetos que contienen todos los datos referidos a la compra
    let preference ={
        items : [
            {
                id : rowsInsert.insertId,
                title : 'Compra e-commerce',
                quantity : 1,
                currency_id : 'ARS',//pesos argentinos
                unit_price: monto
            }
        ],
        payer :{
            email : 'email@gmail.com'//sacrlo con un select del cliente
        },
        notification_url : process.env.URL + "compra/"+ uuid_t
    }
        //notification_url es la url a la que mercado pago me redirige si la compra fue exitosa

    let obj_mercadopago = await mp.comprar(preference);
    console.log(obj_mercadopago)
    return obj_mercadopago.body.sandbo_init_point;
    } catch (error) {
        throw error;
    }
   
    
}

module.exports = {comprar} 