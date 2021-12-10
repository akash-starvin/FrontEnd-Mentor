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
  displayCardsArray: Job[] = [];
  filterTags: string[] = [];

  constructor(private fetchApi: FetchApiService) {
    this.getMockData(this.URL);
  }

  ngOnInit(): void {}

  getMockData(url: string) {
    this.fetchApi.getJSON(url).subscribe((data) => {
      this.jsonResponse = data;
      this.displayCardsArray = data;
    });
  }

  addToTagsList(tag: string) {
    if (!this.checkTagExists(tag)) {
      this.filterTags.push(tag);
    }
    this.checkMainArray();
  }

  checkTagExists(tag: string) {
    return this.filterTags.includes(tag);
  }

  removeFilter(tag: string) {
    this.filterTags = this.filterTags.filter((obj) => obj !== tag);
    this.checkMainArray();
  }

  clearAll() {
    this.filterTags = [];
    this.displayCardsArray = this.jsonResponse;
  }

  checkMainArray() {
    this.displayCardsArray = [];
    for (let i = 0; i < this.jsonResponse.length; i++) {
      let count = 0;
      for (let j = 0; j < this.filterTags.length; j++) {
        let flag = false;
        for (let k = 0; k < this.jsonResponse[i].tags.length; k++) {
          if (this.filterTags[j] === this.jsonResponse[i].tags[k]) {
            flag = true;
            break;
          }
        }
        if (flag) {
          count++;
        }
      }
      if (count == this.filterTags.length) {
        this.displayCardsArray.push(this.jsonResponse[i]);
      }
    }
  }
}
