import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './MyComponents/home-component/home-component.component';
import { AboutComponentComponent } from './MyComponents/about-component/about-component.component';
import { ContactComponentComponent } from './MyComponents/contact-component/contact-component.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';9999
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Component} from '@angular/core';
import {FormControl, Validators,ReactiveFormsModule} from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import { ProductsComponentComponent } from './MyComponents/products-component/products-component.component';

@NgModule({
  declarations: [//This is where the required external modules are declared
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    ContactComponentComponent,
    ProductsComponentComponent
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
