import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrowdfundingProductPageRoutingModule } from './crowdfunding-product-page-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CrowdfundingProductPageRoutingModule
  ]
})
export class CrowdfundingProductPageModule { }
