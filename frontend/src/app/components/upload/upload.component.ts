import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { UploadService } from 'src/app/services/upload.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  comentario : string = '';
  selectedFile = null;
  provincias = ['sañta','gugui'];
  provinciaElegida : string = '0';
  constructor(private upload :  UploadService) { }

  ngOnInit() {
  }
  select(val){
    console.log(val);
  }

  onFileSelected(valor){
    console.log(valor);
    this.selectedFile= valor.target.files[0];
  }
  async subir(){
    //paquete de datos: que soporte archivos multimedia
    const fd = new FormData();
    //append('key','value')
    fd.append('comentario',this.comentario)
    // 'file','imagen(es un value qu es un string de cierta forma)','name'
    //el ultimo parametro es opcional, el nombre de la imagen 
    fd.append('file',this.selectedFile,this.selectedFile.name)
    fd.append('provincia',this.provinciaElegida)

    let rta = await this.upload.postData(fd)
    console.log(rta);
    
  }
}
