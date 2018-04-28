import { Injectable,EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router,CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
import { AppConfig }from '../config/config.constant';

@Injectable()
export class AuthenticateUserService implements CanActivate {
	private headers:any;
	public token:any;
	public login : EventEmitter<any> = new EventEmitter();
	public headerToken;

	constructor(private http:Http) {
		this.headerToken = JSON.parse(localStorage.getItem('currentUser'))['token'];
	 this.headers = new Headers({'Authorization' : 'Token ' + this.headerToken});
	}


//Call rest api to login user into user database using token authentication
loginUser(loginDetails){ 
	return this.http.post(AppConfig.validateuserUrl,loginDetails)
	.map((response:Response) =>{
		this.token=response.json().token;
		if (this.token) {

      // store username and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify({ token: this.token }));

      // return true to indicate successful login
      if(JSON.parse(localStorage.getItem('currentUser'))['token']){
      	this.login.emit(true);
      	return true; 
      }
      else{
      	this.login.emit(false);
      	return false;
      }
      
    }
     return response;
  },
  (error:any) =>{
  	this.handleError(error)
  });
}


// to check if user is logged in
canActivate(){
	console.log('inside isUserLoggedin');
	return true;

	// if(localStorage.getItem('currentUser')){
	// 	this.login.emit(true);
	// 	return true;

	// }
	// else{
	// 	this.login.emit(false);
	// 	return false;

	// }
}

getRole(Token){
	return this.http.get((AppConfig.getRoleUrl),{headers: this.headers})
	.map((data)=>{
		data.json();
		console.log(this.data);
	},
		(error:any) =>this.handleError(error));
}

logout() {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.login.emit(false);
      }



//Call rest api to register user into user database
register(registerDetails){ 
	console.log(registerDetails);
	return this.http.post(AppConfig.saveuserUrl,registerDetails, {headers: this.headers})
	.map(data =>data.json(),
		(error:any) =>this.handleError(error));
}


// Handle errors
private handleError(error){
	return Observable.throw(error);
}

}






//eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZGlhQGdtYWlsLmNvbSIsInVzZXJOYW1lIjoic2hpa2doYSIsInJvbGUiOiJ1c2VyIn0.l_Dd3PI0-VnWbSi7efFWYMyLxVLksS0khCIjJD15D58-pkte0PNuxEa0b87LZL1HoJz0DjogaT61XUQqoVVnvg