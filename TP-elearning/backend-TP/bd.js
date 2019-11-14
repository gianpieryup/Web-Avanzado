const mysql = require('mysql');
const util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    port : process.env.DATABADE_PORT,//MySQl usa 3306, en mi casa cambiar el .env a 3307|POR DEFECTO SI BORRO ESTA LINEA LO PONE EN  EL 3306
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

pool.query = util.promisify(pool.query)

module.exports = pool;