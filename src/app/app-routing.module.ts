import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'time-tracking-dashboard',
    loadChildren: () => import('./time-tracking-dashboard/time-tracking-dashboard.module').then(m => m.TimeTrackingDashboardModule)
  },
  {
    path: 'tip-calculator',
    loadChildren: () => import('./tip-calculator/tip-calculator.module').then(m => m.TipCalculatorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
