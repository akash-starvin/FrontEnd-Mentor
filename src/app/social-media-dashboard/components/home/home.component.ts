import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isDarkMode: boolean = false;

  socialMediaData = [
    {
      userName: '@nathanf',
      followers: '1987',
      stats: '12',
      statsTrend: 'up',
      handleName: 'Facebook',
      logo: '../../../../assets/social-media-dashboard/icons/icon-facebook.svg'
    },
    {
      userName: '@nathanf',
      followers: '1044',
      stats: '99',
      statsTrend: 'up',
      handleName: 'Twitter',
      logo: '../../../../assets/social-media-dashboard/icons/icon-twitter.svg'
    },
    {
      userName: '@realnathanf',
      followers: '11k',
      stats: '1099',
      statsTrend: 'up',
      handleName: 'Instagram',
      logo: '../../../../assets/social-media-dashboard/icons/icon-instagram.svg'
    },{
      userName: 'Nathan F',
      followers: '8239',
      stats: '144',
      statsTrend: 'down',
      handleName: 'Youtube',
      logo: '../../../../assets/social-media-dashboard/icons/icon-youtube.svg'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  changeStatus() {
    this.isDarkMode = !this.isDarkMode;
  }
}
