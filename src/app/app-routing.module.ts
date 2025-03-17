import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'navbar', 
    component: NavbarComponent, 
    children: [ 
      { path: 'products', component: ProductsComponent },
      { path: 'search', component: SearchComponent },
      { path: 'ordenes', component: OrdenesComponent }
     
    ] 
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
