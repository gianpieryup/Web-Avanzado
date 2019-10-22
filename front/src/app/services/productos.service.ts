import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService extends BaseService {
  getProductos(){
     try {
       this.sendEndPoint('productos/1');
       return this.get();
     } catch (error) {
       throw error;
     }
  }
  getProduct(){

  }
}
