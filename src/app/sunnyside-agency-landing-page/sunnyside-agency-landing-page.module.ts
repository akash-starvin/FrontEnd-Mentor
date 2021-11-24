import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SunnysideAgencyLandingPageRoutingModule } from './sunnyside-agency-landing-page-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TextCardComponent } from './components/text-card/text-card.component';
import { FruitCardComponent } from './components/fruit-card/fruit-card.component';
import { FeedbackCardComponent } from './components/feedback-card/feedback-card.component';
import { ImageCardComponent } from './components/image-card/image-card.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    PageHeaderComponent,
    TextCardComponent,
    FruitCardComponent,
    FeedbackCardComponent,
    ImageCardComponent
  ],
  imports: [
    CommonModule,
    SunnysideAgencyLandingPageRoutingModule
  ]
})
export class SunnysideAgencyLandingPageModule { }
