import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from '../../../services/authenticate-user.service';
import { Router } from "@angular/router";
import {FormsModule} from '@angular/forms';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public errorMsg ='';
	public showError : boolean = false;
	public er:any={};
	public loginDetails:any={};
  public role:any={};
  constructor(private authenticateUserService : AuthenticateUserService, private router: Router) { }

  ngOnInit() {
  }

// to send login credentials to the server for authentication
login(loginDetails){
  this.authenticateUserService.loginUser(loginDetails).subscribe((res)=>{
    this.router.navigate(['/userProfile']);
  },(error:any)=>{
    console.log(error);
    this.er=JSON.parse(error._body);
    Swal({
      title: 'LoginFailed',
      text: this.er.error,
      showConfirmButton: false,
      type: 'warning',
      timer: 1500
    })
    this.errorMsg = error.statusText;
    this.showError = true;
  })

}
}


