import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito : any [] = [];
  constructor(private carritoService : CarritoService) { }

  async ngOnInit() {
    let respuesta_server : any= await this.carritoService.getCarrito(); // get base service

    if(respuesta_server.status === 'ok') {
      this.carrito = respuesta_server.data;
      console.log(this.carrito);
    }
  }

}
