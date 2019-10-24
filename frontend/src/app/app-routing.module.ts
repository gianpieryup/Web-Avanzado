import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { RegistroComponent } from 'src/app/components/registro/registro.component';
import { LoginComponent } from 'src/app/components/login/login.component';


const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'productos', component : ProductosComponent},
  {path : 'producto/:id', component : ProductoComponent},
  {path : 'registro' , component: RegistroComponent},
  {path : 'login', component: LoginComponent},
  {path : '**', redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
