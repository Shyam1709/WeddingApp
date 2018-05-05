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

  constructor(private authenticateUserService: AuthenticateUserService) {
 this.authenticateUserService.getuserDetails().subscribe((res)=>{
  }),(error)=>{
    this.errorMsg = error.statusText;
    this.showerror = true;
  }
   }

  ngOnInit() {
  }

}
