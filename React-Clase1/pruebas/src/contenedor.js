import React from 'react';
import Agregar from './agregar';
import Listado from './listado';

export default class Contenedor extends React.Component{
    render(){
        var lista = [
        {nombre: "Lorena", apellido:"Izzo"},
        {nombre: "Seus", apellido: "Mengano"}
        ]

        return (
            <div>
                <div>

                </div>
                <>
                    <Listado listaPersonas={lista}/>
                </>    
            </div>)
    }
}