import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateUserService } from '../../../services/authenticate-user.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	public isLogin :boolean = false;
	
	constructor(private router: Router,private authenticateUserService: AuthenticateUserService ) {
		this.authenticateUserService.login.subscribe((login:any)=>{
			this.isLogin=login;
		});
	}

	ngOnInit() {
	}

	logout(){
		this.router.navigate(['/home']);
		this.authenticateUserService.logout();

	}

}
