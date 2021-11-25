import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrowdfundingProductPageRoutingModule } from './crowdfunding-product-page-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProjectCardComponent } from './project-card/project-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    CrowdfundingProductPageRoutingModule
  ]
})
export class CrowdfundingProductPageModule { }
