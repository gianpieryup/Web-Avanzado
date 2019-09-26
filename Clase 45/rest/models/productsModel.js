const mysql = require('mysql');// puede ser SQL SERVER , hace referencia al modulo instado

const utils = require('util');
// mysql --> pueda retornar una promise

const query = utils.promisify(mysql.query).bind(mysql);

async function getProducts() {
    //se realiza una consulta de todos los productos de la tabla
    try {
        const rows = await query("SELECT * FROM productos");
        return rows;
    } catch (error) {
        console.log(error);
    }

}

module.exports = {getProducts}