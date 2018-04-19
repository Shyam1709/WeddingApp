import { Component, OnInit } from '@angular/core';
import { WeddingApiService } from '../../../services/wedding-api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [WeddingApiService]
})
export class LoginComponent implements OnInit {
	public errorMsg ='';
	public showError : boolean = false;
	public er: any={};
	public loginDetails:any={};
  constructor(private weddingApiService : WeddingApiService, private router: Router) { }

  ngOnInit() {
  }

// to send login credentials to the server for authentication
login(loginDetails){
		this.weddingApiService.loginUser(loginDetails).subscribe((res)=>{			
			this.router.navigate(['/home']);
		},(error:any)=>{
			this.er=JSON.parse(error._body);
			alert(this.er.error);
			this.errorMsg = error.statusText;
			this.showError = true;
		})

	}
}


