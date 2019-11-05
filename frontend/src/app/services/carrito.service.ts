import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService extends BaseService {

  async getCarrito() {
    // /productos
    try {
      this.setEndPoint('carrito');
      return this.get();
    } catch(error) {
      throw error;
    }
  }

  async cargarCarrito(obj) {
    // /productos
    try {
      this.setEndPoint('carrito');
      return this.post(obj);
    } catch(error) {
      throw error;
    }
  }
}
