import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService extends BaseService {

   async getProductos() {
    // /productos
    try {
      this.setEndPoint('productos/1');
      return this.get();
    } catch(error) {
      throw error;
    }
  }

   async getProducto(id){
    //productos/1
    try {
      this.setEndPoint('productos/1/'+id);
      return this.get();
    } catch (error) {
      throw error; 
    }
    
  }



}
