import { Component, OnInit,ViewChild } from '@angular/core';
import { WeddingApiService } from '../../services/wedding-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthenticateUserService } from '../../services/authenticate-user.service';

import { Router } from '@angular/router';
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
  @ViewChild('closeModal') closeModal; 
  public venue: any=[];
  public enquiry: any={};
  public imageUrl=AppConfig.getimageUrl;
  public errorMsg="";
  private form:FormGroup;
  public showerror : boolean = false;
  public cities=[];
  public Venuetypes=[];
  public filters=[];
  private validationMsg;
  public booking:any={};
  public enquiryData:any={};
  public id:any;
  private searchContent: any;
  constructor(private weddingApiService: WeddingApiService,
    private authenticateUserService:AuthenticateUserService,
    private router:Router) { 
    this.cities=CITY;
    this.Venuetypes=TYPE;
  }
  ngOnInit() {
    this.getvenueDetails();

      //form for enquiry details
      this.form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern("[A-Za-z]*$")] ), 
        email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
        contactNo: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
        date: new FormControl('', [Validators.required]),
        query_message: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)] ),
      });


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
enquirydetails(form){
  if(form.status==='INVALID'){
    this.validationMsg="Please Fill All The Fields Properly!";
    return false;
  }
   let userid=JSON.parse(localStorage.getItem('currentUser'))['Id'];
  this.enquiryData.userId=userid;
   console.log("show" + form.value);
  this.enquiryData=form.value;
  this.authenticateUserService.sendenquiry(this.enquiryData).subscribe((res)=>{
    this.validationMsg="";
    this.closeModal.nativeElement.click();
    Swal({
      text: "Enquiry Details Send Successfully",
      showConfirmButton: false,
      type: 'success',
      timer:1700,
    }) 
    form.reset();
  },(error:any)=>{
        Swal({
      text: error,
      showConfirmButton: false,
      type: 'warning',
      timer:1500,
    })
  })
}


//to reset enquiry form
reset(form){
  form.reset();
  this.validationMsg="";  
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
  if(localStorage.getItem('currentUser')==null){
    this.router.navigate(['/login']);
    return;
  }
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
