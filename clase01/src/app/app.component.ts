import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase01';
  nombre: string;
  apellido: string;
  edades : number[];
  suma : number;
  curso : any[] = [];
  cantidadPersonas : number;

  constructor(){
    this.nombre = 'franauito';
    this.edades = [50,60,90];
    this.suma =0;
    this.curso = [
      {
        id:1,
        nombre: 'frnaco',
        edad: 26
      },
      {
        id:2,
        nombre: 'Luidis',
        edad: 150
      }
    ] ;//[];
    this.cantidadPersonas =this.curso.length;
    console.log("cantidad de personas",this.cantidadPersonas);
    
  }

    sumarEdades(){
   // let sumaLocal = 0;
   console.log("LA longitud",this.edades.length);
    console.log("La suma inicial",this.suma);
    for(let i=0;i<(this.edades).length;i++){
        console.log("Antes",this.suma);
        
        
        this.suma += this.edades[i];
        console.log("Despues",this.suma);
    }
   // this.suma = sumaLocal;
    return this.suma ;
  }
}
