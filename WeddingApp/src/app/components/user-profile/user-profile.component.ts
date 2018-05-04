import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from '../../services/authenticate-user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private authenticateUserService: AuthenticateUserService) {
 this.authenticateUserService.getuserDetails().subscribe((res)=>{
    console.log(booking);
  }),(error)=>{
    this.errorMsg = error.statusText;
    this.showerror = true;
  }
   }

  ngOnInit() {
  }

}
