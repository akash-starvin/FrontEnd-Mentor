import { Component, OnInit } from '@angular/core';
import { Constants } from '../../Constants';

@Component({
  selector: 'app-rewards-dailog',
  templateUrl: './rewards-dailog.component.html',
  styleUrls: ['./rewards-dailog.component.scss'],
})
export class RewardsDailogComponent implements OnInit {
  pledgeCardsData = Constants.pledgeCardsData;

  selectedCard: any = null;

  constructor() {}

  ngOnInit(): void {}

  selectedReward(key: string){
    this.selectedCard = key;
  }

  contiue(){}
}
