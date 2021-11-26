import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrowdfundingProductPageRoutingModule } from './crowdfunding-product-page-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { StatsComponent } from './stats/stats.component';
import { AboutComponent } from './about/about.component';
import { PledgeCardComponent } from './pledge-card/pledge-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RewardsDailogComponent } from './modal/rewards-dailog/rewards-dailog.component';
import { ConfirmationDialogComponent } from './modal/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ProjectCardComponent,
    StatsComponent,
    AboutComponent,
    PledgeCardComponent,
    RewardsDailogComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    CrowdfundingProductPageRoutingModule,
    MatDialogModule,
  ],
})
export class CrowdfundingProductPageModule {}
