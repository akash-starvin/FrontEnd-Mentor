import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mode = new FormControl('over');
  navItems = [
    {
      routerLink: 'social-media-dashboard',
      displayName: 'Social Media Dashboard',
      key: 'social-media-dashboard',
    },
    {
      routerLink: 'crowdfunding-product-page',
      displayName: 'Crowdfunding Product Page',
      key: 'crowdfunding-product-page',
    },
    {
      routerLink: 'sunnyside-agency-landing-page',
      displayName: 'Sunnyside Agency Landing Page',
      key: 'sunnyside-agency-landing-page',
    },
    {
      routerLink: 'time-tracking-dashboard',
      displayName: 'Time Tracking Dashboard',
      key: 'time-tracking-dashboard',
    },
    {
      routerLink: 'tip-calculator',
      displayName: 'Tip Calculator',
      key: 'tip-calculator',
    },
  ];
  selectedNav: string = 'time-tracking-dashboard';

  constructor() {}

  ngOnInit() {}

  setNav(key: string) {
    this.selectedNav = key;
  }
}
