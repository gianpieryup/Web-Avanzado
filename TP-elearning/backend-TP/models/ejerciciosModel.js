const pool = require('../bd');

async function getEjercicios() {
    try {
        let query = "select * from ?? ";
        const rows = await pool.query(query,[process.env.TABLA_EJERCICIOS]);
        return rows; 
    } catch (error) {
        throw error;
    }
}
async function getEjercicio(id) {
    try {
        let query = "select * from ?? where id_ejercicio = ?";
        const rows = await pool.query(query,[process.env.TABLA_EJERCICIOS,id]);
        return rows; 
    } catch (error) {
        throw error;
    }
}

async function insertEjercicio(obj) {
    try {
        let query = "insert into ?? set ?";
        const rows = await pool.query(query,[process.env.TABLA_EJERCICIOS, obj]);
        return rows.insertId;
    } catch(error) {
        throw error;
    }
}

async function deleteEjercicio(id) {
    try {
        let query = "delete from ?? where id_ejercicio = ?  ";
        const rows = await pool.query(query,[process.env.TABLA_PRODUCTOS,id]);
        return rows; 
    } catch (error) {
        throw error; 

    }
}

async function updateEjercicio(id,obj) {
    try {

        let query = "update ?? set ? where id_ejercicio = ? ";
        const rows = await pool.query(query,[process.env.TABLA_EJERCICIOS,obj,id]);
        return rows; 
    } catch (error) {
        throw error; 
    }
}
module.exports = {getEjercicios, getEjercicio, insertEjercicio, 
    deleteEjercicio,updateEjercicio}