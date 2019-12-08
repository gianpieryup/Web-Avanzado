const pool = require('../bd');

async function loginUser(username,password) {
    try{
        console.log(username,password);
        
        let query = "select id_usuario,nombre_usuario, permisos_usuario from ?? where mail_usuario = ? and password_usuario = ?" ;
        const rows = await pool.query(query,[process.env.TABLA_USUARIOS,username,password]);
        console.log(rows);
        
        return rows;
    } catch(error) {
        throw error;
    }
}

/*async function loginAdminUser(username,password) {
    try{
        let query = "select id_cliente from ?? where usuario_cliente = ? and password_cliente = ? and estado_cliente = 1";
        const rows = await pool.query(query,[process.env.TABLA_CLIENTES,username,password]);
        return rows;
    } catch(error) {
        throw error;
    }
}*/

module.exports = {loginUser}