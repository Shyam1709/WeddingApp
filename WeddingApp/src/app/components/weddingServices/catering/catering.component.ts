import { Component, OnInit,ViewChild  } from '@angular/core';
import { AppConfig} from '../../../config/config.constant';
import { WeddingApiService } from '../../../services/wedding-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CITY } from '../../shared/List/citylist';
import {AuthenticateUserService } from '../../../services/authenticate-user.service';

import  Swal  from 'sweetalert2';

@Component({
	selector: 'app-catering',
	templateUrl: './catering.component.html',
	styleUrls: ['./catering.component.css'],
	providers:[WeddingApiService]
})
export class CateringComponent implements OnInit {
	@ViewChild('closeModal') closeModal; 
	//public bgImage=AppConfig.localImg;
	public imageUrl=AppConfig.getimageUrl; 
	public booking:any={};
	public id:any;
	public errorMsg="";
	private validationMsg;
	public showerror : boolean = false;
	public cateringProvider:any=[];
	public enquiryData:any={};
	public cities=[];
	private form:FormGroup;

	constructor(private weddingApiService: WeddingApiService,
		private authenticateUserService:AuthenticateUserService,
		private router:Router) {
		this.cities=CITY;
	}
	
	ngOnInit() {
		this.getcateringDetails();

		this.form = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern("[A-Za-z]*$")] ), 
			email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
			contactNo: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
			date: new FormControl('', [Validators.required]),
			query_message: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)] ),
		});
	}

   // get data of catering Provider details from database
   getcateringDetails() {
   	this.weddingApiService.getCatering().subscribe((res) =>{
   		this.cateringProvider = res;
   	},(error:any)=>{
   		
   	})
   }

  //sending booking details on backend
  onSubmit(booking) {
  	booking.cateringId=this.id;
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

// to clear all fields after submit
send(id){
  if(localStorage.getItem('currentUser')==null){
    this.router.navigate(['/login']);
    return;
  }
  this.id=id;
  this.booking={};
}

   //to reset enquiry form
   reset(form){
   	form.reset();
   	this.validationMsg="";  
   }

 }
