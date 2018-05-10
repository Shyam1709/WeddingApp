import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from '../../services/authenticate-user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public errorMsg="";
  public showerror : boolean = false;
  private userid;
  private bookingDetails:any=[];
  constructor(private authenticateUserService: AuthenticateUserService) {
  }

  ngOnInit() {
    this.userid=JSON.parse(localStorage.getItem('currentUser'))['Id'];
    this.authenticateUserService.getuserDetails(this.userid).subscribe((response)=>{
     this.bookingDetails=response.bookingres;
      console.log(response.bookingres);
    },(error)=>{
      this.errorMsg = error.statusText;
      this.showerror = true;
    })
  }

}
