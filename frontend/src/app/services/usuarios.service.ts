//MIO:  import { BaseService } from 'src/app/services/base.service';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';



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
  async getUsuario() {
    try {
      this.setEndPoint('usuarios');
      return this.get();
    } catch (error) {
      console.log("Error en la funcion getUsuario() ");
      throw error;
    }
  }
  async putPassword(obj) {
    this.setEndPoint('usuarios/changepassword');//agregar unas rutas al backend
    return this.put(obj);
  }

  async putDatos(obj) {
    this.setEndPoint('usuarios/changedatos');//agregar unas rutas al backend
    return this.put(obj);
  }

  async getHistorial() {
    try {
      this.setEndPoint('usuarios/historial');//agregar unas rutas al backend
      return this.get();
    } catch (error) {
      throw error;
    }

  }

}
