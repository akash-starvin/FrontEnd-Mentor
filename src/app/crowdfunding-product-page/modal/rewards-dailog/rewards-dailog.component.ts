import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rewards-dailog',
  templateUrl: './rewards-dailog.component.html',
  styleUrls: ['./rewards-dailog.component.scss'],
})
export class RewardsDailogComponent implements OnInit {
  pledgeCardsData = [
    {
      title: 'Pledge with no reward',
      amount: 0,
      description:
        'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
      stock: 0,
      key: 'no-reward'
    },
    {
      title: 'Bamboo Stand',
      amount: 'Pledge $25 or more',
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      stock: 101,
      key: 'bamboo-stand'
    },
    {
      title: 'Black Edition Stand',
      amount: 'Pledge $75 or more',
      description:
        'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      stock: 64,
      key: 'black-edition-stand'
    },
    {
      title: 'Mahogany Special Edition',
      amount: 'Pledge $200 or more',
      description:
        'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      stock: 0,
      key: 'mahogany-special-edition'
    }
  ];

  selectedCard: any = null;

  constructor() {}

  ngOnInit(): void {}

  selectedReward(key: string){
    this.selectedCard = key;
  }

  contiue(){}
}
