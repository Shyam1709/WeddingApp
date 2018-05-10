import { Injectable,EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router,CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
import { AppConfig }from '../config/config.constant';

@Injectable()
export class AuthenticateUserService implements CanActivate {

	private token:any;
	public login : EventEmitter<any> = new EventEmitter();
	public headerToken;
  public role="user";
  public name;
  private headers;
  public id;
  constructor(private http:Http,private router: Router) {
    if(localStorage.getItem('currentUser')!=null){
      this.headerToken = JSON.parse(localStorage.getItem('currentUser'))['token'];
   //this.headers = new Headers({'Authorization' : this.headerToken})
   this.login.emit(true);
 }else{
   this.login.emit(false);
 }
 this.headers= new Headers({ 'Content-Type': 'application/json' });
}


//Call rest api to login user into user database using token authentication
loginUser(loginDetails){ 
	return this.http.post(AppConfig.validateuserUrl,loginDetails,{headers:this.headers})
	.map((response:Response) =>{
		this.token=response.json().token;
    this.role=response.json().role;
    this.name=response.json().name;
    this.id=response.json().id;
    if (this.token) {
      // store username and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify({ token: this.token, userName: this.name, Id: this.id}));
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

//get user details from database on 


// to submit booking details in database
onSubmit(booking){
	 // let headers = new Headers();
  //  let t=JSON.parse(localStorage.getItem('currentUser'))['token'];
	 // headers.append('Content-Type', 'application/json; charset=utf-8');
  //  headers.append('Authorisation',t);
  //  let options=new RequestOptions({headers:headers});
  console.log(this.headerToken);
  return this.http.post(AppConfig.sendBookingDetailsUrl,booking,{headers:this.headers})
  .map(data=>data.json(),
    error=>{
      this.handleError(error);
    })
}

//to check whether user is logged in or not
isLoggedIn(){
  if(JSON.parse(localStorage.getItem('currentUser'))){
    return true;
  }
  else{
    return false;
  }
}

//get booking details from database
getuserDetails(userid){
  return this.http.get(AppConfig.getBookingDetailsUrl+userid,{headers:this.headers})
  .map((data)=>{
   return data.json();
  },
  error=>{
    this.handleError(error);
  })
}



// to check if user is logged in
canActivate(){
  if(!this.isLoggedIn()){
    this.router.navigate(['/','login']);
    return false;
  }
  if(this.isLoggedIn && this.role=='user'){
    return true;
  }
  if(this.isLoggedIn && this.role=='admin'){
    this.router.navigate(['/','dashboard']);
    return true;
  }
  this.router.navigate(['/','login']);
  return false;
}

getRole(){
	return this.http.get((AppConfig.getRoleUrl))
	.map((data)=>{
		data.json();
	},
	(error:any) =>this.handleError(error));
}

// to logout the user from website
logout() {
     // clear token remove user from local storage to log user out
     this.login.emit(false);
     this.token = null;
     localStorage.removeItem('currentUser');
     this.router.navigate(['/','login']);
   }



//Call rest api to register user into user database

register(registerDetails){ 
	return this.http.post(AppConfig.saveuserUrl,registerDetails)
	.map(data =>data.json(),
		(error:any) =>this.handleError(error));
}


// Handle errors
private handleError(error){
	return Observable.throw(error);
}

}




