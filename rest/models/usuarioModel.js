const mysql = require('../bd'); // require de la referencia de la conexion;
const utils = require('util'); // utils hace referencia al modulo instalado
const query = utils.promisify(mysql.query).bind(mysql);


async function getUser(user,password) {
    try {
        const rows = await query("SELECT id_u,nombre_u, cuenta_confirmada,permisos from usuarios where mail_u = ? and password_u= ?",[user,password]);
        console.log(rows);
        return rows;
    }
    catch(err){
        console.log(err);//no puede ir nada despues del 'throw error'
        throw error; 
    }

}

async function cambiarPassword(mail,newPassword) {
    try {
        const rows = await query("UPDATE productos set  password_u = ? from usuarios where mail_u = ? ",[newPassword,mail]);
        console.log(rows);
        return rows;
    }
    catch(err){
        console.log(err);//no puede ir nada despues del 'throw error'
        throw error; 
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


module.exports = {
    getUser,
    mostrarUsuarios,
    cambiarPassword
}