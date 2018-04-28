import { Component, EventEmitter } from '@angular/core';
import { AuthenticateUserService } from './services/authenticate-user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	public login : EventEmitter<any> = new EventEmitter();
	public role;
	public headerToken: string;
	constructor(private authenticateUserService: AuthenticateUserService, private router: Router){
		if(JSON.parse(localStorage.getItem('currentUser'))['token']){
			this.headerToken = JSON.parse(localStorage.getItem('currentUser'))['token'];
		this.authenticateUserService.getRole(this.headerToken).subscribe((role:any)=>{
			this.role =role.type;
			console.log(this.role);
		});
		if(this.role=="admin"){
      this.router.navigate(['/dashboard']);
		}
		else if(this.role=="user"){
			this.login.emit(true);
			this.router.navigate(['/userProfile']);
		}


	}else{
		this.router.navigate(['/login']);
	}
}
}
