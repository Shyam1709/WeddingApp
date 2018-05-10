import { Component, OnInit } from '@angular/core';
import { WeddingApiService } from '../../services/wedding-api.service';
import {AuthenticateUserService } from '../../services/authenticate-user.service';

import { AppConfig } from '../../config/config.constant';
import { CITY } from '../shared/List/citylist';
import { TYPE } from '../shared/List/type';
import { NgForm } from '@angular/forms';

import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css'],
  providers:[WeddingApiService]
})
export class VenueComponent implements OnInit {
  public venue: any=[];
  public enquiry: any={};
  public imageUrl=AppConfig.getimageUrl;
  public errorMsg="";
  public showerror : boolean = false;
  public cities=[];
  public Venuetypes=[];
  public filters=[];
  public booking:any={};
  public id:any;
  private searchContent: any;
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
    Swal({
      text: "City already selected",
      showConfirmButton: false,
      type: 'warning',
      timer:1500,
    }) 
    return;
  }
  this.filters.push(city);
  this.weddingApiService.searchByCity(this.filters).subscribe((res)=>{
    this.venue=res;
  },(error:any)=>{
    this.errorMsg = error.statusText;
    this.showerror = true;
  })
}

// send enquiry details to the database
enquirydetails(enquiry){
// this.weddingApiService.sendenquiry().subscribe((res)=>{
//   console.log(res);
// },(error:any)=>{
//   console.log(error);
// })
}


//sending booking details on backend
onSubmit(booking) {
  booking.venueId=this.id;
  booking.userId= JSON.parse(localStorage.getItem('currentUser'))['Id'];
  this.authenticateUserService.onSubmit(booking).subscribe((res)=>{
    Swal({
      text: "Venue Booked Successfully",
      showConfirmButton: false,
      type: 'success',
      timer:1500,
    }) 
    console.log(booking);
  },(error)=>{
    this.errorMsg = error.statusText;
    this.showerror = true;
  })
}

// to clear all fields after submit
send(id){
  this.id=id;
  this.booking={};
}


//remove search filter on click
remove(i){
  if(this.filters.length > 0){
    this.searchContent=this.filters[i];
    console.log(this.searchContent);
    this.filters.splice(i,1);
    console.log(this.filters);
    this.weddingApiService.searchByCity(this.filters).subscribe((res)=>{
      this.venue=res; 
    }),(error)=>{
      this.errorMsg = error.statusText;
      this.showerror = true;
      console.log(error);
    }
  }}

 // get data of venue details from database
 getvenueDetails() {
   this.weddingApiService.getvenueDetails().subscribe((res) =>{
     this.venue=res;
   },(error:any)=>{
     this.errorMsg = error.statusText;
     this.showerror = true;
   })
 }

}
