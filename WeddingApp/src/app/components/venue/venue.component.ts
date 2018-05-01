import { Component, OnInit } from '@angular/core';
import { WeddingApiService } from '../../services/wedding-api.service';
import {AuthenticateUserService } from '../../services/authenticate-user.service';

import { AppConfig } from '../../config/config.constant';
import { CITY } from '../shared/List/citylist';
import { TYPE } from '../shared/List/type';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css'],
  providers:[WeddingApiService]
})
export class VenueComponent implements OnInit {
  public venue: any=[];
  public imageUrl=AppConfig.getimageUrl;
  public errorMsg="";
  public showerror : boolean = false;
  public cities=[];
  public Venuetypes=[];
  public filters=[];
  public booking:any={};
  public id:any;
  constructor(private weddingApiService: WeddingApiService, private authenticateUserService:AuthenticateUserService) { 
    this.cities=CITY;
    this.Venuetypes=TYPE;
  }
  ngOnInit() {
    this.getvenueDetails();
  }

//to search venue by name
search(name){
  this.weddingApiService.searchByName(name).subscribe((res)=>{
    this.venue=res;
  },(error:any)=>{
  })
}

//to search venue by city
searchCity(city){
  this.weddingApiService.searchByCity(city).subscribe((res)=>{
    this.venue=res;
    this.filters.push(res);
  },(error:any)=>{
    console.log(error);
  })
}

//to search venue by type
searchVenueType(venuetype){
  this.weddingApiService.searchByType(venuetype).subscribe((res)=>{
    this.venue=res;
    this.filters.push(res);

  },(error:any)=>{
   
  })
}

//sending booking details on backend
 onSubmit(booking) {
booking.id=this.id;
this.authenticateUserService.onSubmit(booking).subscribe((res)=>{

}),(error)=>{

}
  }

send(id){
this.id=id;
  this.booking={};
}
// enquiry form
enquiry(){

}

//remove search filter on click
remove(i){
   if(this.filters.length > 0){
      this.filters.pop();
    }
}


 // get data of venue details from database
 getvenueDetails() {
   this.weddingApiService.getvenueDetails().subscribe((res) =>{
    // this.filters.push(res);
     this.venue=res;
     // this.venue=this.filters[Array.length-1];
   },(error:any)=>{
     this.errorMsg = error.statusText;
     this.showerror = true;
   })
 }

}
