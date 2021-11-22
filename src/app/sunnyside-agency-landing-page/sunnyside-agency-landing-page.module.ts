import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SunnysideAgencyLandingPageRoutingModule } from './sunnyside-agency-landing-page-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    SunnysideAgencyLandingPageRoutingModule
  ]
})
export class SunnysideAgencyLandingPageModule { }
