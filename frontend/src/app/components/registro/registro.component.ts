import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
//import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form : FormGroup;
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
  this.form =new FormGroup({
    'nombre' : new FormControl('',[Validators.required,Validators.minLength(5)]),
    'mail' : new FormControl('',[Validators.required,Validators.email]),
    'apellido' : new FormControl('',[Validators.required]),
    'telefono' : new FormControl('',[Validators.required]),
    'password' : new FormControl('',[Validators.required]),
  })
  }
  async registrar(){
    console.log(this.form.value);
    console.log(this.form.status);//si hay alguno con status invalid este botara invalid
    console.log(this.form.touched);
    console.log(this.form.get('nombre').status);
    let post_ok : any = await this.usuariosService.postUsuarios(this.form.value)
    if(post_ok.status == "ok"){
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Usuario Registrado correctamente',
        showConfirmButton: true,//true : presiona para salir| false : despues del "timer" se cierra automaticamente
      //  timer: 3500,
        backdrop: `rgba(0,0,123,0.4)
                  url("http://giphygifs.s3.amazonaws.com/media/sIIhZliB2McAo/200.gif")
                  center left
                  no-repeat
                 `
      })
    }
  }

}
