import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateUserService } from '../../../services/authenticate-user.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	public showNav:boolean;
	constructor(public authenticateUserService: AuthenticateUserService, public router: Router) { }

	ngOnInit() {
		this.showNav=true;
	}
		logout(){
		this.authenticateUserService.logout();
	}


}
