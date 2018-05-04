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
    this.errorMsg = error.statusText;
    this.showerror = true;
  })
}

//to search venue by city
searchCity(city){
  if(this.filters.includes(city)){
  return false;
  }
  this.filters.push(city);
  this.weddingApiService.searchByCity(this.filters).subscribe((res)=>{
    this.venue=res;
  },(error:any)=>{
    this.errorMsg = error.statusText;
    this.showerror = true;
  })
}

//to search venue by type
searchVenueType(venuetype){
  this.weddingApiService.searchByType(venuetype).subscribe((res)=>{
    this.venue=res;
    this.filters.push(res);

  },(error:any)=>{
    this.errorMsg = error.statusText;
    this.showerror = true;
  })
}

//sending booking details on backend
onSubmit(booking) {
  booking.id=this.id;
  this.authenticateUserService.onSubmit(booking).subscribe((res)=>{
    console.log(res);
  }),(error)=>{
    this.errorMsg = error.statusText;
    this.showerror = true;
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
    this.filters.splice(i,1);
    console.log(this.filters);
    this.weddingApiService.searchByCity(this.filters).subscribe((res)=>{
      this.venue=res; 
    }),(error)=>{
      this.errorMsg = error.statusText;
      this.showerror = true;
    }
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
