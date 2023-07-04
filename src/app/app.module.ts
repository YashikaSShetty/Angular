import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './MyComponents/home-component/home-component.component';
import { AboutComponentComponent } from './MyComponents/about-component/about-component.component';
import { ContactComponentComponent } from './MyComponents/contact-component/contact-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
