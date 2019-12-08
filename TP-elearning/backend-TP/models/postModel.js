const pool = require('../bd');

async function getAllPost() {
    try{
        let query = "SELECT * FROM posts";
        const rows = await pool.query(query);
        console.log(rows);
        
        return rows;
    } catch(error) {
        console.log("Error en el modelo postModel/getAllPost()");
        throw error;
    }
}

async function getPost(idpost) {
    try{
        let query = "SELECT * FROM posts where id_post = ?";
        const rows = await pool.query(query,idpost);
        console.log(rows);
        
        return rows;
    } catch(error) {
        console.log("Error en el modelo postModel/getPost()");
        throw error;
    }
}

async function insertPost(obj) {
    try{
        let query = "INSERT INTO ?? set ?";
        
        const rows = await pool.query(query,[process.env.TABLA_POST,obj]);
        return rows.insertId;
    } catch(error) {
        throw error;
    }
}

module.exports = {getAllPost,getPost,insertPost}