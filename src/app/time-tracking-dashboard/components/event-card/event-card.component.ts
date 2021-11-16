import { Component, Input, OnInit } from '@angular/core';
import { GetJsonDataService } from 'src/app/time-tracking-dashboard/service/get-json-data.service';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() cardData: any;

  currentTimeFrame: string = ''

  constructor(private getJsonDataService: GetJsonDataService) {}

  ngOnInit(): void {
    this.getCurrentTimeFrame();
  }

  getImageSrc(key: string) {
    let imgSrc: string = '';
    switch (key) {
      case 'Work': {
        imgSrc =
        './../../../../assets/time-tracking-dashboard/images/icon-work.svg';
        break;
      }
      case 'Play': {
        imgSrc =
        './../../../../assets/time-tracking-dashboard/images/icon-play.svg';
        break;
      }
      case 'Study': {
        imgSrc =
        './../../../../assets/time-tracking-dashboard/images/icon-study.svg';
        break;
      }
      case 'Exercise': {
        imgSrc =
        './../../../../assets/time-tracking-dashboard/images/icon-exercise.svg';
        break;
      }
      case 'Social': {
        imgSrc =
        './../../../../assets/time-tracking-dashboard/images/icon-social.svg';
        break;
      }
      case 'Self Care': {
        imgSrc =
        './../../../../assets/time-tracking-dashboard/images/icon-self-care.svg';
        break;
      }
    }
    return imgSrc;
  }

  getCurrentTimeFrame(){
    this.getJsonDataService.selectedTimeFrame.subscribe((value: any) => {
      this.currentTimeFrame = value;
    });
  }

  getCurrentHours(){
    return this.cardData.timeframes[this.currentTimeFrame].current;
  }

  getPreviousHours(){
    return this.cardData.timeframes[this.currentTimeFrame].previous;
  }
}
