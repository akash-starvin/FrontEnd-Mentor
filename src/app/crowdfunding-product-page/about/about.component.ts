import { Component, OnInit } from '@angular/core';
import { Constants } from '../Constants';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  pledgeCardsData = Constants.pledgeCardsData.slice();
  constructor() {}

  ngOnInit(): void {
    this.pledgeCardsData.shift();
  }
}
