import { Component, EventEmitter } from '@angular/core';
import { AuthenticateUserService } from './services/authenticate-user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	public log : boolean=false;
	public role;
	public headerToken: string;
	constructor(private router:Router,private authenticateUserService: AuthenticateUserService){
		if(localStorage.getItem('currentUser')!=null && authenticateUserService.role=="user"){
			this.log=true; 
			this.router.navigate['/userprofile'];
    // this.headerToken = JSON.parse(localStorage.getItem('currentUser'))['token'];
  }
  else if(localStorage.getItem('currentUser')!=null && authenticateUserService.role=="admin"){
  	this.router.navigate(['/dashboard']);
  }else{
  	this.log=false;
  }

}
}
