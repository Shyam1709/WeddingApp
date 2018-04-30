import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig }from '../config/config.constant';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class WeddingApiService {

	constructor( private http:Http ) { 

	}

  private headers= new Headers({ 'Content-Type': 'application/json' });


// Call rest api to get venue details from database
getvenueDetails(){ 
  return this.http.get(AppConfig.getvenueUrl, {headers: this.headers}) 
  .map(data => data.json(),
    (error: any)=>this.handleError(error));
}

// Call rest api to get wedding venue details from database by name
searchByName(name){ 
	return this.http.get(AppConfig.searchByNameUrl+name, {headers: this.headers})
	.map(data => data.json(),
		(error: any)=>this.handleError(error));
}

// Call rest api to get wedding venue details from database by city
searchByCity(city){ 
  return this.http.get(AppConfig.searchByCityUrl+city, {headers: this.headers})
  .map(data => data.json(),
    (error: any)=>this.handleError(error));
}

// Call rest api to get wedding venue details from database by venuetype
searchByType(venuetype){ 
  return this.http.get(AppConfig.searchByTypeUrl+venuetype, {headers: this.headers})
  .map(data => data.json(),
    (error: any)=>this.handleError(error));
}

// Call rest api to search  wedding venue by name from database
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
