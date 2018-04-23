import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WeddingApiService } from '../../../services/wedding-api.service';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [WeddingApiService]
})
export class RegisterComponent implements OnInit{
 private form:FormGroup;
 public formData:{};
 public checkPassword:boolean=false;
 public errorMsg ='';
 public showError : boolean = false;
 constructor(private weddingApiService :WeddingApiService, private router:Router) { 
}
ngOnInit(){
  this.form = new FormGroup({
        userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)] ), 
        emailId: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
        password: new FormControl('', [Validators.required,Validators.minLength(6), Validators.maxLength(10)]),
        });
  this.checkPassword=false;
}

// to check password and confirm password match or not
check(value:string){
if(this.form.get('password').value==value){
this.checkPassword=false;
}
else
this.checkPassword=true;
}

//to send user details to the database
 onSubmit(form){
   console.log(form.value);
   this.weddingApiService.register(form.value).subscribe((res)=>{      
     Swal("Registered Successfuly", "", "success")
  this.router.navigate(['/login']);
    },(error:any)=>{
      this.errorMsg = error.statusText;
      this.showError = true;
    	console.log(form.value);
    })   
}
}