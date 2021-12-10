import { Component, OnInit } from '@angular/core';
import { FetchApiService } from '../../services/fetch-api.service';
import { Job } from '../../interface/job';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  URL: string = './../../../assets/job-listing/mock-data/job-list.json';
  jsonResponse: Job[] = [];
  filterTags: string[] = [];

  constructor(private fetchApi: FetchApiService) {
    this.getMockData(this.URL);
  }

  ngOnInit(): void {}

  getMockData(url: string) {
    this.fetchApi.getJSON(url).subscribe((data) => {
      this.jsonResponse = data;
    });
  }

  addToTagsList(tag: string) {
    if (!this.checkTagExists(tag)) {
      this.filterTags.push(tag);
    }
  }

  checkTagExists(tag: string) {
    return this.filterTags.includes(tag);
  }

  removeFilter(tag: string) {
    this.filterTags = this.filterTags.filter((obj) => obj !== tag);
  }

  clearAll() {
    this.filterTags = [];
  }
}
