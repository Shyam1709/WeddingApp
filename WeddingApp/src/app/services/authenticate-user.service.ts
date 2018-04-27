import { Injectable,EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router,CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
import { AppConfig }from '../config/config.constant';
import * as jwt_decode from "jwt-decode";

@Injectable()
export class AuthenticateUserService implements CanActivate {
	private headers = new Headers({ 'Content-Type': 'application/json' });
	public token:any;
	public login : EventEmitter<any> = new EventEmitter();
	constructor(private http:Http) { }


//Call rest api to login user into user database using token authentication
loginUser(loginDetails){ 
	return this.http.post(AppConfig.validateuserUrl,loginDetails, {headers: this.headers})
	.map((response:Response) =>{
		this.token=response.json().token;
		// let token= this.getDecodedAccessToken(this.tokenkey);
		// let emailId=token.sub;
		// console.log(emailId);
		// let userName=token.userName;
		if (this.token) {


      // store username and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify({ token: this.token }));
      // return true to indicate successful login
      return response;
    } 

  },
  (error:any) =>{this.handleError(error)
  	console.log(error);
  });
}


// to check if user is logged in
canActivate(){
	console.log('inside isUserLoggedin');
	if(localStorage.getItem('currentUser')){
		this.login.emit(true);
		return true;
		
	}
	else{
		this.login.emit(false);
		return false;
		
	}
}



logout() {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
      }


      getDecodedAccessToken(token){
      	return jwt_decode(token);

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
