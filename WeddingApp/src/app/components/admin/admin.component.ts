import { Component, OnInit } from '@angular/core';
import { WeddingApiService } from '../../services/wedding-api.service';
import { AppConfig }from '../../config/config.constant';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {NgForm} from '@angular/forms';



@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css'],
	providers:[WeddingApiService]
})
export class AdminComponent implements OnInit {
	public updateData : any={};
  public hidden=true;
  public  venue_image:string="";
  selectedFile=null;
  constructor(private weddingApiService: WeddingApiService, private http:Http) { }
 
  ngOnInit() {
  }

  onFileSelected(event){
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile.name);
  }

  upload(){
    const fd = new FormData();
    fd.append('file', this.selectedFile)
    this.http.post(AppConfig.imageUrl,fd).subscribe((res)=>{
      console.log(res);
    });  

  }

//to update current venue details in the database
onSubmit(updateData) {
  updateData.venue_image=this.selectedFile.name;
  this.weddingApiService.updateDetails(this.updateData).subscribe(data=>{
    console.log(data);
  },(error:any)=>{
  })
}
}
