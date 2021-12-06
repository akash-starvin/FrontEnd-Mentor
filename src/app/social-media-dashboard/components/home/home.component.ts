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
      logo: '../../../../assets/social-media-dashboard/icons/icon-facebook.svg',
    },
    {
      userName: '@nathanf',
      followers: '1044',
      stats: '99',
      statsTrend: 'up',
      handleName: 'Twitter',
      logo: '../../../../assets/social-media-dashboard/icons/icon-twitter.svg',
    },
    {
      userName: '@realnathanf',
      followers: '11k',
      stats: '1099',
      statsTrend: 'up',
      handleName: 'Instagram',
      logo: '../../../../assets/social-media-dashboard/icons/icon-instagram.svg',
    },
    {
      userName: 'Nathan F',
      followers: '8239',
      stats: '144',
      statsTrend: 'down',
      handleName: 'Youtube',
      logo: '../../../../assets/social-media-dashboard/icons/icon-youtube.svg',
    },
  ];

  overviewCardData = [
    {
      title: 'Page View',
      handleName: 'Facebook',
      count: '87',
      stats: 3,
      statsTrend: 'up',
      logo: '../../../../assets/social-media-dashboard/icons/icon-facebook.svg',
    },
    {
      title: 'Likes',
      handleName: 'Facebook',
      count: '52',
      stats: 2,
      statsTrend: 'down',
      logo: '../../../../assets/social-media-dashboard/icons/icon-facebook.svg',
    },
    {
      title: 'Likes',
      handleName: 'Instagram',
      count: '5462',
      stats: 2257,
      statsTrend: 'up',
      logo: '../../../../assets/social-media-dashboard/icons/icon-instagram.svg',
    },
    {
      title: 'Profile View',
      handleName: 'Instagram',
      count: '52k',
      stats: 1375,
      statsTrend: 'up',
      logo: '../../../../assets/social-media-dashboard/icons/icon-instagram.svg',
    },
    {
      title: 'Retweets',
      handleName: 'Twitter',
      count: '117',
      stats: 303,
      statsTrend: 'up',
      logo: '../../../../assets/social-media-dashboard/icons/icon-twitter.svg',
    },
    {
      title: 'Likes',
      handleName: 'Twitter',
      count: '507',
      stats: 553,
      statsTrend: 'up',
      logo: '../../../../assets/social-media-dashboard/icons/icon-twitter.svg',
    },
    {
      title: 'Likes',
      handleName: 'Youtube',
      count: '107',
      stats: 19,
      statsTrend: 'down',
      logo: '../../../../assets/social-media-dashboard/icons/icon-youtube.svg',
    },
    {
      title: 'Total Views',
      handleName: 'Youtube',
      count: '1407',
      stats: 12,
      statsTrend: 'down',
      logo: '../../../../assets/social-media-dashboard/icons/icon-youtube.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  changeStatus() {
    this.isDarkMode = !this.isDarkMode;
  }
}
