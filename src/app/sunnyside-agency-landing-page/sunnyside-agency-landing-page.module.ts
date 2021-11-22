import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SunnysideAgencyLandingPageRoutingModule } from './sunnyside-agency-landing-page-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    SunnysideAgencyLandingPageRoutingModule
  ]
})
export class SunnysideAgencyLandingPageModule { }
