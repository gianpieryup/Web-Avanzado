function validacionNombre(obj) {
    if(obj.nombre == 'gian'){
        return  {status : 'ok'};
    }else{
        return  {status : 'error'};
    }

}

module.exports = {validacionNombre}