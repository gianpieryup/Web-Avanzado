import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarritoService extends BaseService {

  async getCarrito() {
    // /productos
    try {
      this.setEndPoint('carrito/'+environment.id_cliente);//El id_cliente es global y no importa |podria ponerle 1 y es igual no lo uso
      return this.get();
    } catch(error) {
      throw error;
    }
  }

  async cargarCarrito(obj) {
    // /productos
    try {
      this.setEndPoint('carrito');//aca usa el enviroment.id_cliente por que va por post
      return this.post(obj);
    } catch(error) {
      throw error;
    }
  }
}
