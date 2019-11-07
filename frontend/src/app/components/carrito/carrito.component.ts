import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../../services/carrito.service';
import { CompraService } from 'src/app/services/compra.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito : any [] = [];
  constructor(private carritoService : CarritoService,private compraService:CompraService,private router :Router ) { }

  async ngOnInit() {
    let respuesta_server : any= await this.carritoService.getCarrito(); // get base service
    console.log("Carga inicial del carrito componente");
    console.log(respuesta_server);
    

    if(respuesta_server.status == 'ok') {
      this.carrito = respuesta_server.data;
      console.log(this.carrito);
    }
  }
  async comprar(){
    let res : any= await this.compraService.cerrarCarrito({})
    if (res.status=="ok") {
      console.log(res.url);     
      this.router.navigate(['home']);
    } 
  }
}
