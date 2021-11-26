import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  pledgeCardsData = [
    {
      title: 'Bamboo Stand',
      amount: 'Pledge $25 or more',
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      stock: 101,
    },
    {
      title: 'Black Edition Stand',
      amount: 'Pledge $75 or more',
      description:
        'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      stock: 64,
    },
    {
      title: 'Mahogany Special Edition',
      amount: 'Pledge $200 or more',
      description:
        'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      stock: 0,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
