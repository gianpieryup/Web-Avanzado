import { Component, OnInit } from '@angular/core';
import { ModalManager } from 'ngb-modal';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalR : any;
  operacion : boolean;

  constructor(private modalServices : ModalManager, private navService : NavService ) { }
  //
  ngOnInit() {
  }
  comprar(){
    this.navService.carritoCargado$.emit(true);//puedes definir que tipo de dato devolveras
    localStorage.setItem('carrito',"true");
  }
  cargar(){
    this.operacion = true;
    //post al server
    //respuesta del server
    // habilitamos el botom
  }
  open(mod){
    this.modalR = this.modalServices.open(mod)
  }
}
