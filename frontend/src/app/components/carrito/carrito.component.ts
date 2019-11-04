import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor() { }

  async ngOnInit() {
    //let respuesta_server : any= await this.productosServices.getProductos(); // get base service
    // {
      // {status : 'ok' , data : []}
    //}
    // if(respuesta_server.status === 'ok') {
    //   this.productos = respuesta_server.data;
    //   console.log(this.productos);
    // }
  }

}
