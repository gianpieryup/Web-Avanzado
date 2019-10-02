const mysql = require('../bd'); // require de la referencia de la conexion;
const utils = require('util'); // utils hace referencia al modulo instalado
const query = utils.promisify(mysql.query).bind(mysql);

async function putProducto(obj,id){
    try {
        console.log(obj);
        console.log(id);
        const rows = await query("UPDATE productos set ? where id_p=?",[obj,id]);
        //retorna true si el update funciono corrrectamente
        console.log(rows);
        return rows;
    }catch(err){
        console.log("Error en el model");
        console.log(err);
        throw err;
        
    }
}
async function insertProducto(obj){
    try {
        //lo inserta magicamente
        const rows = await query("INSERT INTO productos set ?",obj);
        return rows.insertId;
        //[obj.nombre_p,
        //obj.descripcion_p,
        //obj.stock_p
        //obj.precio_p
        //obj.imagen_p
        //]);

    }
    catch(err){
        // bloque en caso que exista algun error 
        console.log("Entro al error del Model");//recordar que este log nos muestra el error a nosotros por consola,
        // y (como le decimos al usuario sobre este error) (como mostramos este error en algo que no sea la consola)
        throw err ;//propaga el error al controler
        //si hay un error en esta funcion del modelo y no pongo 'throw' la peticion ,el usuario
        //o el que este esperando una respuesta se quedara colgado
    }
}

async function getProductos() {
    // Se realiza una consulta de todos los productos de la tabla
    // el bloque try catch es propio en node de funciones asincronas
    try {
        const rows = await query("SELECT * from productos");
        console.log(rows);
        return rows;
    }
    catch(err){
        // bloque en caso que exista algun error 
        console.log(err);
    }

}

async function getProducto(id) {
    try {
        const rows = await query("select * from productos where id_p= ?",[id]);
        return rows;
        
        // INSERT INTO productos (nombre,precio, descripcion) values ()
    } catch(err) {
        console.log(err);
    }
}

async function buscarProductoFiltro(min,max) {
    try {
        const rows = await query("select * from productos where precio_p between  ? and ?",[min,max]);
        console.log(rows);
        
        return rows;
        
      
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    getProductos,
    getProducto,
    buscarProductoFiltro,
    insertProducto,
    putProducto
}
