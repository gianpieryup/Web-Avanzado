import React from 'react';

export default class Contenedor extends React.Component{
    render(){
        console.log(this.props.listaPersonas);
        var vectorLista = [];
        this.props.listaPersonas.forEach(element => {
            vectorLista.push(<div>
                {element.nombre} | {element.apellido}
            </div>)
        });
        
        return (<div>
            Litado funcional!
            <h1>Listado</h1>
            {vectorLista}
        </div>)
    }


}