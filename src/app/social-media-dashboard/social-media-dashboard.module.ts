import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaDashboardRoutingModule } from './social-media-dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MediaCardComponent } from './components/media-card/media-card.component';
import { OverviewCardComponent } from './components/overview-card/overview-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    MediaCardComponent,
    OverviewCardComponent
  ],
  imports: [
    CommonModule,
    SocialMediaDashboardRoutingModule
  ]
})
export class SocialMediaDashboardModule { }
