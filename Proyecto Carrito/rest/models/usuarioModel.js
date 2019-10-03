const mysql = require('../bd'); // require de la referencia de la conexion;
const utils = require('util'); // utils hace referencia al modulo instalado
const query = utils.promisify(mysql.query).bind(mysql);


async function getUser(user,password) {
    try {
        const rows = await query("SELECT id_u,nombre_u, cuenta_confirmada from usuarios where mail = ? and password= ?",[user,mde5(password)]);
        console.log(rows);
        return rows;
    }
    catch(err){
        throw error;
        console.log(err);
    }

}

async function mostrarUsuarios() {
    try {
        const rows = await query("SELECT * from usuarios");
        console.log(rows);
        return rows;
    }
    catch(err){
        // bloque en caso que exista algun error 
        console.log(err);
    }

}
async function insertUsuario(obj){
    try {   
        const rows = await query("INSERT INTO usuarios set ?",obj);
        console.log(rows);
        
        return rows.insertId;
    }
    catch(err){
        console.log("Entro al error del Model");//recordar que este log nos muestra el error a nosotros por consola,
        // y (como le decimos al usuario sobre este error) (como mostramos este error en algo que no sea la consola)
        throw err ;//propaga el error al controler
        //si hay un error en esta funcion del modelo y no pongo 'throw' la peticion ,el usuario
        //o el que este esperando una respuesta se quedara colgado
    }
}

module.exports = {
    getUser,
    insertUsuario,
    mostrarUsuarios
}