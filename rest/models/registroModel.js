//Todas las funciones
const mysql = require('../bd'); // require a la conexion;
const utils = require('util');
const query = utils.promisify(mysql.query).bind(mysql);



async function insertUsuario(obj){
    try {   
        const rows = await query("INSERT INTO usuarios set ?",obj);
        console.log(rows);
        
        return rows.insertId;//Este metodo me devuelve el id con el cual se genero
    }
    catch(err){
        console.log("Entro al error del Model");//recordar que este log nos muestra el error a nosotros por consola,
        // y (como le decimos al usuario sobre este error) (como mostramos este error en algo que no sea la consola)
        throw err ;//propaga el error al controler
        //si hay un error en esta funcion del modelo y no pongo 'throw' la peticion ,el usuario
        //o el que este esperando una respuesta se quedara colgado
    }
}

async function confirmarCuenta(uuid){
    try {   
        const rows = await query("UPDATE usuarios set cuenta_confirmada = 1 where codigo_confirmacion = ? and cuenta_confirmada = 0",[uuid]);
        console.log(rows);
        //retorna true si el update funciono corrrectamente
        return rows
    }catch (error){
        throw error;
    }
}
module.exports = {
    insertUsuario,
    confirmarCuenta
}