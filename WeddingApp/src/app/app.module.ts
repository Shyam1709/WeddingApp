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
import { CateringComponent } from './components/weddingServices/catering/catering.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import {  AuthenticateUserService } from './services/authenticate-user.service';
import { RoleGuard } from './services/role-guard.guard';

import { UserProfileComponent } from './components/user-profile/user-profile.component';

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
  DashboardComponent,
  UserProfileComponent,
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpModule,
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [AuthenticateUserService, RoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
