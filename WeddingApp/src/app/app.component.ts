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
	constructor(){
	
}
}
