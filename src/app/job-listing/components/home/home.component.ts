import { Component, OnInit } from '@angular/core';
import { FetchApiService } from '../../services/fetch-api.service';
import { Job } from '../interface/job';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  URL: string = './../../../assets/job-listing/mock-data/job-list.json';
  jsonResponse: Job[] = [];

  constructor(private fetchApi: FetchApiService) {
    this.getMockData(this.URL);
  }

  ngOnInit(): void {}

  clearAll() {}

  getMockData(url: string){
    this.fetchApi.getJSON(url).subscribe(data => {
      this.jsonResponse = data;
  });
  }
}
