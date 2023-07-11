import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './MyComponents/about-component/about-component.component';
import { HomeComponentComponent } from './MyComponents/home-component/home-component.component';
import { ContactComponentComponent } from './MyComponents/contact-component/contact-component.component';
import { ProductsComponentComponent } from './MyComponents/products-component/products-component.component';
import { ProductDetailsComponentComponent } from './MyComponents/product-details-component/product-details-component.component';
import { RegistrationComponentComponent } from './MyComponents/registration-component/registration-component.component';
import { LoginComponentComponent } from './MyComponents/login-component/login-component.component';
import { FeedbackComponentComponent } from './MyComponents/feedback-component/feedback-component.component';
import { AddressComponentComponent } from './MyComponents/address-component/address-component.component';
import { CounterComponentComponent } from './MyComponents/counter-component/counter-component.component';
import { SearchComponentComponent } from './MyComponents/search-component/search-component.component';

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
  },
  { component: ProductDetailsComponentComponent,
    path: 'product-details-component/:id' 
  },
  {
    component:RegistrationComponentComponent,
    path:'registrationcomponent'
  },
  {
    component:LoginComponentComponent,
    path:'login-component'
  },
  {
    component:FeedbackComponentComponent,
    path:'feedbackcomponent'
  },
  {
    component:AddressComponentComponent,
    path:'addresscomponent'
  },
  {
    component:CounterComponentComponent,
    path:'countercomponent'
  },
  {
    component:SearchComponentComponent,
    path:'searchcomponent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
