import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { VenueComponent } from './components/venue/venue.component';
import { RegisterComponent } from './components/authenticate/register/register.component';
import { LoginComponent } from './components/authenticate/login/login.component';
import { CateringComponent } from './components/services/catering/catering.component';



@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
  AdminComponent,
  HeaderComponent,
  FooterComponent,
  VenueComponent,
  RegisterComponent,
  LoginComponent,
  CateringComponent,
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpModule,
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
