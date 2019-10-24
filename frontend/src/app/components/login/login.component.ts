import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  constructor(private usuariosService : UsuariosService) { }//dentro del constrcuctor inicializalo

  ngOnInit() {
    this.form =new FormGroup({
    'mail' : new FormControl('',[Validators.required]),
    'password' : new FormControl('',[Validators.required])
    })
  }
  async login(){
    let user_ok : any = await this.usuariosService.loginUsuario(this.form.value)
    if(user_ok.status != "invalid"){//=="ok"
      console.log("El JWT: ",user_ok.JWT);
      
    }else{
      console.log("Usuario incorrecto");
      
    }
  }

}
