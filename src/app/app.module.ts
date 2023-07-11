import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './MyComponents/home-component/home-component.component';
import { AboutComponentComponent } from './MyComponents/about-component/about-component.component';
import { ContactComponentComponent } from './MyComponents/contact-component/contact-component.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Component} from '@angular/core';
import {FormControl, Validators,ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ProductsComponentComponent } from './MyComponents/products-component/products-component.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponentComponent } from './MyComponents/product-details-component/product-details-component.component';
import { RegistrationComponentComponent } from './MyComponents/registration-component/registration-component.component';
import { LoginComponentComponent } from './MyComponents/login-component/login-component.component';
import { FeedbackComponentComponent } from './MyComponents/feedback-component/feedback-component.component';
import { AddressComponentComponent } from './MyComponents/address-component/address-component.component';
import { CounterComponentComponent } from './MyComponents/counter-component/counter-component.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { GoogleMapsModule } from '@angular/google-maps';
import { SearchComponentComponent } from './MyComponents/search-component/search-component.component';


@NgModule({
  declarations: [//This is where the required external modules are declared
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    ContactComponentComponent,
    ProductsComponentComponent,
    ProductDetailsComponentComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    FeedbackComponentComponent,
    AddressComponentComponent,
    CounterComponentComponent,
    SearchComponentComponent,
  ],
  imports: [//This is where the required external modules are imported
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    GoogleMapsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }