import { UsuariosService } from './../../services/usuarios.service';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  form : FormGroup;
  password : FormGroup;
  show_form : boolean;//un condicional para que me muestre la informacion del ususario
  habilitar_password : boolean = false;
  historial : any [] = [];

  showPassword() {
    this.habilitar_password = true;
    this.password = new FormGroup({
    'password_usuario' : new FormControl('', [Validators.required])
    })
  }
  
  async cambiarPassword() {
    let actualizar_pwd = await this.usuariosService.putPassword(this.password.value);
    console.log(actualizar_pwd);
  }

  constructor(private usuariosService : UsuariosService, private rooter : Router) { }

  async ngOnInit() {
    let data : any = await this.usuariosService.getUsuario() ;
    console.log(data);
    if(data.status == 'ok') {
      this.show_form = true;
    } else {
      this.show_form = false;
    }
    this.form = new FormGroup({
      'nombre_usuario' : new FormControl(data.data[0].nombre_usuario, [Validators.required]),
      'apellido_usuario' : new FormControl(data.data[0].apellido_usuario, [Validators.required]),
      'telefono_usuario' : new FormControl(data.data[0].telefono_usuario, [Validators.required])
    })

    //Historial de compras
    // let respuesta_server : any = await this.usuariosService.getHistorial() ; // get base service
    // if(respuesta_server.status === 'ok') {
    //   this.historial = respuesta_server.data;
    //   console.log(this.historial);
    // }
  }

  async putUsuario(){
    let actualizar_datos = await this.usuariosService.putDatos(this.form.value);
    console.log(actualizar_datos);
    //Hay que actualizar el (localstorage)
    console.log(this.form.value.nombre_usuario);
    localStorage.setItem('nombre',this.form.value.nombre_usuario )
    this.rooter.navigate(['home']);
  }


}
