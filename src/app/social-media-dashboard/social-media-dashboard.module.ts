import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaDashboardRoutingModule } from './social-media-dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MediaCardComponent } from './components/media-card/media-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    MediaCardComponent
  ],
  imports: [
    CommonModule,
    SocialMediaDashboardRoutingModule
  ]
})
export class SocialMediaDashboardModule { }
