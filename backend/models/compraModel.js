const pool = require('./../bd.js');
const uuid = require('uuid');
const mp = require('../mercadoPago')

async function comprar(idUsuario) {
    try {
        let uuid_t = uuid();
    let query = "select sum(precio_producto) as total from carrito join productos on (id_producto = id_producto_carrito) where id_compra_carrito is null and id_usuario_carrito = ?";

    const row = await pool.query(query,idUsuario);
    console.log(row)
    let monto = row[0].total;
    console.log("El monto es: "+monto);

    let queryInsert = "insert into compra set ?"
    let obj = {
            id_usuario_compra: idUsuario,
            monto_compra: monto,
            token_compra: uuid_t
            }   
    const rowsInsert = await pool.query(queryInsert,obj);
    
    let insertId = rowsInsert.insertId
    console.log(rowsInsert.insertId);//la pk de la fila insertada

    let queyUpdate = "update carrito set id_compra_carrito = ? where id_usuario_carrito = ? and id_compra_carrito is null";
    const rowsUpdate = await pool.query(queyUpdate,[insertId,idUsuario]);
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
            email : 'lizalaaniquiladora@gmail.com'//sacrlo con un select del usuario a quien le llegara
        },
        notification_url : process.env.URL + "compra/"+ uuid_t
    }
        //notification_url es la url a la que mercado pago me redirige si la compra fue exitosa

    let obj_mercadopago = await mp.comprar(preference);
    console.log(obj_mercadopago)
    console.log(preference.notification_url);
    
    return obj_mercadopago.body.sandbo_init_point;
    } catch (error) {
        throw error;
    }
   
    
}

async function historial(idUsuario) {
    try {
        let query = "select id_compra, monto_compra, fecha_compra from compra where id_usuario_compra = ?";
        const rows = await pool.query(query,idUsuario);
        return rows;

    } catch (error) {
        throw error;
    }
}
module.exports = {comprar,historial} 