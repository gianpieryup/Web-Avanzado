import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos : any [] = [];
  constructor(private productosServices : ProductosService, private rooter : Router) { }

  async ngOnInit() {//Lo que carga por defecto
    // Acá cargamos los productos como peticion a nuestro backend
    // return this.http.get()
    let respuesta_server : any= await this.productosServices.getProductos(); // get base service
    if(respuesta_server.status === 'ok') {
      this.productos = respuesta_server.data;
      console.log(this.productos);
    }
  }

  navigate(id : number){
    //redireccionar a la avista del producto
    //recordar que para acceder a estos | dbemos incluir en el conttructor
    this.rooter.navigate(['producto',id]);
    //esta notacion de [navigate] concatena cosas con (,)| Un array que conactena cosas
    //armarlo de la forma tradicional con 
  }
}
