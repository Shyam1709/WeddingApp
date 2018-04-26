import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig }from '../config/config.constant';
import * as jwt_decode from "jwt-decode";

@Injectable()
export class AuthenticateUserService {
	private headers = new Headers({ 'Content-Type': 'application/json' });
  public tokenkey:any;
	constructor(private http:Http) { }


//Call rest api to login user into user database using token authentication
loginUser(loginDetails){ 
	return this.http.post(AppConfig.validateuserUrl,loginDetails, {headers: this.headers})
	.map((response:Response) =>{
		this.tokenkey=response.json().token;
		let token= this.getDecodedAccessToken(this.tokenkey);
		

	},
	(error:any) =>{this.handleError(error)
  console.log(error);
	});
}



 getDecodedAccessToken(token: string){
    try{
        return jwt_decode(token);
    }
    catch(Error){
       this.handleError(Error);
    }
  }


//Call rest api to register user into user database
register(registerDetails){ 
	console.log(registerDetails);
	return this.http.post(AppConfig.saveuserUrl,registerDetails, {headers: this.headers})
	.map(data =>data.json(),
		(error:any) =>this.handleError(error));
}


// Handle errors
private handleError(error: Response){
	return Observable.throw(error);
}

}
