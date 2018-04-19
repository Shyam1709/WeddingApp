import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WeddingApiService } from '../../../services/wedding-api.service';

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
 constructor(private weddingApiService :WeddingApiService) { 
}
ngOnInit(){
  this.form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)] ), 
        email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
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
   this.weddingApiService.register(form.value).subscribe((res)=>{      
        res={};
    },(error:any)=>{
      this.errorMsg = error.statusText;
      this.showError = true;
    	console.log(form.value);
    })   
}
}