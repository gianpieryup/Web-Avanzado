import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  id_producto : any;
  producto: any []=[];
  constructor(private productosService :ProductosService, private activateRouter :ActivatedRoute ,private router :Router) { }

  //Router: redirigir a  una ruta   --------------------|
  //Activatios:  puedo ver informacion que la ruta -----|
  async ngOnInit() {
    //http:localhost:4200/producto/2  | recordar la ruta producto/:id
                                                    // |-----------|
                                                    // |    
    this.id_producto = this.activateRouter.snapshot.params.id;
    console.log(this.id_producto);
    let respuesta_server = await this.productosService.getProducto(this.id_producto);
    console.log(respuesta_server);
    
  }


}
