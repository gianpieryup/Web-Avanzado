import { log } from 'util';

const mysql = require('mysql');// puede ser SQL SERVER , hace referencia al modulo instado

const utils = require('util');
// mysql --> pueda retornar una promise

const query = utils.promisify(mysql.query).bind(mysql);

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database : 'compras',//deberia llamarse carrito
    connectionLimit : 10
})

//para que me muestre los errores, para saber
//los nombres de las variables error, conection son los que tu quieras pero se construo que el primero sea error
pool.getConnection((error,connection)=>{
    if(error){console.log("El error es",error);}
    else {return connection;}   
})

module.exports = pool;