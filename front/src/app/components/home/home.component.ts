import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : any [] = [];
  constructor(private productosServices : ProductosService) { }

  async ngOnInit() {
    let data :any = await this.productosServices.getProductos();
    console.log(data);
    if(data.status == 'ok'){
      this.products = data.data;
      console.log(this.products);
      
    }
  }

}
