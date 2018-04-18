import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../../../config/config.constant';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit {
public bgImage=AppConfig.localImg;
  constructor() { }

  ngOnInit() {
  }

}
