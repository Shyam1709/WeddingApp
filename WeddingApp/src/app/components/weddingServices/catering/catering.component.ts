import { Component, OnInit } from '@angular/core';
import { AppConfig} from '../../../config/config.constant';
import { WeddingApiService } from '../../../services/wedding-api.service';

@Component({
	selector: 'app-catering',
	templateUrl: './catering.component.html',
	styleUrls: ['./catering.component.css'],
	providers:[WeddingApiService]
})
export class CateringComponent implements OnInit {
	//public bgImage=AppConfig.localImg;
	public imageUrl=AppConfig.getimageUrl; 
	public cateringProvider:any=[];

	constructor(private weddingApiService: WeddingApiService) { }

	ngOnInit() {
		this.getcateringDetails();
	}

   // get data of catering Provider details from database
   getcateringDetails() {
   	debugger
   	this.weddingApiService.getCatering().subscribe((res) =>{
   		this.cateringProvider = res;
   		console.log(this.cateringProvider);
   	},(error:any)=>{
   		console.log(error);
   	})
   }

 }
