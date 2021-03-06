import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { VenueComponent } from './components/venue/venue.component';
import { CateringComponent } from './components/weddingServices/catering/catering.component';
import { LoginComponent } from './components/authenticate/login/login.component';
import { RegisterComponent } from './components/authenticate/register/register.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HomeComponent} from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthenticateUserService} from './services/authenticate-user.service';
import { RoleGuard } from './services/role-guard.guard';


const routes :Routes = [
{path: '', redirectTo:'/home',pathMatch:'full'},
{path: 'home', component:HomeComponent},
{path: 'venue', component:VenueComponent },
{path: 'catering', component:CateringComponent },
{path: 'login', component:LoginComponent },
{path: 'register', component:RegisterComponent },
{path: 'userProfile' , component:UserProfileComponent, canActivate:[AuthenticateUserService]},
{path: 'admin', component:AdminComponent, canActivate:[RoleGuard], data: { 
  expectedRole: 'admin'}} ,
{path: 'dashboard', component: DashboardComponent, canActivate:[RoleGuard], data: { 
  expectedRole: 'admin'} }
];











// path: '',
// canActivate:[AuthenticateUserService],
// children :
// [
// {path: '', redirectTo:'/home',pathMatch:'full'},
// {path: 'home', component:HomeComponent},
// {path: 'venue', component:VenueComponent },
// {path: 'catering', component:CateringComponent },
// {path: 'dashboard', component:DashboardComponent }
// ],
// {path: 'login', component:LoginComponent },
// {path: 'admin', component:AdminComponent },
// {path: 'register', component:RegisterComponent },
// };

@NgModule({
	imports: [RouterModule.forRoot(routes),
	CommonModule
	],
	exports:[RouterModule],
	declarations: []
})

export class AppRoutingModule {




}
