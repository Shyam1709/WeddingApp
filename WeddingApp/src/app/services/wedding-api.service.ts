import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig }from '../config/config.constant';


@Injectable()
export class WeddingApiService {
	private headers = new Headers({ 'Content-Type': 'application/json' });

	constructor(private http:Http) { 
	}

//Call rest api to register user into user database
register(registerDetails){ 
  console.log(registerDetails);
  return this.http.post(AppConfig.saveuserUrl,registerDetails, {headers: this.headers})
  .map(data =>data.json(),
    (error:any) =>this.handleError(error));
}


//Call rest api to login user into user database
loginUser(loginDetails){ 
  return this.http.post(AppConfig.validateuserUrl,loginDetails, {headers: this.headers})
  .map(data =>data.json(),
    (error:any) =>this.handleError(error));
}

// Call rest api to get venue details from database
getvenueDetails(){ 
  return this.http.get(AppConfig.getvenueUrl)
  .map(data => data.json(),
    (error: any)=>this.handleError(error));
}

// Call rest api to update  weddingApp data into database
updateDetails(uploadData){ 
	console.log(uploadData);
	return this.http.post(AppConfig.uploadvenueUrl,uploadData, {headers: this.headers})
	.map(data => data.json(),
		(error: any)=>this.handleError(error));
}

// Call rest api to update  Catering Provider data into database
updateCatering(updateCatering){ 
  console.log(updateCatering);
  return this.http.post(AppConfig.postcateringUrl,updateCatering, {headers: this.headers})
  .map(data => data.json(),
    (error: any)=>this.handleError(error));
}

// Call rest api to get Catering Provider data from database
getCatering(){ 
 // console.log(cateringData);
 return this.http.get(AppConfig.getcateringUrl)
 .map(cateringData => cateringData.json(),
   (error: any)=>this.handleError(error));
}



// Handle errors
private handleError(error: Response){
  return Observable.throw(error);
}

}
