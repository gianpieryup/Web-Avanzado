import { Injectable } from '@angular/core';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class CompraService extends BaseService{
  async cerrarCarrito(obj) {
    // /productos
    try {
      this.setEndPoint('compra');//aca usa el enviroment.id_cliente por que va por post
      return this.post(obj);
    } catch(error) {
      throw error;
    }
  }
}
