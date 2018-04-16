import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { VenueComponent } from './components/venue/venue.component';
import { LoginComponent } from './components/authenticate/login/login.component';
import { RegisterComponent } from './components/authenticate/register/register.component';


import { HomeComponent} from './components/home/home.component';


const routes :Routes = [
{path: '', redirectTo:'/home',pathMatch:'full'},
{path: 'home', component:HomeComponent},
{path: 'admin', component:AdminComponent },
{path: 'venue', component:VenueComponent },
{path: 'login', component:LoginComponent },
{path: 'register', component:RegisterComponent }

];

@NgModule({
	imports: [RouterModule.forRoot(routes),
	CommonModule
	],
	exports:[RouterModule],
	declarations: []
})

export class AppRoutingModule {}
