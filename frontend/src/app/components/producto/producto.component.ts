import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  id_producto : any;
  producto: any ;
  constructor(private productosService :ProductosService, private activateRouter :ActivatedRoute ,private router :Router, private carritoService: CarritoService) { }

  //Router: redirigir a  una ruta   --------------------|
  //Activatios:  puedo ver informacion que la ruta -----|
  async ngOnInit() {
    //http:localhost:4200/producto/2  | recordar la ruta producto/:id
                                                    // |-----------|
                                                    // |    
    this.id_producto = this.activateRouter.snapshot.params.id;
    console.log(this.id_producto);
    let respuesta_server : any= await this.productosService.getProducto(this.id_producto);
    this.producto = respuesta_server.data[0];
    console.log(this.producto);
  //  console.log(respuesta_server.data[0].nombre_producto);
    
  }
  async cargarAlCarrito(){
    console.log("CArgare este producto al carrito");
    let product = {id_producto: this.id_producto };
    let res : any= await this.carritoService.cargarCarrito(product)
    if (res.status=="ok") {
      console.log(res.data);     
      this.router.navigate(['carrito']);
    } 
  }

}
