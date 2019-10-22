import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProductoComponent } from 'src/app/components/producto/producto.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'producto/:id', component:ProductoComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
