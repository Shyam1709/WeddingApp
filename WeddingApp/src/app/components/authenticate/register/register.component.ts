import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
 private form:FormGroup;
  constructor(private fb: FormBuilder) { 
this.form=fb.group({
  name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
  email: ['',[Validators.required, Validators.email]],
  password: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
  confirmpassword: ['',[Validators.required]]
})
}
}