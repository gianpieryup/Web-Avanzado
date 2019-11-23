import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login : boolean;
  nombre : string = '';
  carritoCargado : boolean;
  constructor(private router : Router, private navService : NavService) { }

  ngOnInit() {
    if(localStorage.getItem('carrito') != null) {
      this.carritoCargado =true
    }
    this.navService.carritoCargado$.subscribe(dato =>{
      if(dato){
        this.carritoCargado = true
      }else{
        this.carritoCargado = false
      }
    })
    if(localStorage.getItem('usuario') != null) {
      this.nombre = localStorage.getItem('nombre');//si cambio el nombre esto se rompe habria que cambiarlo tambien
      this.login = true;
    } else {
      this.login = false;
    }
  }
  logout() {
    console.log("entro a logout");
    localStorage.clear();
    this.login = false;
    this.router.navigate(['home'])
    // location.reload();
  }

}