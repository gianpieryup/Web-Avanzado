require('dotenv').config();//es opcional si tu compu funciona si esto quitalo

// https://www.npmjs.com/package/mysql
const mysql = require('mysql'); 

const pool = mysql.createPool({
    host : process.env.DATABADE_HOST,
    port : 3307,//MySQl usa 3306
    user : process.env.DATABADE_USER,
    password : process.env.DATABADE_PASSWORD,
    database : process.env.DATABADE_NAME,
    connectionLimit : 10
});
// connectionLimit : definimos la cantidad maxima de conexiones simultaneas que tendrá mysql , las demas quedan pendientes (cola)

pool.getConnection((error, connection)=> {
    if(error) { console.log("Error en la conexion" ,error);}
    else { return connection;  }
});

module.exports = pool;