import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './MyComponents/about-component/about-component.component';
import { HomeComponentComponent } from './MyComponents/home-component/home-component.component';
import { ContactComponentComponent } from './MyComponents/contact-component/contact-component.component';
import { ProductsComponentComponent } from './MyComponents/products-component/products-component.component';

const routes: Routes = [
  {
    component:AboutComponentComponent,
    path:'aboutcomponent'
  },
  {
    component:HomeComponentComponent,
    path:'homecomponent'
  },
  {
    component:ContactComponentComponent,
    path:'contactcomponent'
  },
  {
    component:ProductsComponentComponent,
    path:'productscomponent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
