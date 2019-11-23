import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {ModalModule} from 'ngb-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { UploadComponent } from './components/upload/upload.component';
import { ModalComponent } from './components/modal/modal.component';
//import { LazyComponent } from './components/lazy/lazy.component';// no se si el lazy debe estarcomentado

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    ProductoComponent,
    AdminComponent,
    NavbarComponent,
    FooterComponent,
    RegistroComponent,
    LoginComponent,
    PerfilComponent,
    CarritoComponent,
    UploadComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
