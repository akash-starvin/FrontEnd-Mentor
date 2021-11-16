import { Component, OnInit } from '@angular/core';
import { GetJsonDataService } from '../../service/get-json-data.service';

@Component({
  selector: 'time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.scss']
})
export class TimeTrackingComponent implements OnInit {

  URL: string = './assets/time-tracking-dashboard/mock-data/data.json'
  jsonResponse: any

  constructor(private getJsonDataService:GetJsonDataService) { }

  ngOnInit(): void {
    this.getJsonData();
  }

  getJsonData(){
    this.getJsonDataService.getJSON(this.URL).subscribe(data => {
      this.jsonResponse = data;
  });
  }
}
