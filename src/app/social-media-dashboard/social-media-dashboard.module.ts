import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaDashboardRoutingModule } from './social-media-dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SocialMediaDashboardRoutingModule
  ]
})
export class SocialMediaDashboardModule { }
