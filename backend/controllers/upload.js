const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({dest : './uploads/'})
const fs = require('fs')
const uuid = require('uuid');

//nombre del array, cantidad de elemntos que tiene
//dependiendo la cantida de elemntos que se quiera cmabiar upload tiene distintos metodos
router.post('/:id_cliente',upload.array('file',1),async(req,res,next)=>{
    try {
        console.log("entro aca");
        let obj = {
             id_cliente :  req.params.id_cliente,
             comentario : req.body.comentario,
             provincia  : req.body.provincia
        }

        let nombre_imagen = uuid();
        console.log(req.files[0]);
        
        // cambiar para nuestros proyectos la ruta correcta del almacenamiento
        // let cadena = hola/chau
        // cadena.split('/) --> ['hola','chau']
        if(req.files[0].mimetype == "image/jpeg" || req.files[0].mimetype == "image/png"){
            let ext = req.files[0].mimetype.split('/');
            ext = "."+ext[1]
            fs.createReadStream('./uploads/'+ req.files[0].filename).pipe(fs.createWriteStream('./uploads/'+ nombre_imagen + ext))
            //archivo temporal ---> idUnico.jpg
            //en la tabla imagenes --> idUnico.jpg
            fs.unlink('./uploads/'+ req.files[0].filename, (error)=>{
                if(error){
                    console.log(error);
                    
                }
            })
        }else{
            console.log("Formato no definido");
            res.json({status: 'invalid'})//para que lo mande a mostrar en el front
            
        }
    } catch (error) {
        throw error
    }
})

module.exports = router;