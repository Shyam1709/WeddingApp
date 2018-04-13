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


@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
  AdminComponent,
  HeaderComponent,
  FooterComponent
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
