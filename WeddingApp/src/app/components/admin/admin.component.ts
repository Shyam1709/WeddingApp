import { Component, OnInit } from '@angular/core';
import { WeddingApiService } from '../../services/wedding-api.service';
import {NgForm} from '@angular/forms';


@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css'],
	providers:[WeddingApiService]
})
export class AdminComponent implements OnInit {
	public updateData : any={};

	constructor(private weddingApiService: WeddingApiService) { }


	ngOnInit() {
	}

//to update current venue details in the database
onSubmit(uploadData) {
    this.weddingApiService.updateDetails(this.updateData).subscribe(data=>{
    },(error:any)=>{
    })
    }
}
