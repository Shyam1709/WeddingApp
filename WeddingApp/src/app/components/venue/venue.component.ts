import { Component, OnInit } from '@angular/core';
import { WeddingApiService } from '../../services/wedding-api.service';
import { AppConfig }from '../../config/config.constant';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css'],
    providers:[WeddingApiService]
})
export class VenueComponent implements OnInit {
 public venue: any=[];
 public imageUrl=AppConfig.getimageUrl;
  constructor(private weddingApiService: WeddingApiService) { }

  ngOnInit() {
    this.getvenueDetails();
  }

 // get data of venue details from database
  getvenueDetails() {
    this.weddingApiService.getvenueDetails().subscribe((res) =>{
      this.venue = res;
      console.log(this.venue);
    },(error:any)=>{
console.log(error);
    })
  }

}
