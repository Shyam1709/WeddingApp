import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

import { HomeComponent} from './components/home/home.component';


const routes :Routes = [
{path: '', redirectTo:'/home',pathMatch:'full'},
{path: 'home', component:HomeComponent},
{path: 'admin', component:AdminComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes),
	CommonModule
	],
	exports:[RouterModule],
	declarations: []
})

export class AppRoutingModule {}
