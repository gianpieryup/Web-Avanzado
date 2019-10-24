const pool = require('../bd');

async function getUsuarios(id_cliente) {
    try {
        let query = "select * from usuarios where id_cliente_usuario = ?";
        const rows = await pool.query(query,[id_cliente]);
        return rows; 
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getUsuarios
}