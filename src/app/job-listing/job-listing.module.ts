import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobListingRoutingModule } from './job-listing-routing.module';
import { HomeComponent } from './components/home/home.component';
import { JobCardComponent } from './components/job-card/job-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    JobCardComponent
  ],
  imports: [
    CommonModule,
    JobListingRoutingModule
  ]
})
export class JobListingModule { }
