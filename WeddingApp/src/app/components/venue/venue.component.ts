import { Component, OnInit } from '@angular/core';
import { WeddingApiService } from '../../services/wedding-api.service';
import { AppConfig } from '../../config/config.constant';
import { CITY } from '../shared/List/citylist';
import { TYPE } from '../shared/List/type';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css'],
  providers:[WeddingApiService]
})
export class VenueComponent implements OnInit {
  public venue: any=[];
  public imageUrl=AppConfig.getimageUrl;
  public errorMsg="";
  public showerror : boolean = false;
  public cities=[];
  public Venuetypes=[];
  constructor(private weddingApiService: WeddingApiService) { 
    this.cities=CITY;
    this.Venuetypes=TYPE;
  }
  ngOnInit() {
    this.getvenueDetails();
  }

//to search venue by name
search(name){
  this.weddingApiService.searchByName(name).subscribe((res)=>{
    this.venue=res;
  },(error:any)=>{
  })
}

//to search venue by city
searchCity(city){
  this.weddingApiService.searchByCity(city).subscribe((res)=>{
    this.venue=res;
  },(error:any)=>{
    console.log(error);
  })
}

//to search venue by type
searchVenueType(venuetype){
  this.weddingApiService.searchByType(venuetype).subscribe((res)=>{
    this.venue=res;
  },(error:any)=>{
    console.log(error);
  })
}

// enquiry form
enquiry(){

}

 // get data of venue details from database
 getvenueDetails() {
   this.weddingApiService.getvenueDetails().subscribe((res) =>{
     this.venue = res;
     console.log(this.venue);
   },(error:any)=>{
     this.errorMsg = error.statusText;
     this.showerror = true;
   })
 }

}
