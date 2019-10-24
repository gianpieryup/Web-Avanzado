import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends BaseService {

  async postUsuarios(obj){
    try {
      this.setEndPoint('registro');
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }
  async loginUsuario(obj){
    try {
      this.setEndPoint('auth/login');
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }
}
