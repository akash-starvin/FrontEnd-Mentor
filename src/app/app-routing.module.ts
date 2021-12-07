import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todo-app',
    loadChildren: () => import('./todo-app/todo-app.module').then(m => m.TodoAppModule)
  },
  {
    path: 'social-media-dashboard',
    loadChildren: () => import('./social-media-dashboard/social-media-dashboard.module').then(m => m.SocialMediaDashboardModule)
  },
  {
    path: 'time-tracking-dashboard',
    loadChildren: () => import('./time-tracking-dashboard/time-tracking-dashboard.module').then(m => m.TimeTrackingDashboardModule)
  },
  {
    path: 'tip-calculator',
    loadChildren: () => import('./tip-calculator/tip-calculator.module').then(m => m.TipCalculatorModule)
  },
  {
    path: 'sunnyside-agency-landing-page',
    loadChildren: () => import('./sunnyside-agency-landing-page/sunnyside-agency-landing-page.module').then(m => m.SunnysideAgencyLandingPageModule)
  },
  {
    path: 'crowdfunding-product-page',
    loadChildren: () => import('./crowdfunding-product-page/crowdfunding-product-page.module').then(m => m.CrowdfundingProductPageModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
