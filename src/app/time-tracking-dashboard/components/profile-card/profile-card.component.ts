import { Component, OnInit } from '@angular/core';
import { GetJsonDataService } from 'src/app/time-tracking-dashboard/service/get-json-data.service';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  timeFrames: string[] = ['daily', 'weekly', 'monthly'];
  activeTimeFrame: string = this.timeFrames[0];

  constructor(private getJsonDataService: GetJsonDataService) {}

  ngOnInit(): void {}

  changeTimeFrame(time: string) {
    this.activeTimeFrame = time;
    this.getJsonDataService.selectedTimeFrame.next(time);
  }
}
