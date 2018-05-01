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
	constructor(){
	 if(localStorage.getItem('currentUser')!=null){
     this.log=true;
    // this.headerToken = JSON.parse(localStorage.getItem('currentUser'))['token'];
    // this.headers = new Headers({'Authorization' : this.headerToken});
  }
  else{
    this.log=false;
  }
}
}
