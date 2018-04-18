import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
 private form:FormGroup;
 public formData:{};
 public checkPassword:boolean=false;

   constructor() { 
}
ngOnInit(){
  this.form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)] ), 
        email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
        password: new FormControl('', [Validators.required,Validators.minLength(6), Validators.maxLength(10)]),
        });
  this.checkPassword=false;
}

check(value:string){
if(this.form.get('password').value==value){
this.checkPassword=false;
}
else
this.checkPassword=true;
}
 onSubmit(form){
    	console.log(form);
    }   


}