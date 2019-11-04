import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  constructor(private usuariosService : UsuariosService, private rooter : Router) { }//dentro del constrcuctor inicializalo

  ngOnInit() {
    this.form =new FormGroup({
    'mail' : new FormControl('',[Validators.required]),
    'password' : new FormControl('',[Validators.required])
    })
  }
  async login(){
    let user_ok : any = await this.usuariosService.loginUsuario(this.form.value)
    if(user_ok.status != "invalid"){//=="ok"
        console.log(user_ok);
        console.log(user_ok.usuario.nombre);
        localStorage.setItem('usuario', user_ok.JWT);//Por que el JSON del back me devuelve esto
        localStorage.setItem('nombre', user_ok.usuario.nombre)
        // console.log(localStorage.getItem('usuario'))
        // localStorage (los datos permancen hasta que se borre la sesion (forzado))
        // sessionStorage (los datos permancen hasta que se cierra la pestaña)
        
        this.rooter.navigate(['home']);
      
    }else{
      console.log("Usuario incorrecto");
      
    }
    this.form.reset();
  }

}
